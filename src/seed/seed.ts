interface SeedProject {
  
  id: number;
  slug: string;
  status: "Terminado" | "Pendiente" | "En Desarrollo";
  title: string;
  description: string;
  images: string[];
  inStock: number;
  url: string;
  progres: number;
  stack: ValidSizes[];
  proti: string;
  statuscolor: "default" | "outline" | "destructive" | "secondary";
}

type ValidSizes = "React" | "js" | "nextjs" | "zustand" | "tailwincss";

interface SeedData {
  proyectos: SeedProject[];
}

export const initialData: SeedData = {
  proyectos: [
    {
      id: 1,
      title: "00-. Curie Academy",
      description:
        "Speed Structural, es una app web que tiene como finalidad optimizar el tiempo de cálculo del predimensionamiento y metrado de cargas para un análisis y diseño sísmico.",
      status: "Terminado",
      images: ["a1.jpg"],
      inStock: 7,
      progres: 100,
      proti: "100",
      url: "https://speedstructural.vercel.app/calculos/analisis",
      stack: ["React", "js", "nextjs", "zustand", "tailwincss"],
      slug: "speed_structural",
      statuscolor: "default",
    },
    {
      id: 2,
      title: "01-. Speed Structural",
      description:
        "Speed Structural, es una app web que tiene como finalidad optimizar el tiempo de cálculo del predimensionamiento y metrado de cargas para un análisis y diseño sísmico.",
      status: "Terminado",
      images: ["a1.jpg"],
      inStock: 7,
      progres: 100,
      proti: "100",
      url: "https://speedstructural.vercel.app/calculos/analisis",
      stack: ["React", "js", "nextjs", "zustand", "tailwincss"],
      slug: "speed_structural",
      statuscolor: "default",
    },
    {
      id: 3,
      title: "02-. Speed Structural plus",
      description:
        "Speed Structural plus, es version mas simplificada para usuarios que ya cuentan con conocimiento previo del tema, tiene la misma funcionalidades y objetivos que la versión anterior.",
      status: "Terminado",
      images: ["1740176-00-A_0_2000.jpg"],
      inStock: 7,
      progres: 100,
      proti: "100",
      url: "https://speedstructplus.vercel.app/",
      stack: ["React", "js", "nextjs", "zustand", "tailwincss"],
      slug: "speed_structural_plus",
      statuscolor: "default",
    },
    {
      id:4,
      title: "03-. Speed Concrete",
      description:
        "Esta app permite obtener un diseño de mezcla optimizado y listo para su uso en tus proyectos de construcción. Siguiendo unos sencillos y pocos pasos podrás descargar tu diseño de mezcla.",
      status: "Terminado",
      images: ["1740176-00-A_0_2000.jpg"],
      inStock: 7,
      progres: 100,
      proti: "100",
      url: "https://speed-concrete.vercel.app/",
      stack: ["React", "js", "nextjs", "zustand", "tailwincss"],
      slug: "speed_concrete",
      statuscolor: "default",
    },
    {
      id:5,
      title: "04-. Speed Planning",
      description:
        "Una aplicación web que permite a los gestores de proyectos de construcción planificar, asignar tareas, monitorear el progreso y gestionar recursos.",
      status: "En Desarrollo",
      images: ["1740176-00-A_0_2000.jpg"],
      inStock: 7,
      progres: 30,
      proti: "30",
      url: "#",
      stack: ["React", "js", "nextjs", "zustand", "tailwincss"],
      slug: "speed_planning",
      statuscolor: "outline",
    },
    {
      id:6,
      title: "05-. Speed Budget",
      description:
        "Un simulador que permite a los ingenieros y arquitectos calcular presupuestos detallados para proyectos de construcción, tomando en cuenta materiales.",
      status: "Pendiente",
      images: ["1740176-00-A_0_2000.jpg"],
      inStock: 7,
      progres: 0,
      proti: "0",
      url: "#",
      stack: ["React", "js", "nextjs", "zustand", "tailwincss"],
      slug: "speed_budget",
      statuscolor: "destructive",
    },
    {
      id:7,
      title: "06-. Speed Inventory",
      description:
        "Un sistema que permite a las empresas de construcción gestionar su inventario de materiales de forma eficiente.",
      status: "Pendiente",
      images: ["1740176-00-A_0_2000.jpg"],
      inStock: 7,
      progres: 0,
      proti: "0",
      url: "#",
      stack: ["React", "js", "nextjs", "zustand", "tailwincss"],
      slug: "speed_inventory",
      statuscolor: "destructive",
    },
    {
      id:8,
      title: "07-. Speed Academy",
      description:
        "Una aplicación que ayuda a los estudiantes a capacitarse en el ámbito de la programación orientada a la industria de la construcción.",
      status: "Pendiente",
      images: ["1740176-00-A_0_2000.jpg"],
      inStock: 7,
      progres: 0,
      proti: "0",
      url: "#",
      stack: ["React", "js", "nextjs", "zustand", "tailwincss"],
      slug: "speed_academy",
      statuscolor: "destructive",
    },
    { 
      id:9,
      title: "08-. Geo Speed",
      description:
        "Un software que ayuda a los estudiantes a realizar cálculos geotécnicos, como la capacidad portante del suelo, asentamientos, y estabilidad de taludes.",
      status: "Pendiente",
      images: ["1740176-00-A_0_2000.jpg"],
      inStock: 7,
      progres: 0,
      proti: "0",
      url: "#",
      stack: ["React", "js", "nextjs", "zustand", "tailwincss"],
      slug: "speed_geo",
      statuscolor: "destructive",
    },
    {
      id:10,
      title: "09-. Speed Materials",
      description:
        "Una aplicación que permite a los estudiantes calcular la cantidad de materiales necesarios para un proyecto, incluyendo concreto, acero, ladrillos, y otros.",
      status: "Pendiente",
      images: ["1740176-00-A_0_2000.jpg"],
      inStock: 7,
      progres: 0,
      proti: "0",
      url: "#",
      stack: ["React", "js", "nextjs", "zustand", "tailwincss"],
      slug: "speed_materials",
      statuscolor: "destructive",
    },
  ],
};
