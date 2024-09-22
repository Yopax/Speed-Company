import React from "react";
import { Button } from "../ui/button";
import { MdFilterList } from "react-icons/md";
import { MdOutlineSpatialTracking } from "react-icons/md";
import { GiProgression } from "react-icons/gi";

function Filter() {
  return (
    <>
      <div className="flex max-[425px]:flex-col px-2 max-[425px]:px-0 w-[80%] mt-3 justify-between mx-auto space-x-2 max-[425px]:space-x-0 items-center">
        <div className="flex space-x-2 items-center">
          <p className="text-black dark:text-white text-lg lnueva font-bold max-[425px]:mb-2">Proyectos</p>
        </div>
        <div className="flex space-x-2">
          <Button className="border-slate-300 max-[425px]:border bg-white ">
            <a className="flex space-x-2 items-center text-gray-500" href="#">
              <MdOutlineSpatialTracking className="max-[425px]:hidden" />
              <label className="max-[425px]:text-[10px] font-normal text-[10px]">
                Estado
              </label>{" "}
            </a>
          </Button>
          <Button className="border-slate-300 max-[425px]:border bg-white ">
            <a className="flex space-x-2 items-center text-gray-500" href="#">
              <GiProgression className="max-[425px]:hidden" />
              <label className="max-[425px]:text-[10px] font-normal text-[10px]">
                Progreso
              </label>
            </a>
          </Button>
          <Button className="border-slate-300 max-[425px]:border bg-white ">
            <a className="flex space-x-2 items-center text-gray-500" href="#">
              <MdFilterList className="max-[425px]:hidden" />
              <label className="max-[425px]:text-[10px] font-normal text-[10px]">
                Filtrado
              </label>
            </a>
          </Button>
        </div>
      </div>
    </>
  );
}

export default Filter;
