import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { MdInfoOutline } from "react-icons/md";
import { Progress } from "@/components/ui/progress";
import { Project } from "@/interfaces";

interface Props {
  projects: Project[];
}

export const CardProyect = ({ projects }: Props) => {
  return (
    <>
      {projects.map((project) => (
        <div
          key={project.slug}
          className="flex mx-2 my-2 max-sm:mx-0 flex-col border items-center justify-center font-bold rounded-md h-[330px]"
        >
          <Badge variant={project.statuscolor}>{project.status}</Badge>
          <p className="dark:text-white text-neutral-900 text-sm leading-6 font-bold py-4 px-3 rounded-lg">
            {project.title}
          </p>
          <p className="w-[76%] h-[30%] text-xs text-justify inter text-neutral-500 font-normal mb-4 dark:text-white">
            {project.description}
          </p>
          <div className="flex w-[76%] justify-between space-x-2">
            <Button className="w-1/3 max-[425px]:text-text-xs">
              <Link href={`/proyectos/${project.slug}`}>
                <MdInfoOutline className="text-xl" />
              </Link>
            </Button>
            <Button className="w-2/3 max-[425px]:text-sm text-xs">
              <Link target="_blank" href={project.url}>
                Ver Proyecto
              </Link>
            </Button>
          </div>
          <div className="flex-col mx-auto space-x-2 w-[76%] my-2">
            <div className="w-full flex items-center">
              <label className="text-xs text-start font-normal lnueva w-1/3 mr-2">Progreso:</label>

              <div className="relative w-2/3">
                <Progress
                  className="border border-gray-950 h-4 w-full"
                  value={project.progres}
                />
                <p
                  className="absolute inset-0 flex items-center justify-center text-black text-[10px] font-normal"
                  style={{ zIndex: 1 }}
                >
                  {project.proti}%
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
