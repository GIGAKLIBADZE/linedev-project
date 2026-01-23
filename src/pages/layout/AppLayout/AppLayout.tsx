import { Header, Sidebar } from "../../landing/components";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <div className="app-layout">
      <Header />
      <div className="app-body">
        <Sidebar />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};
