"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="navbar navbar-expand-md">
      <div className="container-fluid">
        <a className="navbar-brand d-md-none" href="/">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            loading="lazy"
            src="/img/AAPC_Logo.png"
            className="h-auto"
            alt=""
          />
          {/* <img loading="lazy" src="/img/AAPC_Logo.png" alt="" /> */}
        </a>
        <button
          className="navbar-toggler navbar-dark"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a
                className={`nav-link ${pathname === "/" ? "activeLink" : ""}`}
                aria-current="page"
                href="/"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  pathname.includes("/services") ? "activeLink" : ""
                }`}
                href="/services"
              >
                Services
              </Link>
            </li>
            <a className="navbar-brand d-none d-md-block" href="/">
              <Image
                width={0}
                height={0}
                sizes="100vw"
                loading="lazy"
                src="/img/AAPC_Logo.png"
                alt=""
                className="h-auto"
              />
              {/* <img loading="lazy" src="/img/AAPC_Logo.png" alt="" /> */}
            </a>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  pathname.includes("/projects") ? "activeLink" : ""
                }`}
                href="/projects"
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  pathname.includes("/contact") ? "activeLink" : ""
                }`}
                href="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
