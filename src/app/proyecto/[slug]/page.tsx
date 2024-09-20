import { init } from "next/dist/compiled/webpack/webpack";

interface Props{
  params:{
    slug:string;
  }
}

export default function ({params}:Props) {
  const {slug} = params;
  const product = initialData.proyects.find(proyect => proyect.slug === slug);

  if (!proyect) {
    return <div>Proyecto no encontrado</div>;
  }



  return (
    <>
  );
}