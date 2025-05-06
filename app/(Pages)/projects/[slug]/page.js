import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Topper from "./components/topper";
import Detail from "./components/detail";
import { projects } from "./data";
import "../../../../public/css/home.css";
import "../../../../public/css/project-details.css";

export async function generateMetadata({ params }) {
  const slug = params.slug;
  const project = projects.find((project) => project.slug === slug);
  return {
    title: "AAPC | " + project?.name || "",
    description: project?.about || "",
    keywords: "Architecture, AAPC, Building, Design, Drafting",
  };
}

const ProjectDetail = ({ params }) => {
  const project = projects.find((project) => project.slug === params.slug);

  return (
    <div>
      <Navbar />
      <Topper project={project} />
      <Detail project={project} />
      <Footer />
    </div>
  );
};

export default ProjectDetail;
