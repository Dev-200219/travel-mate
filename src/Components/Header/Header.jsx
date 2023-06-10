import { AppBar, Box, Container, IconButton, Menu, MenuItem, Toolbar, Typography, Avatar, Tooltip, Button } from '@mui/material'
import { AdbRounded } from '@mui/icons-material'; 
import {spacing} from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'

function Header() {

  let currUser = null;
  const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

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


  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl" sx={{
          paddingLeft:'10px !important'}}>
          <Toolbar disableGutters sx={{
            display : 'flex',
            justifyContent : 'space-between'
          }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                display: { xs: 'none', md: 'flex' },
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              TripMate
            </Typography>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              TripMate
            </Typography>

            {
              currUser ? 
                <Box>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
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
              </Box> :
              <>
                <Box>
                  <Button sx={{color:'white'}}>Login</Button>
                  <Button sx={{color:'white'}}>Sign Up</Button>
                </Box>
              </>
            }
          </Toolbar>
        </Container>
      </AppBar>

    </>
  )
}

export default Header