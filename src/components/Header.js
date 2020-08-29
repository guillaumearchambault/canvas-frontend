import React, { useEffect, useContext, useState } from "react";
import axios from "axios";
import { Store } from "../Store";
import { useAuth } from "../useAuth";
import { getCurrentUser } from "../api/api";
import { Button, AppBar } from "@material-ui/core";
import Container from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Grid from "@material-ui/core/Grid";
import UserInfo from "./UserInfo";

const Header = (props) => {
  const auth = useAuth();
  const [menuIndex, setValue] = useState(0);
  const { state, dispatch } = useContext(Store);

  const getUrlParameter = (name) => {
    name = name.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
    // name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
    var results = regex.exec(props.location.search);
    return results === null
      ? null
      : decodeURIComponent(results[1].replace(/\+/g, " "));
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    dispatch({ type: "REMOVE_USER" });
  };

  const border = {
    borderStyle: "solid",
    borderWidth: "0px",
    borderColor: "red",
  };

  const handleChange = (event, menuIndex) => {
    setValue(menuIndex);
  };

  const navigateTo = (link) => {
    props.history.push(link);
  };

  //After mount
  useEffect(() => {
    console.log("Gettting the token.... ");
    const token = getUrlParameter("token");
    console.log("token.... is ", token);
    const error = getUrlParameter("error");
    if (token) {
      localStorage.setItem("access_token", token);
      // props.history.replace();
    } else if (error) {
      //TODO, show error
    }
  });
  useEffect(() => {
    if (!state.user) {
      getCurrentUser().then((response) => {
        console.log("User = ", response);
        dispatch({ payload: response.data, type: "SET_USER" });
      });
    }
  }, [state.user, dispatch]);

  return (
    <Container>
      <AppBar position="fixed" color="default" style={border}>
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="space-between"
          p={5}
        >
          <Grid item xs={3} style={border}>
            <IconButton style={border} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          </Grid>
          <Grid item xs={5}>
            <Tabs
              style={border}
              spacing={2}
              centered
              value={menuIndex}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              aria-label="full width tabs example"
            >
              <Tab label="Home" onClick={() => navigateTo("/")} />
              <Tab label="Profile" onClick={() => navigateTo("profile")} />
              <Tab label="Info" />
              <Tab label="Contact" />
            </Tabs>
          </Grid>
          <Grid
            item
            xs={3}
            container
            direction="row"
            alignItems="center"
            justify="flex-end"
          >
            {state.user ? (
              <UserInfo style={border} user={state.user} logout={logout} />
            ) : (
                <Button onClick={auth.signin} style={border}>
                  Sign in
                </Button>
              )}
          </Grid>
        </Grid>
      </AppBar>
    </Container>
  );
};

export default Header;
