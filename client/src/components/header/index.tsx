import { ReactNode } from "react";
import Logo from "./logo.tsx";
import Navbar from "./navbar.tsx";

interface HeaderProps {
  children: ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  return (
    <>
      <header
        style={{
          backgroundColor: "black",
          padding: "1rem",
          borderBottom: "1px solid #ccc",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Logo />
        <Navbar />
      </header>
      {children}
    </>
  );
};

export default Header;
