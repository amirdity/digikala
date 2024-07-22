import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
type SupotrLinks = {
  link: string;
  src: string;
  alt: string;
  children: React.ReactNode;
};
function SuportLinks({ link, src, alt, children }: SupotrLinks) {
  return (
    <Link to={link} className="flex flex-col justify-center items-center text-center">
      <img src={src} alt={alt} className="h-[56px] w-[56px]"/>
      {children}
    </Link>
  );
}

SuportLinks.propTypes = {};

export default SuportLinks;
