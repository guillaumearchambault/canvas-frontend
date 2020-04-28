import React from "react";
import { IconButton, Menu, Avatar } from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";

const UserMenu = ({ user, logout }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        style={{ paddingTop: 0, paddingBottom: 0 }}
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleClick}
        color="inherit"
      >
        <Avatar alt={user.given_name} src={user.imageUrl} />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            logout();
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export default UserMenu;
