
// import Footer from "./_components/footer";
// import { SideBar } from "./_components/sidebar";
// import { Navbar } from "../_components/navbar";

import { Navbar } from "../_components/navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full dark:bg-dark-color">

      <div className="h-[80px] fixed inset-y-0 w-screen md:w-full z-50 bg-gray-50 dark:bg-dark-color ">
        <Navbar />
      </div>

      {/* <div className="hidden md:flex w-56 flex-col fixed inset-y-0 z-50"> */}
      {/*   <SideBar /> */}
      {/* </div> */}

      {/* <main className="pt-[80px] h-full items-center content-center justify-center px-4 sm:px-8 md:px-16 xl:px-32 2xl:px-48"> */}
      <main className="pt-[80px] h-full space-y-8">
        {children}
        {/* <Footer></Footer> */}
      </main>

    </div>
  );
};

export default DashboardLayout;
