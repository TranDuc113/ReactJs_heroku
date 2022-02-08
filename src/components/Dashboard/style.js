const style = (theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    height: "100vh",
  },
  wrappercontent: {
    width: "100%",
    padding: 10,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  shiftleft: {
    marginLeft: -240,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
});
export default style;
