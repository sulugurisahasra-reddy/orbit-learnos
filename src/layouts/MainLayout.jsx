import Sidebar from "../components/Sidebar";

function MainLayout({ children }) {

  return (

    <div className="min-h-screen bg-black text-white flex">

      <Sidebar />

      <main className="flex-1 p-8 md:p-12 overflow-y-auto">

        {children}

      </main>

    </div>

  );
}

export default MainLayout;