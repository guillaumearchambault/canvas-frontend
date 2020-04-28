import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import UserMenu from "./UserMenu";

const UserInfo = ({ user, logout }) => {
  const border = {
    borderStyle: "solid",
    borderWidth: "0px",
    borderColor: "red",
  };

  return (
    <Grid
      container
      style={border}
      direction="row"
      alignItems="center"
      justify="flex-end"
    >
      <Box>
        <Typography variant="subtitle1">Hello {user.firstName}</Typography>
      </Box>
      <Box>
        <UserMenu user={user} logout={logout} />
      </Box>
    </Grid>
  );
};

export default UserInfo;
