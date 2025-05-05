"use client";
import Tilt from "react-parallax-tilt";

const Topper = ({ activeTab }) => {
  return (
    <div style={{ position: "relative", height: "90vh" }}>
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.1}
        gyroscope={true}
        transitionSpeed={300}
        tiltMaxAngleX={2}
        tiltMaxAngleY={2}
        style={{
          position: "absolute",
          width: "45%",
          height: "60vh",
          background:
            "linear-gradient(127deg, rgba(176, 156, 59, 0.49) 0%, rgba(125, 105, 3, 0.28) 100%)",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          backdropFilter: "blur(12px)",
          marginLeft: "10%",
        }}
      ></Tilt>

      <div
        style={{
          position: "absolute",
          width: "45%",
          height: "60vh",
          background: "url('/img/building1.jpg')",
          left: "15%",
          top: "15vh",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          backgroundSize: "cover",
        }}
      ></div>

      <div className="top-wrapper">
        {/*<Tilt*/}
        {/*  glareEnable={true}*/}
        {/*  glareMaxOpacity={0.1}*/}
        {/*  gyroscope={true}*/}
        {/*  transitionSpeed={300}*/}
        {/*  tiltMaxAngleX={2}*/}
        {/*  tiltMaxAngleY={2}*/}
        {/*  className="topper-title"*/}
        {/*>*/}
        {/*  Services*/}
        {/*</Tilt>*/}
        <div className="title-wrapper">
          {activeTab === "Planning" && (
            <h3 id="planning-top-title" className="topper-subtitle">
              Planning
            </h3>
          )}
          {activeTab === "Visualization" && (
            <h3 id="visualization-top-title" className="topper-subtitle">
              Visualization
            </h3>
          )}
          {activeTab === "ProjectManagement" && (
            <h3 id="project-management-top-title" className="topper-subtitle">
              Project Management
            </h3>
          )}
        </div>

        {activeTab === "Planning" && (
          <h3 id="planning-top" className="topper-blurb">
            This multifaceted discipline involves collaborating with clients to
            understand their needs, conceptualizing innovative design solutions,
            and navigating regulatory frameworks. From the initial stages of
            schematic design to the creation of detailed construction drawings
            and specifications, architectural planning is a dynamic process that
            integrates creativity, functionality, and compliance.{" "}
          </h3>
        )}
        {activeTab === "Visualization" && (
          <h3 id="visualization-top" className="topper-blurb">
            Architectural visualization services are an integral aspect of
            modern design, employing advanced technology to create immersive and
            realistic representations of architectural concepts. This not only
            facilitates effective communication between architects, clients, and
            stakeholders but also allows for informed decision-making by
            providing a vivid preview of the final built environment.{" "}
          </h3>
        )}
        {activeTab === "ProjectManagement" && (
          <h3 id="project-management-top" className="topper-blurb">
            Project management services encompass the orchestration and
            coordination of all aspects involved in bringing an architectural
            vision to fruition. This comprehensive role involves overseeing
            project timelines, budgets, and resources while maintaining
            effective communication among clients, architects, contractors, and
            regulatory authorities. Our expertise lies in navigating challenges,
            mitigating risks, and optimizing efficiency to deliver successful
            architectural projects that align with client expectations and
            industry best practices.
          </h3>
        )}
      </div>
    </div>
  );
};

export default Topper;
