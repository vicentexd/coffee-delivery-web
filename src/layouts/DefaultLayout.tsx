import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function DefaultLayout() {
  return (
    <div className="flex flex-col w-full h-full bg-background">
      <Header />
      <Outlet />
    </div>
  );
}
