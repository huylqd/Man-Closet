import { FooterAdmin, HeaderAdmin } from "@/components/admin";
import SidebarAdmin from "@/components/admin/sidebar-admin/SidebarAdmin";
import { BreadcrumbAdmin } from "@/components/breadcrumb";
import { PrivateRouter } from "@/components/privateRouter";


const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <PrivateRouter>
      <div>

        <SidebarAdmin />
        <main className="relative w-full md:w-[calc(100%-256px)] md:ml-64 bg-gray-50 min-h-screen transition-all main ">
          <BreadcrumbAdmin title="Analytics" />
          {children}

          <FooterAdmin />







        </main>
      </div>
    </PrivateRouter>

  );
};

export default MainLayout;
