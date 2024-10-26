import React from "react";
import { Button } from "../ui/button";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function ButtonLink() {
  return (
    <div className="flex space-x-3 max-[425px]:hidden">
      <a href="https://www.linkedin.com/in/darli-barreto/" target="_blank" rel="noopener noreferrer">
        <Button className="border-sky-700 bg-white space-x-2 max-[425px]:text-text-xs">
          <FaLinkedinIn className="text-xs lnueva text-sky-700" />
          <span className="text-xs lnueva text-sky-700">LinkedIn</span>
        </Button>
      </a>
      <a href="https://github.com/Yopax" target="_blank" rel="noopener noreferrer">
        <Button className="border-sky-700 bg-white space-x-2 max-[425px]:text-text-xs">
          <FaGithub className="text-xs lnueva text-sky-700" />
          <span className="text-xs lnueva text-sky-700">GitHub</span>
        </Button>
      </a>
      <a href="https://www.youtube.com/@DarliWBR" target="_blank" rel="noopener noreferrer">
        <Button className="border-sky-700 bg-white space-x-2 max-[425px]:text-text-xs">
          <FaFacebook className="text-xs lnueva text-sky-700" />
          <span className="text-xs lnueva text-sky-700">YouTube</span>
        </Button>
      </a>
    </div>
  );
}

export default ButtonLink;
