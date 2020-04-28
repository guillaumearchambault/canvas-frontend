import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import { AuthProvider } from "./useAuth";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Header from "./components/Header";
import { Box, Container } from "@material-ui/core";
const border = {
  borderStyle: "solid",
  borderWidth: "0px",
  borderColor: "red",
};
export default function App(props) {
  return (
    <Fragment>
      <AuthProvider>
        <Header {...props} />
      </AuthProvider>
      <Container fluid>
        <Box style={border} mt={8}>
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={Profile} />
        </Box>
      </Container>
    </Fragment>
  );
}
