import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link';
import CardProyectProps from '../types/CardProyectProps';
import { Badge } from "@/components/ui/badge"



function CardProyect({ title, description, url,estado,color }: CardProyectProps) {
  return (
    <>
      <div className="flex mx-2 my-2 max-sm:mx-0 flex-col border items-center justify-center font-bold rounded-md h-80">
      <Badge variant={color}>{estado}</Badge>

        <p className="dark:text-white text-black text-sm leading-6 font-bold py-1 px-3 rounded-lg">
          {title}
        </p>
        <p className="w-2/3 text-sm font-normal my-6 dark:text-white">
          {description}
        </p>
        <Button>
          <Link target="_blank" href={url}>Ver Proyecto</Link>
        </Button>
        <div className="flex flex-col text-9xl text-center items-center justify-center"></div>
      </div>
    </>
  );
}

export default CardProyect;
