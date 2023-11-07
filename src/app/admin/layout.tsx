import { FooterAdmin, HeaderAdmin } from "@/components/admin";
import SidebarAdmin from "@/components/admin/sidebar-admin/SidebarAdmin";
import { PrivateRouter } from "@/components/privateRouter";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <PrivateRouter>
      <SidebarAdmin />
      <main className="relative w-full md:w-[calc(100%-256px)] md:ml-64 bg-gray-50 min-h-screen transition-all main ">
        {children}

        <FooterAdmin />
      </main>
      </PrivateRouter>
 
    </div>
  );
};

export default MainLayout;
