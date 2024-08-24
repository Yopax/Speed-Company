"use client";
import React from "react";
import { motion } from "framer-motion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import One from "@/components/icons/One";
import CardProyect from "@/components/02_Proyectos/CardProyect";
import NavBar from "@/components/01_NavBar/NavBar";

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
        <div className="w-[80%] mx-auto mt-8">
          <Alert>
            <One />
            <AlertTitle>Importante!</AlertTitle>
            <AlertDescription>
            
Cada una de nuestras soluciones tecnológicas resuelve problemas específicos en la construcción y están interconectadas, formando un ecosistema cohesivo. Al finalizar, estos proyectos se integrarán en un programa único que combinará todas sus funcionalidades para ofrecer una solución completa y optimizada.
            </AlertDescription>
          </Alert>
        </div>
        <div className="w-[80%] mx-auto text-center items-center grid grid-cols-3 max-[1024px]:grid-cols-3 max-[768px]:grid-cols-2 max-[425px]:grid-cols-1 justify-center mt-4 mb-8 ">
          <CardProyect
            color={"default"}
            estado="Finalizado"
            title="01-. Speed Structural"
            description="Speed Structural, es una app web que tiene como finalidad optimizar el tiempo de calculo del predimensionamiento y metrado de cargas para un análisis y diseño sísmico."
            url="https://speedstructural.vercel.app/calculos/analisis"
          />
          <CardProyect
            color={"default"}
            estado="Finalizado"
            title="02-. Speed Structural plus"
            description="Speed Structural, es una app web que tiene como finalidad optimizar el tiempo de calculo del predimensionamiento y metrado de cargas para un análisis y diseño sísmico."
            url="https://speedstructplus.vercel.app/analisis"
          />
          <CardProyect
            color={"default"}
            estado="Finalizado"
            title="03-. Speed Concrete"
            description=" Esta app permite obtener un diseño de mezcla optimizado y listo para su uso en tus proyectos de construcción. Siguiendo unos sencillos y pocos pasos podrás descarga tu diseño de mezcla."
            url="https://speed-concrete.vercel.app/"
          />
          <CardProyect
            color={"outline"}
            estado="En desarrollo"
            title="04-. Speed Planning"
            description="Una aplicación web que permita a los gestores de proyectos de construcción planificar, asignar tareas, monitorear el progreso, y gestionar recursos."
            url="#"
          />
          <CardProyect
            color="destructive"
            estado="Pendiente"
            title="05-. Speed Budget"
            description="Un simulador que permite a los ingenieros y arquitectos calcular presupuestos detallados para proyectos de construcción, tomando en cuenta materiales."
            url="#"
          />
          <CardProyect
            color="destructive"
            estado="Pendiente"
            title="06-. Speed Inventory"
            description="Un sistema que permite a las empresas de construcción gestionar su inventario de materiales de forma eficiente."
            url="#"
          />
          <CardProyect
            color="destructive"
            estado="Pendiente"
            title="07-. Speed Academy"
            description="Una aplicación que ayuda a los estudiantes capacitarse y en el ámbito de la programación orientada ala industria de la construcción."
            url="#"
          />
          <CardProyect
            color="destructive"
            estado="Pendiente"
            title="08-. Geo Speed"
            description="Un software que ayuda a los estudiantes a realizar cálculos geotécnicos, como la capacidad portante del suelo, asentamientos, y estabilidad de taludes."
            url="#"
          />
          <CardProyect
            color="destructive"
            estado="Pendiente"
            title="09-. Speed Materials"
            description="Una aplicación que permite a los estudiantes calcular la cantidad de materiales necesarios para un proyecto, incluyendo concreto, acero, ladrillos, y otros."
            url="#"
          />
        </div>
      </motion.div>
    </>
  );
}

export default page;
