import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AuthorsList } from "../_components/authors-list";
import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs";


export default function Home() {
  return (
    <>

      <div className='flex justify-center items-center flex-col gap-8 w-screen'>
        <header className='flex flex-col justify-center items-center py-16 px-2 gap-4'>

          <h1 className='text-5xl font-semibold text-center'>
            UFPA EDUCA
          </h1>

          <h1 className='text-4xl font-semibold text-center'>
            Sejam muito bem-vindos
          </h1>
          <p className='max-w-[600px] text-center'>
            Acesse cursos gratuitos sobre tecnologia criados por alunos para alunos.
          </p>
          <div className='space-x-2 flex items-center'>
            <Link href={"/courses"}>
              <Button>Iniciar</Button>
            </Link>

            <Link href={"/sign-up"}>
              <Button variant={"ghost"} className='border'>Login</Button>
            </Link>

            <ModeToggle></ModeToggle>
            <UserButton></UserButton>

          </div>
        </header>

        <div className='px-2 text-center'>
          <h1 className="text-3xl font-bold mb-4">Sobre a Plataforma</h1>

          <p className="text-lg mb-8 text-center max-w-2xl">
            O nosso projeto tem como objetivo oferecer cursos de
            Machine Learning para a comunidade interna e externa de Castanhal.
            Na plataforma, os usuários podem acessar esses cursos de forma gratuita.
            No futuro, pretendemos democratizar ainda mais a criação de cursos, permitindo que qualquer aluno
            interessado possa criar e disponibilizar seus próprios cursos na plataforma.
          </p>

        </div>

        <div className='flex justify-center items-center w-screen px-16 flex-col border-t py-8'>
          <h1 className="text-3xl font-bold mb-4">Autores do projeto</h1>
          <AuthorsList></AuthorsList>
        </div>

        {/* <Footer></Footer> */}

      </div>
    </>
  );
}
