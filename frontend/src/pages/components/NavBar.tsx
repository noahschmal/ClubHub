import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import TripOriginIcon  from '@mui/icons-material/TripOrigin';
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { getUser, logout } from "../../slices/authSlice";
import { useEffect } from 'react';


const home = ['Home'];
const clubs = ['Clubs'];
const calendar = ['Calendar'];

const account = ['Account'];
const logouts = ['Logout'];

function ResponsiveAppBar() {
    const dispatch = useAppDispatch();

    const basicUserInfo = useAppSelector((state) => state.auth.basicUserInfo);

    useEffect(() => {
        if (basicUserInfo) {
        dispatch(getUser(basicUserInfo.id));
        }
    }, [basicUserInfo]);

    const navigate = useNavigate();

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

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

    const handleNavHome = () => {
        navigate("/");
    }
    const handleNavClubs = () => {
        navigate("/clubgrid");
    }
    const handleNavCalendar = () => {
        navigate("/calendar");
    }

    const handleAccount = () => {
        navigate("/account");
    }

    const handleLogout = async () => {
        try {
          await dispatch(logout()).unwrap();
          navigate("/login");
        } catch (e) {
          console.error(e);
        }
      };

      function stringToColor(string: string) {
        let hash = 0;
        let i;
      
        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
          hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }
      
        let color = '#';
      
        for (i = 0; i < 3; i += 1) {
          const value = (hash >> (i * 8)) & 0xff;
          color += `00${value.toString(16)}`.slice(-2);
        }
        /* eslint-enable no-bitwise */
      
        return color;
      }

      function stringAvatar(name: string | undefined) {
        if (name) {
            return {
            sx: {
                bgcolor: stringToColor(name),
            },
            children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
            };
        }
        name = "~"
        return {
            sx: {
                bgcolor: stringToColor(name),
            },
            children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
            };
      }

    return (
        <AppBar position="static">
        <Container maxWidth="xl">
            <Toolbar disableGutters>
            <TripOriginIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
                variant="h6"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                }}
            >
                CLUBHUB
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', md: 'none' } }}
                >
                {home.map((page) => (
                    <MenuItem key={page} onClick={handleNavHome}>
                    <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                    </MenuItem>
                ))}
                {clubs.map((page) => (
                    <MenuItem key={page} onClick={handleNavClubs}>
                    <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                    </MenuItem>
                ))}
                {calendar.map((page) => (
                    <MenuItem key={page} onClick={handleNavCalendar}>
                    <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                    </MenuItem>
                ))}
                </Menu>
            </Box>
            <TripOriginIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
            <Typography
                variant="h5"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                }}
            >
                LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {home.map((page) => (
                <Button
                    key={page}
                    onClick={handleNavHome}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                >
                    {page}
                </Button>
                ))}
                {clubs.map((page) => (
                <Button
                    key={page}
                    onClick={handleNavClubs}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                >
                    {page}
                </Button>
                ))}
                {calendar.map((page) => (
                <Button
                    key={page}
                    onClick={handleNavCalendar}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                >
                    {page}
                </Button>
                ))}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar {...stringAvatar(basicUserInfo?.name)} />
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
                {account.map((setting) => (
                    <MenuItem key={setting} onClick={handleAccount}>
                    <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                    </MenuItem>
                ))}
                {logouts.map((setting) => (
                    <MenuItem key={setting} onClick={handleLogout}>
                    <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                    </MenuItem>
                ))}
                </Menu>
            </Box>
            </Toolbar>
        </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;