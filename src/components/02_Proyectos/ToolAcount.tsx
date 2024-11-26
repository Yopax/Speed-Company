import React from "react";
import { RiReactjsFill } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";
import { RiNextjsLine } from "react-icons/ri";
import { SiPrisma } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { PiFigmaLogo } from "react-icons/pi";
import { GiSnake } from "react-icons/gi";




function ToolAcount() {
  return (
    <>
    <div className="p-1  border rounded-md ">
        <div className="h-[65%] p-3 bg-slate-200 rounded-md">
          <DiMongodb className="w-full text-[#1DAAAA] h-full" />
        </div>
        <div className="flex text-white justify-center lnueva items-center text-xs inter text-center h-[35%]">
        Mongodb
        </div>
      </div>
      
      <div className="p-1  border rounded-md ">
        <div className="h-[65%] p-3 bg-slate-200 rounded-md">
          <RiNextjsLine className="w-full text-[#1DAAAA] h-full" />
        </div>
        <div className="flex text-white lnueva justify-center items-center text-xs inter text-center h-[35%]">
          NextJS
        </div>
      </div>
      <div className="p-1  border rounded-md ">
        <div className="h-[65%] p-3 bg-slate-200 rounded-md">
          <GrGraphQl className="w-full text-[#1DAAAA] h-full" />
        </div>
        <div className="flex text-white lnueva justify-center items-center text-xs inter text-center h-[35%]">
        GraphQL
        </div>
      </div>
      <div className="p-1  border rounded-md ">
        <div className="h-[65%] p-3 bg-slate-200 rounded-md">
          <TbBrandTypescript className="w-full text-[#1DAAAA] h-full" />
        </div>
        <div className="flex text-white lnueva justify-center items-center text-xs inter text-center h-[35%]">
          TypeScript
        </div>
      </div>
      <div className="p-1  border rounded-md ">
        <div className="h-[65%] p-3 bg-slate-200 rounded-md">
          <GiSnake className="w-full text-[#1DAAAA] h-full" />
        </div>
        <div className="flex text-white lnueva justify-center items-center text-xs inter text-center h-[35%]">
        Puppeteer
        </div>
      </div>
      <div className="p-1  border rounded-md ">
        <div className="h-[65%] p-3 bg-slate-200 rounded-md">
          <PiFigmaLogo className="w-full text-[#1DAAAA] h-full" />
        </div>
        <div className="flex text-white justify-center lnueva items-center text-xs inter text-center h-[35%]">
        Figma
        </div>
      </div>

    </>
  );
}

export default ToolAcount;
