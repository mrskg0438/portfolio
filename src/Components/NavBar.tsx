import MenuIcon from '@mui/icons-material/Menu';
import { Menu, MenuItem } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { Container, Stack } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logo from "../assets/images/logo.png";
import Link from 'next/link';
import LogoImg from '../assets/svg/LogoImg'
import SunIcon from '../assets/svg/SunIcon'
import ContainedTypography from './ContainedTypography';
import Sidebar from './Sidebar';
import { useRouter } from 'next/router';
import { RootState } from '@/redux/reducers';
import { changeThemeWithColor } from '@/redux/actions/themeActions';
const drawerWidth = 50;
const navbarData = {
    routes: [
        {
            id: 1,
            name: "home",
            path: "/",
        }, {
            id: 2,
            name: "about-me",
            path: "/about",
        },
        {
            id: 3,
            name: "projects",
            path: "/projects",
        },
        {
            id: 4,
            name: "experience",
            path: "/experience",
        },
        // {
        //     id: 5,
        //     name: "certificates",
        //     path: "/certificates",

        // },
        {
            id: 6,
            name: "education",
            path: "/education",
        },
        {
            id: 7,
            name: "contact",
            path: "/contacts",
        }
    ],
    logo: logo,
    logoTitle: "Shwetkamal",
}

function NavBar(props: any) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const router = useRouter()
    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const { mode, color, mainBgColorDark, mainBgColorLight, textDark, textLight, textWhite, textGray } = useSelector((state: RootState) => state.theme)
    const isDark = Boolean(mode === 'dark')
    const dispatch = useDispatch()
    const { routes, logo, logoTitle } = navbarData
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const drawer = (
        <nav
            onClick={handleDrawerToggle}
            style={{
                textAlign: 'center',
                backgroundColor: isDark ? mainBgColorDark : mainBgColorLight,
            }}>
            <Stack
                direction="row"
                alignItems="center"
                justifyContent={"center"}
                spacing={1}
                sx={{
                    cursor: "pointer",
                }}
                py={4}
            >
                <LogoImg
                    iconColor={isDark ? textLight : textDark}
                />
                <ContainedTypography >
                    {logoTitle}
                </ContainedTypography>
                <IconButton
                    color='primary'
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}

                >
                    <SunIcon
                        iconColor={isDark ? textLight : textDark}
                    />
                </IconButton>
            </Stack>

            <Divider />
            <Stack
                gap={2}
                fontSize="1.2rem"
                textAlign={"left"}
                py={1}
                mt={2}
                onClick={handleDrawerToggle}
            >
                {routes.map((item) => (

                    <Link
                        href={item.path}
                        key={item.id}

                        style={(router.pathname === item.path ?
                            {
                                borderRight: "4px solid #fff",
                                background: isDark ? '#1E1E1E' : '#282C33',
                                color: '#fff',
                                fontFamily: "FiraCode",
                                fontWeight: 600,
                                padding: "0.5rem 1rem",

                            }
                            : {
                                color: isDark ? textLight : textDark,
                                fontFamily: "FiraCode",
                                fontWeight: 400,
                                padding: "0.5rem 1rem",


                            })}
                        className='drawer-link'

                    >
                        <span
                            style={{
                                color: "#C778DD"
                            }}
                        >
                            #
                        </span>
                        <Box
                            component="span"
                            sx={{
                                "&:hover": {
                                    color: '#fff'
                                },

                            }}

                        >{item.name}
                        </Box>
                    </Link>
                ))}
            </Stack>
        </nav>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    // menu items 
    const ModeList = () => {
        return (
            <Stack p={2} gap={2}>
                {
                    color.map((item) => {
                        return (

                            <MenuItem
                                key={item.id}
                                onClick={() => {
                                    dispatch(changeThemeWithColor(item))
                                    setSelectedIndex(item.id)
                                    handleClose()
                                }}
                                sx={{
                                    backgroundColor: item.bgColor,
                                    color: item.textLight,
                                    borderLeft: selectedIndex === item.id ? `4px solid #f44336` : "none",
                                }}
                            >
                                {item.name}
                            </MenuItem>

                        )
                    })
                }
            </Stack>
        )
    }

    return (
        <Box sx={{
            display: 'flex',
            margin: 0,
            padding: 0,
            flexWrap: 'wrap'
        }}>
            <AppBar component="nav"
                sx={{
                    backgroundColor: isDark ? mainBgColorDark : mainBgColorLight,
                    boxShadow: 'none',
                    pl: {
                        md: 7,
                        xs: 0,
                    },
                }}
            >
                <Container maxWidth="xl">

                    <Toolbar>
                        <IconButton
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{
                                mr: 2, display: { md: 'none' },
                                color: isDark ? textLight : textDark,
                            }}
                        >
                            <MenuIcon />
                        </IconButton>

                        <Box
                            sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }}
                            component="div"
                        >
                            <Stack
                                direction="row"
                                alignItems="center"
                                spacing={1}
                                sx={{
                                    cursor: "pointer",
                                }}
                            // component={<Link href={''}/>}
                            // to="/"

                            >
                                <LogoImg
                                    iconColor={isDark ? textLight : textDark}
                                />
                                <ContainedTypography
                                    fontSize="1rem"
                                    color={isDark ? textLight : textDark}

                                >
                                    Shwetkamal Gaud
                                </ContainedTypography>
                            </Stack>
                        </Box>
                        <Stack sx={{ display: { xs: 'none', md: 'block' } }}
                            spacing={2}
                            direction="row"
                        >
                            <IconButton
                                color='primary'
                                // onClick={() => {
                                //     if (isDark) {
                                //         dispatch(changeTheme('light'))
                                //     }
                                //     else {
                                //         dispatch(changeTheme('dark'))
                                //     }
                                // }}
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}

                            >
                                <SunIcon
                                    iconColor={isDark ? textLight : textDark}
                                />

                            </IconButton>

                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <ModeList />
                            </Menu>
                            {
                                routes.map((route, index) => {
                                    return (
                                        <Link
                                            href={route.path}
                                            key={index}
                                            style={(
                                                route.path === router.pathname ?
                                                    {
                                                        // borderRight: "4px solid white",
                                                        // background: "rgb(45, 51, 89)"
                                                        color: isDark ? textWhite : textDark,
                                                        fontFamily: "FiraCode",
                                                        fontWeight: 600,

                                                    }
                                                    : {
                                                        color: isDark ? textLight : textGray,
                                                        fontFamily: "FiraCode",
                                                        fontWeight: 400,

                                                    })}
                                        >
                                            <span
                                                style={{
                                                    color: "#C778DD"
                                                }}
                                            >#</span>
                                            <Box
                                                component="span"
                                                sx={{
                                                    "&:hover": {
                                                        color: isDark ? textWhite : textDark,
                                                    }
                                                }}

                                            >{route.name}
                                            </Box>
                                        </Link>
                                    )
                                })
                            }
                        </Stack>

                    </Toolbar>
                </Container>
            </AppBar>

            <Box component="nav" >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    PaperProps={{
                        sx: {
                            backgroundColor: isDark ? mainBgColorDark : mainBgColorLight,
                        }
                    }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: `${drawerWidth}%` },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                sx={{
                    position: "fixed",
                    top: 50,
                    left: 20,
                }}
            >
                <Sidebar />
            </Box>
        </Box >
    )
}


export default NavBar;