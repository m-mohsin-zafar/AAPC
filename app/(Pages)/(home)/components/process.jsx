"use client";
import Image from "next/image";
import { useEffect } from "react";
import Tilt from "react-parallax-tilt";

const Process = () => {
  useEffect(() => {
    function ChangeStep(name, description, img) {
      this.name = name;
      this.description = description;
      this.img = img;
    }

    // An array containing all the projects with their information
    var projects = [
      new ChangeStep(
        "Feasibility",
        "Our Team, Commences with an in-depth discussion to ascertain the project's scope, objectives, and financial parameters, which Involves a comprehensive assessment to gauge the project's viability, taking into account zoning regulations and other relevant considerations.",
        "../project/content/113 Franklin/IMG_6183.jpeg"
      ),
      new ChangeStep(
        "Design Phase",
        "Our process continues with the Schematic Design phase, during which we diligently craft initial design concepts and layouts that incorporate all client requirements. As we seamlessly transition into the Design Development stage, our focus sharpens on refining these concepts, delving into the creation of detailed plans and specifications. This iterative progression ensures a comprehensive and tailored approach to transforming ideas into concrete, well-defined designs.",
        "project/content/480 7th ave/7.jpg"
      ),
      new ChangeStep(
        "Documentation",
        "To ensure precise and comprehensible deliverables, our process seamlessly advances to the Construction Drawings phase. Here, we produce detailed technical drawings that serve as a roadmap for the construction process. These drawings are accompanied by clear Specifications, providing written descriptions of materials and methods to further enhance the clarity and precision of the construction guidelines. This meticulous combination of detailed drawings and specifications forms a robust foundation for the seamless execution of the envisioned project.",
        "../project/content/480 7th ave/5.jpg"
      ),
      new ChangeStep(
        "Bidding and Negotiation",
        "It is part of our due-deligence to assist clients in the solicitation and evaluation of bids from contractors. We maintain open lines of communication, ensuring clients are well-informed at every step and decision-making point as they progress through the project. Our commitment lies not only in facilitating the selection process but also in providing continuous support for informed and confident decision-making throughout the project's advancement.",
        "../project/content/480 7th ave/1.jpg"
      ),
      new ChangeStep(
        "Construction Phase",
        "During the Construction Administration stage, the AAPC team provides vigilant oversight of the construction process. Our role encompasses ensuring strict compliance with our vision and meeting our client's expectations as outlined in the agreed-upon design and documentation. This meticulous supervision is geared towards guaranteeing that the final result not only aligns with our high-quality standards but also reflects the essence of the envisioned project.",
        "../project/content/525 7th ave/3.jpg"
      ),
      new ChangeStep(
        "Close-out",
        "In the final stage, our team meticulously generates a Punch List and conducts Final Inspections. This involves a thorough assessment to ensure that all aspects of the project are completed to the satisfaction of both our standards and the client's expectations. This comprehensive approach aims to address any remaining details and guarantee that the final result meets the highest standards of quality and excellence.",
        "../project/content/44-28 55th ave/Render Edited.jpg"
      ),
    ];

    // Cacheing HTML elements
    var project = document.querySelector("#stepContainer");
    var projName = document.querySelector("#stepTitle");
    var projDescr = document.querySelector("#stepBody");
    var projImg = document.querySelector("#stepImg");
    var projButton = document.querySelector("#stepButton");
    var projButton2 = document.querySelector("#stepButton2");

    // Index of the current project being displayed
    var projIndex = 0;

    projButton.addEventListener("click", function () {
      // Fade out
      project.style.opacity = 0;

      // Fade in
      setTimeout(function () {
        projIndex = (projIndex + 1) % projects.length;
        projImg.src = projects[projIndex].img;
        setTimeout(function () {
          projName.innerHTML = projects[projIndex].name;
          projDescr.innerHTML = projects[projIndex].description;
          project.style.opacity = 1;
        }, 500);
      }, 950);
    });

    projButton2.addEventListener("click", function () {
      // Fade out
      project.style.opacity = 0;

      // Fade in
      setTimeout(function () {
        if (projIndex === 0) {
          projIndex = 5;
        } else {
          projIndex = (projIndex - 1) % projects.length;
        }
        projImg.src = projects[projIndex].img;
        setTimeout(function () {
          projName.innerHTML = projects[projIndex].name;
          projDescr.innerHTML = projects[projIndex].description;
          project.style.opacity = 1;
        }, 100);
      }, 950);
    });
  }, []);

  return (
    <div
      className="flex-container"
      style={{
        position: "relative",
      }}
    >
      <div className="flex-item-left" id=""></div>
      <div className="flex-item-right">
        <Tilt className="glass-section-header" glareEnable={true} glareMaxOpacity={0.1} gyroscope={true} transitionSpeed={300} tiltMaxAngleX={2} tiltMaxAngleY={2}>
          <h1 className="g-s-h-text">Our Process</h1>
        </Tilt>
        <div id="stepContainer">
          <Image width={0} height={0} sizes="100vw" loading="lazy" id="stepImg" className="step-section-img" src="/project/content/113 Franklin/IMG_6183.jpeg" alt="building" />
          <Tilt className="glass-section-content" glareEnable={true} glareMaxOpacity={0.1} gyroscope={true} transitionSpeed={300} tiltMaxAngleX={2} tiltMaxAngleY={2}>
            <h2 id="stepTitle" className="g-s-c-text-top">
              Feasibility
            </h2>
            <div
              style={{
                width: "100%",
                height: "78%",
                overflow: "auto",
              }}
            >
              <h4 id="stepBody" className="g-s-c-text">
                Our Team begins with an in-depth discussion to ascertain the project&apos;s scope, objectives, and financial parameters, which Involves a comprehensive assessment to gauge the project&apos;s viability, taking into account zoning regulations and other relevant considerations.
              </h4>
            </div>
            <button id="stepButton">Next</button>
            <button id="stepButton2">Previous</button>
          </Tilt>
        </div>
      </div>
    </div>
  );
};

export default Process;
