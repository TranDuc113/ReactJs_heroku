import React, { Component } from "react";
import style from "./style.js";
import { withStyles } from "@mui/styles";
import { ThemeProvider } from "@mui/material/styles";
import Theme from "./../commons/index";
// import Taskboard from "./../taskboard/index.js";
import { Provider } from "react-redux";
import configStore from "../../redux/configStore.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GloabalLoading from "./../../components/globaLoading/index.js";
import Modals from "../../components/Modals/index.js";
import { BrowserRouter, Switch } from "react-router-dom";
import { ADMIN_ROUTES } from "./../../contants/index";
import AdminLayoutRoute from "./../../commons/layout/AdminLayoutRoute/index";
import CssBaseline from '@mui/material/CssBaseline';

const store = configStore();

class App extends Component {
  ShowRouter = () => {
    let xhtml = null;
    xhtml = ADMIN_ROUTES.map((route, index) => {
      return (
        <AdminLayoutRoute
          key={route.path}
          path={route.path}
          component={route.component}
          exact={route.exact}
          name={route.name}
        ></AdminLayoutRoute>
      );
    });
    return xhtml;
  };
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={Theme}>
          <CssBaseline />
            <Modals></Modals>
            <GloabalLoading></GloabalLoading>
            <Switch>{this.ShowRouter()}</Switch>
            {/* <Taskboard></Taskboard> */}
            <ToastContainer />
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    );
  }
}
export default withStyles(style)(App);
