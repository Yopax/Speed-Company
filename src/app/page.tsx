import { ModeToggle } from "@/components/01_NavBar/ModeToogle";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <div className="flex space-x-2 justify-center text-center items-center">
              <p className="text-2xl font-extrabold text-black dark:text-white">
                Darli Barreto
              </p>
              <p className="text-lg">©</p>
            </div>
          </a>
        </div>

        <div className=" space-x-2 max-[900px]:justify-between max-[900px]:px-10 fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 max-[425px]:pt-3 max-[425px]:pb-3 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <ModeToggle />
          <Avatar>
            <AvatarImage src="https://i.imgur.com/ITW6pUq.jpg" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] max-[768px]:mt-10 max-[425px]:mt-1 max-[425px]:w-full before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <div className="flex space-x-2 justify-center text-center items-center flex-col">
          <p className="text-5xl 2xl:text-7xl max-[425px]:text-2xl max-[425px]:w-full max-[425px]:pt-2 w-[90%] font-extrabold text-black dark:text-white">
            Web Developer
          </p>
          <p className="py-4 2xl:text-xl">
            Apasionado por la programación y optimización de procesos
          </p>
        </div>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href="/proyectos"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Proyectos{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Cada proyecto ha sido
            desarrollado por mí, con el objetivo de fomentar la aplicación de la programación en
            la ingeniería civil.{" "}
          </p>
        </a>

        <a
          href="#"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <Badge variant="destructive">Se habilita en 3 días.</Badge>
          <h2 className="mb-3 text-2xl font-semibold">
            Sobre mi{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>

          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Conoce mi visión y cómo fusiono ingeniería civil y desarrollo
            tecnológico.
          </p>
        </a>

        <a
          href="#"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <Badge variant="destructive">Próximamente</Badge>
          <h2 className="mb-3 text-2xl font-semibold">
            Articulos{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Aprende a implementar soluciones tecnológicas en el
            sector de la construcción.
          </p>
        </a>

        <a
          href="#"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <Badge variant="destructive">Se habilita en 3 días.</Badge>
          <h2 className="mb-3 text-2xl font-semibold">
            Contacto{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Hablemos sobre cómo podemos construir juntos, con
            innovación y precisión.
          </p>
        </a>
      </div>
    </main>
  );
}
