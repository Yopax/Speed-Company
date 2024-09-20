import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import CardProyectProps from "../types/CardProyectProps";
import { Badge } from "@/components/ui/badge";
import { MdInfoOutline } from "react-icons/md";
import { Progress } from "@/components/ui/progress";

function CardProyect({
  title,
  description,
  url,
  estado,
  color,
  slug,
  pro,
  proti
}: CardProyectProps) {
  return (
    <>
      <div className="flex mx-2 my-2 max-sm:mx-0 flex-col border items-center justify-center font-bold rounded-md h-[330px]">
        <Badge variant={color}>{estado}</Badge>

        <p className="dark:text-white text-black text-sm leading-6 font-bold py-1 px-3 rounded-lg">
          {title}
        </p>
        <p className="w-2/3 text-sm font-normal my-3 dark:text-white">
          {description}
        </p>

        <div className="flex w-2/3 justify-between space-x-2">
          {/* Cambié el botón de Info para que redirija al slug de manera correcta */}
          <Button className="w-1/3">
            <Link href={`/proyectos/${slug}`}>
              <MdInfoOutline className="text-2xl" />
            </Link>
          </Button>
          <Button className="w-2/3">
            <Link target="_blank" href={url}>
              Ver Proyecto
            </Link>
          </Button>
        </div>

        <div className="flex-col mx-auto space-x-2 w-2/3 first-line:flex my-3">
          <Progress className="border border-gray-950" value={typeof pro === 'string' ? Number(pro) : pro} />
          <p className="text-xs font-medium">Proyecto terminado al {proti}%</p>
        </div>

        <div className="flex flex-col text-9xl text-center items-center justify-center"></div>
      </div>
    </>
  );
}

export default CardProyect;
