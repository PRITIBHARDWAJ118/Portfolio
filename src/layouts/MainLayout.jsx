import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="bg-black min-h-screen text-white">
      <h1 className="text-3xl p-5 bg-red-600">MAIN LAYOUT</h1>

      <Outlet />
    </div>
  );
}

export default MainLayout;