import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { MdInfoOutline } from "react-icons/md";
import { Progress } from "@/components/ui/progress";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Project } from "@/interfaces";

interface Props {
  projects: Project[];
}

export const CardProyect = ({ projects }: Props) => {
  const rowsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState<string>(""); // Estado del filtro

  // Filtrar proyectos según el estado seleccionado
  const filteredProjects = statusFilter
    ? projects.filter((project) => project.status === statusFilter)
    : projects;

  const totalPages = Math.ceil(filteredProjects.length / rowsPerPage);
  const currentProjects = filteredProjects.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      {currentProjects.map((project) => (
        <div
          key={project.id}
          className="flex mx-2 my-2 max-sm:mx-0 flex-col border items-center justify-center font-bold rounded-md h-[330px]"
        >
          <Badge variant={project.statuscolor}>{project.status}</Badge>
          <p className="dark:text-white text-neutral-900 text-sm leading-6 font-bold py-4 px-3 rounded-lg">
            {project.title}
          </p>
          <p className="w-[76%] line-clamp-6 text-xs text-justify inter text-neutral-500 font-normal mb-4 dark:text-white">
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
              <label className="text-xs text-start font-normal lnueva w-1/3 mr-2">
                Progreso:
              </label>
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

      {/* Paginación */}
      <div className="flex space-x-10 items-center justify-between">
        <div className="flex justify-center my-4">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  className={
                    currentPage === 1
                      ? "pointer-events-none opacity-50 text-black text-xs letratwo font-semibold"
                      : undefined
                  }
                  onClick={handlePrevious}
                />
              </PaginationItem>

              <PaginationItem>
                <PaginationNext
                  className={
                    currentPage === totalPages
                      ? "pointer-events-none opacity-50 "
                      : undefined
                  }
                  onClick={handleNext}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
        <div className="flex space-x-2 items-center ">
          <p className="text-black text-xs letratwo font-semibold">Filtrado:</p>
          <select
            value={statusFilter}
            onChange={(e) => {
              setStatusFilter(e.target.value);
              setCurrentPage(1); // Reiniciar la página al cambiar el filtro
            }}
            className="border text-black text-xs letratwo font-semibold rounded-md p-2"
          >
            <option value="">Todos</option>
            <option value="Terminado">Terminado</option>
            <option value="Pendiente">Pendiente</option>
            <option value="En Desarrollo">En Desarrollo</option>
          </select>
        </div>
      </div>
    </>
  );
};
