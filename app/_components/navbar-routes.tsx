"use client"

import { ModeToggle } from "@/components/mode-toggle";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Skeleton } from "@/components/ui/skeleton";
import { UserButton, useUser } from "@clerk/nextjs";
import { UserRound } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const NavbarRoutes = () => {

  const userInfo = useUser();
  const router = useRouter();
  const adminUserId = "user_2h66pveKdZAu3AjnVfyLEuCQBSn";
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoged, setIsLoged] = useState(false);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {

    if (userInfo.user) {
      setIsLoged(true);
    } else {
      setIsLoged(false);
    };

    if (adminUserId === userInfo.user?.id) {
      setIsAdmin(true)
    } else {
      setIsAdmin(false)
    }

    setIsLoading(false);
  }, [userInfo])



  return (
    <div className="flex flex-row gap-2 content-center items-center">
      {/* Alternância de tema */}
      <ModeToggle />

      {/* Verificação de carregamento */}
      {isLoading ? (
        <Skeleton className="h-9 w-9 rounded-full"></Skeleton>
      ) : (
        /* Condicional para verificar se o usuário está autenticado */
        userInfo.user ? (
          <div className="h-9 w-9 rounded-full flex content-center items-center">
            <UserButton />
          </div>
        ) : (
          <Popover>
            <PopoverTrigger>
              <UserRound size={40} className="border h-9 w-9 rounded-full flex content-center items-center" />
            </PopoverTrigger>
            <PopoverContent className="w-40 bg-white border p-2 rounded-md dark:bg-dark-color">
              {/* Botão de Login */}
              <p
                className="hover:text-vermelho-vinho transition duration-300 ease-in-out cursor-pointer"
                onClick={() => { router.push("/sign-in") }}
              >
                Login
              </p>

              {/* Botão de Criar Conta */}
              <p
                className="hover:text-vermelho-vinho transition duration-300 ease-in-out cursor-pointer"
                onClick={() => { router.push("/sign-up") }}
              >
                Criar Conta
              </p>
            </PopoverContent>
          </Popover>
        )
      )}
    </div>
  );
};
