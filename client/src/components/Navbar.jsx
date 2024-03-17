import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { RiAccountCircleFill, RiShoppingCart2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { ShopContext } from "../context/ShopContext.jsx";

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const { totalCartItems } = useContext(ShopContext);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const loginHandler = async () => {
    loginWithRedirect();
  };
  console.log(isAuthenticated);

  return (
    <AppBar position="static">
      <Container maxWidth="xl" className="bg-gray-900">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Link to="/">
            <Typography
              className="hidden md:block"
              variant="h5"
              noWrap
              component="div"
            >
              UniMed
            </Typography>
          </Link>

          {/* for mobile devices */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Typography className="pt-2" variant="h5" noWrap component="div">
              UniMed
            </Typography>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <Link to="/products">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Products</Typography>
                </MenuItem>
              </Link>
              <Link to="/about">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">About</Typography>
                </MenuItem>
              </Link>
            </Menu>
          </Box>
          <Box
            className="flex justify-center"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            <Link to="/products">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ m: 2, color: "white", display: "block" }}
              >
                Products
              </Button>
            </Link>
            <Link to="/about">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ m: 2, color: "white", display: "block" }}
              >
                About
              </Button>
            </Link>
          </Box>
          <Link to="/cart">
            ({totalCartItems()})
            <IconButton className="">
              <span className="mr-2">
                <RiShoppingCart2Line size={40} color="white" />
              </span>
            </IconButton>
          </Link>
          {isAuthenticated ? (
            <>
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <RiAccountCircleFill size={40} color="white" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <Link to="/profile">
                    <MenuItem onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">Profile</Typography>
                    </MenuItem>
                  </Link>
                  <MenuItem
                    onClick={() => logout({ returnTo: window.location.origin })}
                  >
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>
                </Menu>
              </Box>
            </>
          ) : (
            <button
              onClick={loginHandler}
              className="px-4 py-2 hover:bg-pink-800 rounded-md border-2 border-white"
            >
              <b> LOGIN</b>
            </button>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
