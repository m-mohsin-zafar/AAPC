"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./footer.module.css";
import { GoogleAnalytics, sendGTMEvent } from "@next/third-parties/google";

const Footer = () => {
  // const callClick = () => {
  //     window.location.href = "tel:212-547-9050";
  // }

  // const handleButtonClick = (url) => {
  //     // Trigger the conversion event for Google Analytics
  //     window.gtag('event', 'conversion', {
  //         'send_to': 'AW-16638080023/uRgUCJzLiewZEJfo0_09',
  //         'value': 1.0,
  //         'currency': 'USD',
  //     });
  //
  //     // Optional: You can add a callback URL or a redirect if needed
  //     window.location.href = "tel:212-547-9050";
  // };
  // function gtag_report_conversion(url) {
  //     var callback = function () {
  //         if (typeof (url) != 'undefined') {
  //             window.location.href = url;
  //         }
  //     };
  //     gtag('event', 'conversion', {
  //         'send_to': 'AW-16638080023/uRgUCJzLiewZEJfo0_09',
  //         'value': 1.0,
  //         'currency': 'USD',
  //         'event_callback': callback
  //     });
  //     return false;
  // }

  const router = useRouter();
  return (
    <div
      style={{
        position: "relative",
        width: "85%",
        borderTop: "rgba(255, 255, 255, 0.40) solid 1px",
        margin: "auto",
      }}
    >
      <footer
        style={{
          position: "relative",
          borderBottom: "rgba(255, 255, 255, 0.40) solid 1px",
          marginBottom: "1vh",
          display: "flex",
        }}
      >
        <div className="footer-left">
          <Image width={0} height={0} sizes="100vw" loading="lazy" src="/img/AAPC_Logo.png" id="footer-img" className="nav-img h-auto" alt="AAPC_Logo" />

          <p
            style={{
              opacity: 0.6,
              marginBottom: "3vh",
              lineHeight: 2.5,
            }}
          >
            AAPC is an all-encompassing, conscious team of experts that take pride in investing in the future of buildings, our clients and their clients.
          </p>
          <div className="footer-companies">
            <a href="https://azark.com/" target="blank">
              <img alt="footer" src="/img/footer-azark.png" />
            </a>
            <a href="https://www.bvs.nyc/" target="blank">
              <img alt="footer" src="/img/footer-bvs.png" />
            </a>
            <a href="https://www.arkco.nyc/" target="blank">
              <img alt="footer" src="/img/footer-arkco.png" />
            </a>
            <a href="https://az-title.com/" target="blank">
              <img alt="footer" src="/img/footer-az.png" />
            </a>
            <a href="https://vps.nyc/" target="blank">
              <img alt="footer" src="/img/footer-vps.png" />
            </a>
            <a href="https://violerts.com/" target="blank">
              <img alt="footer" src="/img/footer-violerts.png" />
            </a>
          </div>
        </div>
        <div className="footer-middle">
          <h2
            style={{
              borderBottom: "#FFDC32 2px solid",
              display: "inline-block",
            }}
          >
            Contact Us
          </h2>
          <p
            style={{
              marginBottom: "0",
            }}
            onClick={() => {
              window.open("https://maps.app.goo.gl/3S2kgXWk48vREADu9", "_blank");
            }}
          >
            <span className="fas fa-location-arrow text-white"></span> 130 W 37th Street New York, NY 10018
          </p>
          <a id="phoneNum">
            <p
              style={{
                marginBottom: "0",
              }}
              // onClick={() => gtag_report_conversion('tel:212-547-9050')}
              // onClick={() => { gtag_report_conversion("212-547-9050"); }}
              // onClick={() => { callClick()}}
              onClick={() => {
                window.location.href = "tel:212-547-9050";
                // sendGTMEvent({event: 'callButtonClicked', value: 'callButton'})
              }}
            >
              <span className="fas fa-phone text-white"></span>212-547-9050
            </p>
          </a>
          <p
            style={{
              marginBottom: "0",
            }}
            onClick={() => {
              window.location.href = "mailto:admin@aapc.nyc";
            }}
          >
            <span className="fas fa-envelope text-white"></span>admin@aapc.nyc
          </p>
          <div className={styles.socials}>
            <a href="https://www.facebook.com/people/Azark-Inc/61556755064575/" target="blank">
              <img alt="footer" src="/img/footer-facebook.png" />
            </a>
            <a href="https://www.instagram.com/aapc.nyc/" target="blank">
              <img alt="footer" src="/img/footer-insta.png" />
            </a>
            <a href="https://www.linkedin.com/company/azark-architecture-pc/" target="blank">
              <img alt="footer" src="/img/footer-linkedin.png" />
            </a>
          </div>
        </div>
        <div className="footer-right">
          <h2
            style={{
              borderBottom: "#FFDC32 2px solid",
              display: "inline-block",
            }}
          >
            Pages
          </h2>
          <p
            onClick={() => {
              window.location.href = "/";
            }}
          >
            Home
          </p>
          <p
            onClick={() => {
              router.push("/services");
            }}
          >
            Services
          </p>
          <p
            onClick={() => {
              router.push("/projects");
            }}
          >
            Projects
          </p>
          <p
            onClick={() => {
              router.push("/contact");
            }}
          >
            Contact
          </p>
          <p
            onClick={() => {
              router.push("/blog");
            }}
          >
            Blog
          </p>
        </div>
      </footer>
      <Link className="pptos" href="/privacy-policy">
        Privacy Policy
      </Link>
    </div>
  );
};

export default Footer;
