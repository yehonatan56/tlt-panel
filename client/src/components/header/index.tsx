import Logo from "./logo.tsx";

const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        backgroundColor: "black",
        justifyContent: "center",
        padding: "1rem",
        borderBottom: "1px solid #ccc",
      }}
    >
      <Logo />
    </header>
  );
};
export default Header;
