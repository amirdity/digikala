import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
type Pages = {
  link: string;
  src: string;
  alt: string;
  children: React.ReactNode;
};
function Pages({ link, src, alt, children }: Pages) {
  // prees cntrl + shift + 2 to have half space
  return (
    <>
      <Link
        to={link}
        className="flex flex-row gap-x-2 justify-center items-center"
      >
        <img src={src} alt={alt} className="w-[18px]" />
        {children}
      </Link>
    </>
  );
}

Pages.propTypes = {};

export default Pages;
