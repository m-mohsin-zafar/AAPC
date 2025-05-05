import Navbar from "app/components/navbar";
import Footer from "app/components/footer";
import ServicesWrapper from "./components/ServicesWrapper";
import "../../../public/css/home.css";
import "../../../public/css/services.css";

export const metadata = {
  title: "AAPC | Services",
  description:
    "AAPC operates in seamless collaboration with the NYC Department of Buildings (DOB) and other pertinent entities throughout the architectural process demonstrating a meticulous commitment to not only adhere to regulations but also navigate them with precision when intervening in established spaces",
  keywords: "Architecture, AAPC, Building, Design, Drafting",
  alternates: {
    canonical: "https://aapc.nyc/services",
  },
};

const Services = () => {
  return (
    <div>
      <Navbar />
      <ServicesWrapper />
      <Footer />
    </div>
  );
};

export default Services;
