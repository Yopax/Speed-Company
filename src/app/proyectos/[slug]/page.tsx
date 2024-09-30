"use client";
import React from "react";
import { initialData } from "@/seed/seed";
import { motion } from "framer-motion";

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
        <h1>{project.title}</h1>
        <p>Slug: {project.slug}</p>
        <p>{project.description}</p>
      </motion.div>
    </>
  );
}

export default ProyectDetails;
