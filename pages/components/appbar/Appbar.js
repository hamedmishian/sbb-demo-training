import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";

const pages = [
  "Fahrplan",
  "Abos & Billete",
  "Bahnhof & Services",
  "Freizeit & Ferien",
  "Hilfe & Kontakt",
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
const languages = ["Deutsch", "English", "Italiano"];
const firstAppBar = ["Suchen", "Kaufen", "Anmelden"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const [langState, setLAngState] = React.useState("Deutsch");

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (setting) => {
    setAnchorElUser(null);
    setLAngState(setting);
  };

  return (
    <>
      <AppBar
        position="static"
        style={{
          backgroundColor: "white",
          fontFamily: "sans-serif",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters style={{ maxWidth: "1650px" }}>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="gray"
              >
                <MenuIcon color="black" />
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
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />

            <Box
              sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}
              style={{
                // display:"flex",
                justifyContent: "end",
                marginRight: "50px",
              }}
            >
              {firstAppBar.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    color: "gray",
                    display: "flex",
                    flexDirection: "row-reverse",
                    justifyItems: "flex-end",
                    fontFamily: "inherit",
                    textTransform: "none",
                    fontSize: "15px",
                    fontWeight: "600",
                  }}
                >
                  {page}
                  {page === "Kaufen" && (
                    <DescriptionOutlinedIcon
                      style={{ marginRight: "5px" }}
                      color="action"
                    />
                  )}
                  {page === "Suchen" && (
                    <SearchIcon style={{ marginRight: "5px" }} color="action" />
                  )}
                  {page === "Anmelden" && (
                    <PersonOutlineOutlinedIcon
                      style={{ marginRight: "5px" }}
                      color="action"
                    />
                  )}
                </Button>
              ))}

              <Box sx={{ flexGrow: 0 }} style={{ display: "flex" }}>
                <div
                  style={{
                    padding: "6px 8px",
                    marginBottom: "16px",
                    marginTop: "16px",
                  }}
                >
                  <Tooltip title="Open Languages">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      {/* <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                    /> */}
                      <LanguageOutlinedIcon />
                      <Typography
                        color={"gray"}
                        fontWeight={"600"}
                        marginLeft={"5px"}
                      >
                        {langState}
                      </Typography>
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
                    onClose={() => handleCloseUserMenu(langState)}
                  >
                    {languages.map((setting) => (
                      <MenuItem
                        key={setting}
                        onClick={() => handleCloseUserMenu(setting)}
                      >
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </div>
              </Box>

              <MenuItem
                sx={{
                  display: {
                    xs: "flex",
                    sm: "none",
                    md: "none",
                    lg: "none",
                    xl: "none",
                  },
                }}
                style={{
                  width: "13.35714em",
                  height: "2.85714em",
                  margin: "0.85714em 0 0",
                  textAlign:"center"
                }}
              >
                <svg
                  className="mod_header_logo_content "
                  viewBox="0 0 187 21"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path
                      d="M73.06 8.227c-.165-1.49-.993-2.17-2.667-2.17-1.427 0-2.314.658-2.314 1.71 0 .878.556 1.404 1.693 1.622l2.48.46c2.646.48 4.073 1.97 4.073 4.252 0 2.87-2.193 4.71-5.665 4.71-3.678 0-5.785-1.885-5.847-5.195h2.935c.186 1.907 1.073 2.72 3.037 2.72 1.51 0 2.584-.835 2.584-1.995 0-.92-.58-1.49-1.696-1.71l-2.25-.437c-2.875-.57-4.2-1.887-4.2-4.23 0-2.673 2.027-4.382 5.334-4.382 3.245 0 5.25 1.73 5.33 4.644H73.06zM84.594 3.89c3.015 0 4.73 1.36 4.73 3.724 0 1.294-.577 2.257-1.92 3.003 1.714.678 2.44 1.82 2.44 3.704 0 2.563-1.904 4.185-4.92 4.185h-6.49V3.89h6.16zm-.416 5.85c1.468 0 2.317-.613 2.317-1.644 0-1.182-.767-1.732-2.358-1.732h-2.81V9.74h2.85zm.124 6.29c1.716 0 2.564-.637 2.564-1.95 0-1.38-.828-1.997-2.708-1.997h-2.83v3.947h2.974zM98.194 3.89c3.015 0 4.73 1.36 4.73 3.724 0 1.294-.577 2.257-1.92 3.003 1.714.678 2.44 1.82 2.44 3.704 0 2.563-1.903 4.185-4.92 4.185H91.97V3.89h6.224zm-.416 5.85c1.468 0 2.316-.613 2.316-1.644 0-1.182-.766-1.732-2.357-1.732h-2.87V9.74h2.91zm.124 6.29c1.715 0 2.564-.637 2.564-1.95 0-1.38-.828-1.997-2.71-1.997h-2.89v3.947h3.036zM120.96 13.355c-.205 3.353-2.505 5.456-5.956 5.456-3.864 0-6.41-3-6.41-7.58 0-4.56 2.61-7.647 6.47-7.647 3.31 0 5.527 1.95 5.772 5.04h-2.853c-.33-1.665-1.295-2.477-2.897-2.477-2.177 0-3.595 1.97-3.595 5.062 0 3.047 1.398 5.063 3.534 5.063 1.767 0 2.75-.92 3.062-2.915h2.874zm4.89-6.837v3.44h6.08v2.544h-6.08v6.003h-2.878V3.89h9.553v2.628h-6.676zm12.04 0v3.44h6.158v2.544h-6.158v6.003h-2.877V3.89h9.635v2.628h-6.758zM154.414 6.518v3.44h6.22v2.544h-6.22v6.003h-2.898V3.89h9.717v2.628h-6.82zm12.293 0v3.44h6.18v2.544h-6.18v6.003h-2.902V3.89h9.68v2.628h-6.778zm16.73 1.71c-.166-1.492-.993-2.17-2.676-2.17-1.426 0-2.317.657-2.317 1.71 0 .877.56 1.403 1.698 1.62l2.49.46c2.654.482 4.082 1.973 4.082 4.254 0 2.87-2.2 4.71-5.682 4.71-3.69 0-5.8-1.885-5.862-5.195h2.94c.185 1.907 1.08 2.72 3.047 2.72 1.516 0 2.593-.835 2.593-1.995 0-.92-.58-1.49-1.698-1.71l-2.26-.437c-2.883-.57-4.208-1.887-4.208-4.23 0-2.673 2.028-4.382 5.345-4.382 3.255 0 5.268 1.73 5.35 4.644h-2.84z"
                      fill="#000"
                    />
                    <path d="M0 0h59.233v20.603H0V0z" fill="#EC0000" />
                    <path
                      d="M35.186 17.02h3.75l-5.047-5.163h6.265v5.163h2.96v-5.163h6.267l-5.05 5.163h3.752l6.427-6.708-6.426-6.73h-3.752l5.05 5.185h-6.266V3.583h-2.96v5.184h-6.267l5.047-5.184h-3.75l-6.43 6.73 6.43 6.707"
                      fill="#FFF"
                    />
                  </g>
                </svg>
              </MenuItem>
            </Box>

            <MenuItem
              style={{
                display: "block",
                width: "13.35714em",
                height: "2.85714em",
                margin: "0.85714em 0 0",
              }}
            >
              <svg
                className="mod_header_logo_content "
                viewBox="0 0 187 21"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g>
                  <path
                    d="M73.06 8.227c-.165-1.49-.993-2.17-2.667-2.17-1.427 0-2.314.658-2.314 1.71 0 .878.556 1.404 1.693 1.622l2.48.46c2.646.48 4.073 1.97 4.073 4.252 0 2.87-2.193 4.71-5.665 4.71-3.678 0-5.785-1.885-5.847-5.195h2.935c.186 1.907 1.073 2.72 3.037 2.72 1.51 0 2.584-.835 2.584-1.995 0-.92-.58-1.49-1.696-1.71l-2.25-.437c-2.875-.57-4.2-1.887-4.2-4.23 0-2.673 2.027-4.382 5.334-4.382 3.245 0 5.25 1.73 5.33 4.644H73.06zM84.594 3.89c3.015 0 4.73 1.36 4.73 3.724 0 1.294-.577 2.257-1.92 3.003 1.714.678 2.44 1.82 2.44 3.704 0 2.563-1.904 4.185-4.92 4.185h-6.49V3.89h6.16zm-.416 5.85c1.468 0 2.317-.613 2.317-1.644 0-1.182-.767-1.732-2.358-1.732h-2.81V9.74h2.85zm.124 6.29c1.716 0 2.564-.637 2.564-1.95 0-1.38-.828-1.997-2.708-1.997h-2.83v3.947h2.974zM98.194 3.89c3.015 0 4.73 1.36 4.73 3.724 0 1.294-.577 2.257-1.92 3.003 1.714.678 2.44 1.82 2.44 3.704 0 2.563-1.903 4.185-4.92 4.185H91.97V3.89h6.224zm-.416 5.85c1.468 0 2.316-.613 2.316-1.644 0-1.182-.766-1.732-2.357-1.732h-2.87V9.74h2.91zm.124 6.29c1.715 0 2.564-.637 2.564-1.95 0-1.38-.828-1.997-2.71-1.997h-2.89v3.947h3.036zM120.96 13.355c-.205 3.353-2.505 5.456-5.956 5.456-3.864 0-6.41-3-6.41-7.58 0-4.56 2.61-7.647 6.47-7.647 3.31 0 5.527 1.95 5.772 5.04h-2.853c-.33-1.665-1.295-2.477-2.897-2.477-2.177 0-3.595 1.97-3.595 5.062 0 3.047 1.398 5.063 3.534 5.063 1.767 0 2.75-.92 3.062-2.915h2.874zm4.89-6.837v3.44h6.08v2.544h-6.08v6.003h-2.878V3.89h9.553v2.628h-6.676zm12.04 0v3.44h6.158v2.544h-6.158v6.003h-2.877V3.89h9.635v2.628h-6.758zM154.414 6.518v3.44h6.22v2.544h-6.22v6.003h-2.898V3.89h9.717v2.628h-6.82zm12.293 0v3.44h6.18v2.544h-6.18v6.003h-2.902V3.89h9.68v2.628h-6.778zm16.73 1.71c-.166-1.492-.993-2.17-2.676-2.17-1.426 0-2.317.657-2.317 1.71 0 .877.56 1.403 1.698 1.62l2.49.46c2.654.482 4.082 1.973 4.082 4.254 0 2.87-2.2 4.71-5.682 4.71-3.69 0-5.8-1.885-5.862-5.195h2.94c.185 1.907 1.08 2.72 3.047 2.72 1.516 0 2.593-.835 2.593-1.995 0-.92-.58-1.49-1.698-1.71l-2.26-.437c-2.883-.57-4.208-1.887-4.208-4.23 0-2.673 2.028-4.382 5.345-4.382 3.255 0 5.268 1.73 5.35 4.644h-2.84z"
                    fill="#000"
                  />
                  <path d="M0 0h59.233v20.603H0V0z" fill="#EC0000" />
                  <path
                    d="M35.186 17.02h3.75l-5.047-5.163h6.265v5.163h2.96v-5.163h6.267l-5.05 5.163h3.752l6.427-6.708-6.426-6.73h-3.752l5.05 5.185h-6.266V3.583h-2.96v5.184h-6.267l5.047-5.184h-3.75l-6.43 6.73 6.43 6.707"
                    fill="#FFF"
                  />
                </g>
              </svg>
            </MenuItem>
          </Toolbar>
        </Container>
      </AppBar>

      <AppBar
        position="static"
        style={{
          backgroundColor: "white",
          boxShadow: "none",
          borderBottom: "1px solid #e5e5e5",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="gray"
              >
                <MenuIcon color="black" />
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
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box> */}

            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  style={{ paddingLeft: "30px", paddingRight: "15px" }}
                  sx={{
                    my: 2,
                    color: "#616161",
                    display: "block",

                    fontFamily: "sans-serif",
                    textTransform: "none",
                    fontSize: "1em",
                    fontWeight: "600",
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            {/* <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
          </Box> */}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
export default ResponsiveAppBar;
