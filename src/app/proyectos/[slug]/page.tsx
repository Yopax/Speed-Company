"use client";
import NavBar from "@/components/01_NavBar/NavBar";
import { motion } from "framer-motion";

export default function Proyecto({ params }: { params: { slug: string } }) {
  const { slug } = params;

  return (
    <>
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className=" pt-16 "
      >
    <NavBar />
      <div>
        <h1>Proyecto: {slug}</h1>
        {/* Aquí podrías cargar la información del proyecto usando el slug */}
      </div>
      </motion.div>
    </>
  );
}
