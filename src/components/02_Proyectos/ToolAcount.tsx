import React from "react";
import { RiReactjsFill } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";
import { RiNextjsLine } from "react-icons/ri";
import { SiPrisma } from "react-icons/si";
import { SiRedux } from "react-icons/si";

function ToolAcount() {
  return (
    <>
      <div className="p-1  border rounded-md">
        <div className="h-[65%] p-3 bg-slate-200 rounded-md">
          <RiNextjsLine className="w-full dark:text-[#1DAAAA] h-full" />
        </div>
        <div className="flex lnueva justify-center items-center text-xs inter text-center h-[35%]">
          NextJS
        </div>
      </div>
      <div className="p-1  border rounded-md">
        <div className="h-[65%] p-3 bg-slate-200 rounded-md">
          <RiReactjsFill className="w-full dark:text-[#1DAAAA] h-full" />
        </div>
        <div className="flex lnueva justify-center items-center text-xs inter text-center h-[35%]">
          ReactJS
        </div>
      </div>
      <div className="p-1  border rounded-md">
        <div className="h-[65%] p-3 bg-slate-200 rounded-md">
          <TbBrandTypescript className="w-full dark:text-[#1DAAAA] h-full" />
        </div>
        <div className="flex lnueva justify-center items-center text-xs inter text-center h-[35%]">
          TypeScript
        </div>
      </div>
      <div className="p-1  border rounded-md">
        <div className="h-[65%] p-3 bg-slate-200 rounded-md">
          <SiRedux className="w-full dark:text-[#1DAAAA] h-full" />
        </div>
        <div className="flex lnueva justify-center items-center text-xs inter text-center h-[35%]">
          Redux
        </div>
      </div>
      <div className="p-1  border rounded-md">
        <div className="h-[65%] p-3 bg-slate-200 rounded-md">
          <SiPrisma className="w-full dark:text-[#1DAAAA] h-full" />
        </div>
        <div className="flex justify-center lnueva items-center text-xs inter text-center h-[35%]">
          Prisma
        </div>
      </div>
    </>
  );
}

export default ToolAcount;
