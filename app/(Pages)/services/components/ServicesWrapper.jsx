"use client";

import { useState, useEffect } from "react";
import Topper from "./topper";
import AboutButtons from "./about-buttons";
import Planning from "./planning";
import ProjectManagement from "./project-management";
import Visualization from "./visualization";

const ServicesWrapper = () => {
  const [activeTab, setActiveTab] = useState("Planning");
  const buttonBg = () => {};

  // have initial tab be first, then take off and add to active tab

  return (
    <>
      <Topper activeTab={activeTab} />
      <AboutButtons setActiveTab={setActiveTab} activeTab={activeTab} />
      <div className="flex-container" style={{ position: "relative" }}>
        <div className="flex-item-left" id="service-text-section">
          {activeTab === "Planning" && (
            <h1 className="left-text" id="planning-title">
              Planning
            </h1>
          )}
          {activeTab === "Visualization" && (
            <h1 className="left-text" id="visualization-title">
              Visualization
            </h1>
          )}
          {activeTab === "ProjectManagement" && (
            <h1 className="left-text" id="project-management-title">
              Project Management
            </h1>
          )}
        </div>
        {activeTab === "Planning" && <Planning className="selected button-selected" />}
        {activeTab === "Visualization" && <Visualization />}
        {activeTab === "ProjectManagement" && <ProjectManagement />}
      </div>
    </>
  );
};

export default ServicesWrapper;
