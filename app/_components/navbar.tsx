import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { UserButton } from "@clerk/nextjs";
import { Menu, MenuIcon } from "lucide-react";
import { SideBar } from "./sidebar";

export const Navbar = () => {
  return (
    <div className="p-4 border-b h-full items-center shadow-sm flex justify-between">

      <div className="flex items-center gap-2">

        <Sheet>
          <SheetTrigger className=" pr-4 hover:opacity-75 transition">
            <Menu />
          </SheetTrigger>
          <SheetContent side={"left"} className="p-0">
            <SideBar />
          </SheetContent>
        </Sheet>
        <Button>Cursos</Button>

      </div>

      <div className="flex items-center">
        {/* TODO: search bar*/}


      </div>

      <div className="flex items-center gap-2">
        <ModeToggle></ModeToggle>
        <UserButton></UserButton>
      </div>
    </div>
  );
};
