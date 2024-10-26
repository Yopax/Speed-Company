export interface Project {
    
    id: number;
    slug: string;
    status: "Terminado"|"Pendiente"| "En Desarrollo";
    title: string;
    description: string;
    images: string[];
    inStock: number;
    url: string;
    progres: number;
    proti: string;
    stack: ValidSizes[];
    statuscolor: 'default'|'outline'|'destructive'| 'secondary';
    
}
export type ValidSizes = 'React'|'js'|'nextjs'|'zustand'| 'tailwincss';
