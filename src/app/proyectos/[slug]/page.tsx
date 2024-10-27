"use client";
import React from "react";
import { initialData } from "@/seed/seed";
import { motion } from "framer-motion";
import NavBar from "@/components/01_NavBar/NavBar";
import { GoArrowUpRight } from "react-icons/go";

import ToolAcount from "@/components/02_Proyectos/ToolAcount";
import ButtonLink from "@/components/02_Proyectos/ButtonLink";
import { MdAccountBox } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { FaLinkedinIn } from "react-icons/fa";

function ProyectDetails({ params }: { params: { slug: string } }) {
  const project = initialData.proyectos.find((p) => p.slug === params.slug);

  if (!project) {
    return <div>Proyecto no encontrado</div>;
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className=" pt-10 text-gray-600 "
      >
        <NavBar />
        <div className="flex w-[80%]  space-x-4 mx-auto mt-8">
          <div className="flex border bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-lg w-full ">
            <div className="py-5 pl-5 max-[425px]:p-5 rounded-l-lg w-[56%] max-[425px]:w-full">
              <div className="flex max-[425px]:flex-col text-sm space-x-4 max-[425px]:space-x-0 lnueva w-[90%] max-[425px]:w-full text-gray-500">
                <div className="border rounded-md  ">
                  <div className="cover bg-[url('/foto.jpg')] w-[20%] max-[425px]:w-[30%] rounded-md  h-[40%] max-[425px]:h-1/2 max-[425px]:bg-[url('/puente.jpg')]" />
                </div>
                <div className="w-[90%]  max-[425px]:w-full max-[425px]:mx-0 max-[425px]:pt-2 text-xs">
                  <div className="flex max-[425px]:w-full max-[425px]:items-center">
                    <div className="flex space-x-2 max-[425px]:w-full">
                      <div className="text-sm max-[425px]:text-xs font-bold lnueva">
                        {project.title}
                      </div>
                      <div className="flex items-center">#Founder</div>
                    </div>
                    
                  </div>
                  <div className="font-normal max-[425px]:w-full py-3 max-[425px]:pt-3 max-[425px]:pb-0 inter">
                  
                    {project.description}
                    <a
                      target="_blank"
                      href="https://speed-general-app.vercel.app/"
                      className=" underline  decoration-sky-500 font-bold"
                    ></a>
                  </div>
                  <Button className=" border-sky-700 bg-sky-200 space-x-2 max-[425px]:text-text-xs">
                    <a target="_blank" href={project.url}>
                      <GoArrowUpRight 
                      className="text-xs lnueva text-sky-700" />
                    </a>
                    <label className="text-xs lnueva text-sky-700">
                      Ir al Proyecto
                    </label>
                  </Button>
                
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
        <h2 className="w-[80%] mx-auto mt-6 text-black dark:text-white text-lg lnueva font-bold max-[425px]:mb-2">
          Fotos
        </h2>
        <div className="grid w-[80%] h-[1400px] mb-8 mt-4  mx-auto grid-cols-4 grid-rows-3 gap-4 rounded-lg">
          <div className="col-span-4   border rounded-lg">
            <img
              className="w-full h-full object-cover object-top rounded-lg" // Ajusta el tamaño de la imagen
              src={`/${project.images}`} // Asegúrate de que la ruta de la imagen es correcta
              alt={`Imagen de ${project.title}`}
            />
          </div>
          <div className="col-span-2 row-start-2 border rounded-lg">2</div>
          <div className="col-span-2 col-start-3 row-start-2 border rounded-lg">
            3
          </div>
          <div className="row-start-3 border rounded-lg">4</div>
          <div className="row-start-3 border rounded-lg">5</div>
          <div className="row-start-3 border rounded-lg">6</div>
          <div className="row-start-3 border rounded-lg">7</div>
        </div>
      </motion.div>
    </>
  );
}

export default ProyectDetails;
