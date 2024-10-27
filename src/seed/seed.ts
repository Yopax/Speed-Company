interface SeedProject {
  
  id: number;
  slug: string;
  status: "Terminado" | "Pendiente" | "En Desarrollo";
  title: string;
  description: string;
  images: string[];
  // image2: string;
  // image3: string;
  // image4: string;
  // image5: string;
  // image6: string;
  // image7: string;
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
      title: "01-. Curie Academy",
      description:
        "Curie Academy, consiste en el desarrollo de una aula virtual gratuita, diseñada para ofrecer cursos y artículos educativos de forma accesible y organizada. La plataforma permitirá a los estudiantes y usuarios en general acceder a contenido educativo sin costo, promoviendo el aprendizaje inclusivo y la educación continua.",
      status: "En Desarrollo",
      images: ["a1.jpg"],
      inStock: 7,
      progres: 85,
      proti: "85",
      url: "https://curie-mauve.vercel.app/",
      stack: ["React", "js", "nextjs", "zustand", "tailwincss"],
      slug: "speed_structural",
      statuscolor: "outline",
    },
    {
      id: 2,
      title: "02-. Speed Structural",
      description:
        "Speed Structural es una aplicación web que tiene como objetivo optimizar el tiempo y la precisión en el cálculo del predimensionamiento y el metrado de cargas estructurales. La plataforma facilita el análisis y diseño sísmico al automatizar procesos clave, permitiendo a los ingenieros realizar cálculos detallados y obtener resultados confiables en menor tiempo. Además, su interfaz intuitiva y sus herramientas avanzadas hacen que Speed Structural sea ideal para proyectos de cualquier escala, proporcionando una solución completa para el diseño estructural con un enfoque en eficiencia y seguridad sísmica.",
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
      title: "03-. Speed Structural plus",
      description:
        "Speed Structural Plus es una versión simplificada, diseñada para usuarios con conocimientos previos en el tema. Mantiene las mismas funcionalidades y objetivos que la versión original, ofreciendo una experiencia más directa y eficiente para profesionales que buscan agilizar sus cálculos estructurales.",
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
      title: "04-. Speed Concrete",
      description:
        "Esta aplicación permite obtener un diseño de mezcla optimizado y listo para aplicar en proyectos de construcción. Con solo seguir unos pocos y sencillos pasos, el usuario puede descargar el diseño de mezcla ideal, adaptado a las necesidades específicas de cada proyecto.",
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
      title: "05-. Speed General App",
      description:
        "Speed General es una plataforma integral que centraliza todas las aplicaciones desarrolladas por Speed S.A.C., diseñadas para optimizar diversos aspectos de la industria de la construcción. Esta implementación busca proporcionar a los usuarios una única interfaz donde puedan acceder a todas las herramientas necesarias para la gestión de proyectos, cálculos técnicos y planificación de recursos.",
      status: "En Desarrollo",
      images: ["1740176-00-A_0_2000.jpg"],
      inStock: 7,
      progres: 100,
      proti: "100",
      url: "https://speed-general-app.vercel.app/",
      stack: ["React", "js", "nextjs", "zustand", "tailwincss"],
      slug: "speed_materials",
      statuscolor: "outline",
    },
    {
      id:6,
      title: "06-. Porfolio v0",
      description:
        "Bienvenido a mi portafolio personal, donde presento mis proyectos, habilidades y experiencias en el campo de la ingeniería civil y desarrollo web. A lo largo de este espacio, encontrarás una muestra de mi trabajo y la pasión que tengo por combinar la tecnología con la construcción para crear soluciones innovadoras.",
      status: "Terminado",
      images: ["1740176-00-A_0_2000.jpg"],
      inStock: 7,
      progres: 100,
      proti: "100",
      url: "https://cv-barreto.vercel.app/",
      stack: ["React", "js", "nextjs", "zustand", "tailwincss"],
      slug: "speed_materials",
      statuscolor: "default",
    },
    {
      id:7,
      title: "07-. Speed Planning",
      description:
        "Una aplicación web diseñada para que los gestores de proyectos de construcción planifiquen, asignen tareas, monitoreen el progreso y administren recursos de manera eficiente. La plataforma permite una gestión integral del proyecto, optimizando la colaboración entre equipos, el seguimiento de hitos y el uso de recursos en tiempo real, facilitando una ejecución más organizada y controlada en cada etapa del proyecto.",
      status: "En Desarrollo",
      images: ["1740176-00-A_0_2000.jpg"],
      inStock: 7,
      progres: 15,
      proti: "15",
      url: "#",
      stack: ["React", "js", "nextjs", "zustand", "tailwincss"],
      slug: "speed_planning",
      statuscolor: "outline",
    },
    {
      id:8,
      title: "08-. Speed Budget",
      description:
        "Un simulador que permite a ingenieros y arquitectos calcular presupuestos detallados para proyectos de construcción, considerando costos de materiales y otros recursos, para obtener estimaciones precisas y optimizadas.",
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
      id:9,
      title: "09-. Speed Inventory",
      description:
        "Un sistema diseñado para que las empresas de construcción gestionen su inventario de materiales de manera eficiente y precisa. La plataforma permite el seguimiento en tiempo real de las existencias, el control de entradas y salidas de materiales, y la optimización de recursos, reduciendo desperdicios y asegurando la disponibilidad de suministros necesarios para cada proyecto.",
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
      id:10,
      title: "10-. Speed Academy",
      description:
        "Una aplicación educativa diseñada para ayudar a los estudiantes a capacitarse en programación aplicada a la industria de la construcción. La plataforma ofrece cursos, ejercicios prácticos y simulaciones que abordan temas específicos como automatización de cálculos estructurales, gestión de proyectos, y desarrollo de aplicaciones para optimizar procesos constructivos, brindando a los estudiantes habilidades clave para enfrentar los desafíos tecnológicos del sector.",
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
      id:11,
      title: "11-. Geo Speed",
      description:
        "Un software especializado que asiste a los estudiantes en la realización de cálculos geotécnicos, incluyendo la capacidad portante del suelo, análisis de asentamientos y estabilidad de taludes. Esta herramienta proporciona funciones interactivas y resultados precisos, permitiendo a los usuarios comprender mejor los principios geotécnicos y aplicar conocimientos teóricos a situaciones prácticas en sus proyectos de ingeniería civil.",
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
      id:12,
      title: "12-. Speed Materials",
      description:
        "Una aplicación diseñada para que los estudiantes calculen la cantidad de materiales necesarios para sus proyectos de construcción, incluyendo concreto, acero, ladrillos y otros elementos. La plataforma ofrece una interfaz intuitiva y herramientas de cálculo que facilitan la estimación precisa de materiales, ayudando a los usuarios a planificar sus proyectos de manera más efectiva y a comprender mejor los requerimientos técnicos de cada obra.",
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
    {
      id:13,
      title: "13-. Porfolio v0",
      description:
        "Bienvenido a mi portafolio personal, donde presento mis proyectos, habilidades y experiencias en el campo de la ingeniería civil y desarrollo web. A lo largo de este espacio, encontrarás una muestra de mi trabajo y la pasión que tengo por combinar la tecnología con la construcción para crear soluciones innovadoras.",
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
