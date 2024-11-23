import { Box, Anchor, Button } from "@mantine/core";
import { createStyles } from "@mantine/styles";
import { Link } from "react-router-dom";

const useStyles = createStyles(() => ({
  link: {
    textDecoration: "none",
    backgroundColor: "#aaa",
    color: "#1c7ed6 !important",
    padding: "10px !important",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  nav: {
    display: "flex",
    justifyContent: "space-around",
    padding: "15px",
    width: "100%",
  },
}));

const Navbar = () => {
  const { classes } = useStyles();

  return (
    <Box className={classes.nav}>
      <Anchor component={Link} to="/" className={classes.link}>
        Home
      </Anchor>
      <Anchor component={Link} to="/control" className={classes.link}>
        Dashboard
      </Anchor>
      <Anchor component={Link} to="/viewAll" className={classes.link}>
        View All
      </Anchor>

      <Anchor component={Link} to="/register" className={classes.link}>
        Register
      </Anchor>

      <Anchor component={Link} to="/customers" className={classes.link}>
        Customers
      </Anchor>

      <Button
        className={classes.link}
        onClick={() => {
          localStorage.removeItem("token");
          window.location.href = "/";
        }}
        style={{ backgroundColor: "red", color: "white" }}
      >
        Logout
      </Button>
    </Box>
  );
};

export default Navbar;
