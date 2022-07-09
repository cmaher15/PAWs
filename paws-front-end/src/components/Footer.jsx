import React from "react";
import { Link } from "react-router-dom";

const Footer = function (props) {
  // Path Link components
  const homeLink = (
    <Link to={"/"} onClick={() => props.setUrlPath("/")}>
      Home
    </Link>
  );
  const aboutLink = (
    <Link to={"/about-us"} onClick={() => props.setUrlPath("/about-us")}>
      About
    </Link>
  );
  const termsLink = (
    <Link to={"/terms"} onClick={() => props.setUrlPath("/terms")}>
      Terms
    </Link>
  );

  // Determines what links are redered based on the current url path
  let renderLinks;
  if (props.urlPath === "/") {
    renderLinks = (
      <>
        {aboutLink}
        {termsLink}
      </>
    );
  } else if (props.urlPath === "/about-us") {
    renderLinks = (
      <>
        {homeLink}
        {termsLink}
      </>
    );
  } else {
    renderLinks = (
      <>
        {homeLink}
        {aboutLink}
      </>
    );
  }

  return (
    <div className="footer-div">
      {renderLinks}
      <p>CAE-Gang /{new Date().getFullYear()}</p>
    </div>
  );
};

export default Footer;
