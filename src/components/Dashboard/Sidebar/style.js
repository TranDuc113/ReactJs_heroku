const style = () => ({
  drawerPaper: {
    width: 240,
    zIndex: "0 !important",
    maxWidth: 240,
    height: "100%",
    position: "relative !important",
  },
  menuLink: {
    textDecoration: "none",
    color: "#000000",
  },
  menuitemActive: {
    "&>div": {
      backgroundColor: "rgba(0,0,0,0.08)",
    },
  },
});
export default style;
