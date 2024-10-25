import React from "react";
import { Button } from "../ui/button";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function ButtonLink() {
  return (
    <>
      <div className="flex space-x-3 max-[425px]:hidden ">
        <Button className=" border-sky-700 bg-white space-x-2 max-[425px]:text-text-xs">
          <a href="#">
            <FaLinkedinIn className="text-xs lnueva text-sky-700" />
          </a>
          <label className="text-xs lnueva text-sky-700">Linkedin</label>
        </Button>
        <Button className="border-sky-700 bg-white space-x-2 max-[425px]:text-text-xs">
          <a href="">
            <FaGithub className="text-xs lnueva text-sky-700" />
          </a>
          <label className="text-xs lnueva text-sky-700">GitHub</label>
        </Button>
        <Button className="border-sky-700 bg-white space-x-2 max-[425px]:text-text-xs">
          <a href="">
            <FaFacebook className="text-xs lnueva text-sky-700" />
          </a>
          <label className="text-xs lnueva text-sky-700">YouTube</label>
        </Button>
      </div>
    </>
  );
}

export default ButtonLink;
