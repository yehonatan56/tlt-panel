import { Box, Anchor } from "@mantine/core";
import { createStyles } from "@mantine/styles";
import { Link } from "react-router-dom";

const useStyles = createStyles(() => ({
  link: {
    textDecoration: "none",
    color: "#1c7ed6",
    padding: "10px 15px",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  nav: {
    display: "flex",
    justifyContent: "space-around",
    padding: "15px",
    backgroundColor: "#f1f3f5",
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
    </Box>
  );
};

export default Navbar;
