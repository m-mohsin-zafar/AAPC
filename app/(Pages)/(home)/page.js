import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Topper from "./components/topper";
import Process from "./components/process";
import About from "./components/about";
import Team from "./components/team";
// import LoadingScreen from "./components/loading-screen";
import "../../../public/css/home.css";
import "../../../public/css/home-services.css";

export const metadata = {
    title: "AAPC | Home",
    description:
        "AAPC operates in seamless collaboration with the NYC Department of Buildings (DOB) and other pertinent entities throughout the architectural process demonstrating a meticulous commitment to not only adhere to regulations but also navigate them with precision when intervening in established spaces",
    keywords: "Architecture, AAPC, Building, Design, Drafting",
    alternates: {
        canonical: "https://aapc.nyc",
    },
};

const Home = () => {
    return (
        <>
            <head>
                <meta property="og:title" content="Azarkian Architecture P.C." />
            </head>
            <div>
                {/* <LoadingScreen/> */}
                <Navbar />
                <Topper />
                <Process />
                <About />
                <Team />
                <Footer />
            </div>
        </>
    );
};

export default Home;
