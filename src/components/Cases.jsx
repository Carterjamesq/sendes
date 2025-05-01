import React, { useEffect, useState, useRef } from "react";
import contentfulClient from "../contentfulConfig.js";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { motion } from "framer-motion";
import LocomotiveScroll from "locomotive-scroll";

const Cases = () => {
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const scrollRef = useRef(null); // Reference for Locomotive Scroll container

  useEffect(() => {
    const fetchCases = async () => {
      try {
        const response = await contentfulClient.getEntries({
          content_type: "cases", // Replace with your Contentful content type ID
        });
        setCases(response.items);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchCases();
  }, []);

  useEffect(() => {
    if (!scrollRef.current) return;

    // Initialize Locomotive Scroll
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.1, // Adjust for smoothness
    });

    // Update Locomotive Scroll when cases are loaded
    scroll.update();

    return () => {
      scroll.destroy(); // Clean up on component unmount
    };
  }, [cases]);

  if (loading) {
    return <p>Loading cases...</p>;
  }

  if (error) {
    return <p>Error loading cases: {error.message}</p>;
  }

  return (
    <motion.section
      className="cases"
      id="cases"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="container">
        <div className="toaster">
          <span>Helping clients achieve success</span>
        </div>
        <h2>Recent cases</h2>
        <motion.div
          className="cases__content"
          initial={{ opacity: 0, y: 1 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {cases.map((item) => (
            <div
              key={item.sys.id}
              className="case__grid"
              ref={scrollRef}
              data-scroll-container
            >
              <div className="case__card">
                <img
                  src={item.fields.casesImage.fields.file.url}
                  alt={item.fields.caseTitle}
                />
              </div>
              <div className="case__card">
                <h3>{item.fields.caseTitle}</h3>
                <div>{documentToReactComponents(item.fields.caseBrief)}</div>
                <div className="case__card-content">
                  <span>Client</span>
                  <span>{item.fields.caseClient}</span>
                </div>
                <div className="divider"></div>
                <div className="case__card-content">
                  <span>Role</span>
                  <span>{item.fields.role}</span>
                </div>
                <div className="divider"></div>
                <div className="case__tags">
                  {item.fields.tags.map((tag, index) => (
                    <span key={index} className="case__tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Cases;
