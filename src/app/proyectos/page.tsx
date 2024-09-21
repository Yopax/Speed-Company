"use client";
import React from "react";
import { motion } from "framer-motion";
import NavBar from "@/components/01_NavBar/NavBar";
import { initialData } from "@/seed/seed";
import { CardProyect } from "@/components/02_Proyectos/CardProyect";
import { MdAccountBox } from "react-icons/md";
import ButtonLink from "@/components/02_Proyectos/ButtonLink";
import ToolAcount from "@/components/02_Proyectos/ToolAcount";

function page() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className=" pt-16 "
      >
        <NavBar />
        <div className="flex w-[80%] space-x-4 mx-auto mt-8">
          <div className="flex border rounded-lg w-full ">
            <div className="py-5 pl-5 max-[425px]:p-5 rounded-l-lg w-[56%] max-[425px]:w-full">
              <div className="flex max-[425px]:flex-col text-sm space-x-4 max-[425px]:space-x-0 lnueva w-[90%] max-[425px]:w-full text-gray-500">
                <div className="border rounded-md  ">
                  <div
                    className="cover bg-[url('/foto.jpg')] w-[20%] max-[425px]:w-[30%] rounded-md max-[425px]:h-[40%] h-[40%] max-[425px]:h-1/2 max-[425px]:bg-[url('/puente.jpg')]"
                  />
                </div>
                <div className="w-[90%] max-[425px]:w-full max-[425px]:mx-0 max-[425px]:pt-2 text-xs">
                  <div className="flex max-[425px]:w-full max-[425px]:items-center">
                    <div className="flex space-x-2 max-[425px]:w-full">
                      <div className="text-sm max-[425px]:text-xs font-bold lnueva">
                        BARRETO DARLI
                      </div>
                      <div className="flex items-center">#Founder</div>
                    </div>
                    <div className="ml-2 p-1 border rounded-md ">
                      <MdAccountBox />
                    </div>
                  </div>
                  <div className="font-normal max-[425px]:w-full py-3 max-[425px]:pt-3 max-[425px]:pb-0 inter">
                    <a className=" underline  decoration-sky-500 font-bold">
                      Speed S.A.C.
                    </a>{" "}
                    crea soluciones tecnológicas y resuelve problemas específicos en la construcción. Por ello, al finalizar los proyectos planificados en esta sección, estos se integrarán en un programa<a target="_blank" href="https://speed-general-app.vercel.app/" className=" underline  decoration-sky-500 font-bold">(app)</a>  único que combinará todas sus funcionalidades.
                  </div>
                  <ButtonLink />
                </div>
              </div>
            </div>
            <div className="w-[44%] h-full p-5 max-[425px]:hidden">
              <div className="w-full h-[10%] font-semibold text-xs mb-2 text-slate-600 inter">
                Stack Empleado:
              </div>
              <div className="w-full flex h-[85%] justify-between space-x-2">
                <ToolAcount />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[80%] mx-auto text-center items-center grid grid-cols-4 max-[1024px]:grid-cols-3 max-[768px]:grid-cols-2 max-[425px]:grid-cols-1 justify-center mt-4 mb-8">
          <CardProyect projects={initialData.proyectos} />
        </div>
      </motion.div>
    </>
  );
}

export default page;
