export interface Project {
    slug: string;
    status: 'Terminado'|'Pendiente';
    title: string;
    description: string;
    images: string[];
    inStock: number;
    url: string;
    price: number;
    progres: number;
    proti: string;
    stack: ValidSizes[];
    tags: string[];
    statuscolor: 'default'|'outline'|'destructive'| 'secondary';
    gender: 'men'|'women'|'kid'|'unisex'
}
export type ValidSizes = 'React'|'js'|'nextjs'|'zustand'| 'tailwincss';
