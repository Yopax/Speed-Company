import React from "react";
import { useState } from "react"
import { Project } from "@/interfaces";

interface Props {
  projects: Project[];
}

export  const Filter = ({ projects }: Props) => {
  const rowsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState<string>(""); // Estado del filtro

  // Filtrar proyectos según el estado seleccionado
  const filteredProjects = statusFilter
    ? projects.filter(project => project.status === statusFilter)
    : projects;

  const totalPages = Math.ceil(filteredProjects.length / rowsPerPage);
  const currentProjects = filteredProjects.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

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
      <div className="mb-4">
        <select
          value={statusFilter}
          onChange={(e) => {
            setStatusFilter(e.target.value);
            setCurrentPage(1); // Reiniciar la página al cambiar el filtro
          }}
          className="border rounded-md p-2"
        >
          <option value="">Todos</option>
          <option value="Terminado">Terminado</option>
          <option value="Pendiente">Pendiente</option>
          <option value="En Desarrollo">En Desarrollo</option>
        </select>
      </div>
    </>
  );
};

