import React, { useEffect, useState, useRef } from "react";
import contentfulClient from "../contentfulConfig.js";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import LocomotiveScroll from "locomotive-scroll";

const Cases = () => {
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const fetchCases = async () => {
      try {
        const response = await contentfulClient.getEntries({
          content_type: "cases",
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
      lerp: 0.5, // Adjust for smoothness
    });

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
    <section className="cases" id="cases">
      <div className="container">
        <div className="toaster">
          <span>Helping clients achieve success</span>
        </div>
        <h2>Latest cases</h2>
        <div className="cases__content">
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
        </div>
      </div>
    </section>
  );
};

export default Cases;
