"use client";

import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { APP_NAME, pages } from "../_common/constants";
import Link from "next/link";
import Image from "next/image";
import logPic from "./viritelma2.png";
import { APP_BACKGROUNG_RGB_COLOR_STRING } from "../_common/styles";
import { Tooltip } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const IMAGE_SIZE = 45;
const IMAGE_SIZE_SM = 34;

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
            <Image
              src={logPic}
              alt="Pidot"
              width={IMAGE_SIZE}
              height={IMAGE_SIZE}
            />
          </Box>
          <Link id="logo" href={"/"}>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "space-between",
                alignItems: "center",
                mr: 3,
              }}
            >
              <Typography
                variant="h5"
                noWrap
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: APP_BACKGROUNG_RGB_COLOR_STRING,
                  textDecoration: "none",
                }}
              >
                {APP_NAME}
              </Typography>
            </Box>
          </Link>

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
                color: "secondary",
              }}
            >
              {pages.map((page) => (
                <Button
                  component={Link}
                  href={`/${page.id}`}
                  key={page.id}
                  sx={{ color: APP_BACKGROUNG_RGB_COLOR_STRING }}
                >
                  <Link key={page.id} href={`/${page.id}`}>
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography textAlign="center" color="primary">
                        {page.name}
                      </Typography>
                    </MenuItem>
                  </Link>
                </Button>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}>
            <Image
              src={logPic}
              alt="Pidot"
              width={IMAGE_SIZE_SM}
              height={IMAGE_SIZE_SM}
            />
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            {APP_NAME}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link key={page.id} href={`/${page.id}`}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    display: "block",
                    color: APP_BACKGROUNG_RGB_COLOR_STRING,
                    fontWeight: 700,
                  }}
                >
                  {page.name}
                </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
                <SettingsIcon color="secondary" />
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
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
