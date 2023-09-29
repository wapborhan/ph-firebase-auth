import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

const Main = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Main;
