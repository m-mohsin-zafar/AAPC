const AboutButtons = ({ setActiveTab, activeTab }) => {
  return (
    <div className="about-buttons" style={{ marginTop: "0", paddingBottom: "1vmax" }}>
      <button className={`button ${activeTab === "Planning" ? "selected" : ""}`} id="planning-button" style={{ height: "10vh", width: "10vh" }} onClick={() => setActiveTab("Planning")}>
        <h1 className="button-text">Planning</h1>
      </button>
      <button className={`button ${activeTab === "Visualization" ? "selected" : ""}`} id="visualization-button" style={{ height: "10vh", width: "10vh" }} onClick={() => setActiveTab("Visualization")}>
        <h2 className="button-text">Visualization</h2>
      </button>
      <button className={`button ${activeTab === "ProjectManagement" ? "selected" : ""}`} id="project-management-button" style={{ height: "10vh", width: "10vh" }} onClick={() => setActiveTab("ProjectManagement")}>
        <h2 className="button-text">Project Management</h2>
      </button>
    </div>
  );
};

export default AboutButtons;
