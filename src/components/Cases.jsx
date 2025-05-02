import React, { useEffect, useState } from "react";
import contentfulClient from "../contentfulConfig.js";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Cases = () => {
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("tab1"); // State for active tab

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

  if (loading) {
    return <p>Loading cases...</p>;
  }

  if (error) {
    return <p>Error loading cases: {error.message}</p>;
  }

  return (
    <section className="cases" id="cases">
      <div className="container">
        <div className="cases__header">
          <div className="toaster">
            <span>Helping clients achieve success</span>
          </div>
          <h2>Latest cases</h2>
        </div>
        <ul className="tabs">
          <li
            className={activeTab === "tab1" ? "active" : ""}
            onClick={() => setActiveTab("tab1")}
          >
            Websites
          </li>
          <li
            className={activeTab === "tab2" ? "active" : ""}
            onClick={() => setActiveTab("tab2")}
          >
            Mobile apps
          </li>
          <li
            className={activeTab === "tab3" ? "active" : ""}
            onClick={() => setActiveTab("tab3")}
          >
            Web apps
          </li>
          <li
            className={activeTab === "tab4" ? "active" : ""}
            onClick={() => setActiveTab("tab4")}
          >
            Web Design
          </li>
          <li
            className={activeTab === "tab5" ? "active" : ""}
            onClick={() => setActiveTab("tab5")}
          >
            Systems
          </li>
        </ul>
        <div className="tab_container">
          {activeTab === "tab1" && (
            <div id="tab1" className="tab_content">
              <div className="cases__content">
                {cases.map((item) => (
                  <div key={item.sys.id} className="case__body">
                    <div className="case__card">
                      <img
                        src={item.fields.casesImage.fields.file.url}
                        alt={item.fields.caseTitle}
                      />
                    </div>
                    <div className="case__card">
                      <h3>{item.fields.caseTitle}</h3>
                      <div>
                        {documentToReactComponents(item.fields.caseBrief)}
                      </div>
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
          )}
          {activeTab === "tab2" && (
            <div id="tab2" className="tab_content">
              <h2>Mobile apps</h2>
            </div>
          )}
          {activeTab === "tab3" && (
            <div id="tab3" className="tab_content">
              <h2>Web apps</h2>
            </div>
          )}
          {activeTab === "tab4" && (
            <div id="tab4" className="tab_content">
              <h2>Web design</h2>
            </div>
          )}
          {activeTab === "tab5" && (
            <div id="tab4" className="tab_content">
              <h2>Systems</h2>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Cases;
