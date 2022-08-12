import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function DefaultLayout() {
  return (
    <div className="flex flex-1 flex-col bg-background">
      <Header />
      <Outlet />
    </div>
  );
}
