import React from "react";
import PropTypes from "prop-types";

function Page({ children, title, imgSrc, imgAlt }) {
  return (
    <section id="main" className="wrapper">
      <div className="inner">
        {title && <h1 className="major">{title}</h1>}
        {imgSrc && <span className="image fit"><img src={imgSrc} alt={imgAlt} /></span>}
        {children}
      </div>
    </section>
  );
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
};

export default Page;
