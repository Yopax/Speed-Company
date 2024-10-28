export interface Project {
    
    id: number;
    slug: string;
    status: "Terminado"|"Pendiente"| "En Desarrollo";
    title: string;
    description: string;
    images: string[];
    img2: string;
  img3: string;
  img4: string;
  img5: string;
  img6: string;
  img7: string;
    inStock: number;
    url: string;
    progres: number;
    proti: string;
    stack: ValidSizes[];
    statuscolor: 'default'|'outline'|'destructive'| 'secondary';
    
}
export type ValidSizes = 'React'|'js'|'nextjs'|'zustand'| 'tailwincss';
