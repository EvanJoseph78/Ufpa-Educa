import { Navbar } from "../_components/navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full dark:bg-dark-color">

      <div className="h-[80px] fixed inset-y-0 w-screen md:w-full z-50 bg-gray-50 dark:bg-dark-color ">
        <Navbar />
      </div>

      <main className="pt-[80px] h-full space-y-8">
        {children}
      </main>

    </div>
  );
};

export default DashboardLayout;
