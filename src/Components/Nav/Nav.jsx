import { Button, Typography, IconButton, Drawer, MenuItem, Link, Badge } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { AppBar, Toolbar } from "@material-ui/core";
import { useState, useEffect } from "react";
import {MdMenu as MenuIcon} from 'react-icons/md'
import {RiShoppingCart2Line} from 'react-icons/ri'
import {MdClose} from 'react-icons/md'
// Style Sheet
import {useStyles} from './styles'
// Menu Options
import {headersData} from './headersData'

const Nav = ({getCartSize}) => {
  const { header, logo, menuButton, toolbar, drawerContainer } = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false
  })

  const { mobileView, drawerOpen } = state;
  // Responsive Switch for Nav
  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 1000
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);
  // Desktop Nav
  const displayDesktop = () => {
    return(
      <Toolbar className = {toolbar}>
        {tantalusLogo}
        <div>{getMenuButtons()}</div>
        <div style = {{marginLeft: 'auto'}}>{CartIcon}</div>
      </Toolbar>
    );
  };
  // Mobile Nav
  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));
    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon color = '#222' />
        </IconButton>
        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div style = {{width: '100%',height: '7vh', display: 'flex', justifyContent: 'flex-end',  borderBottom: '1px solid #ccc'}}>
            <IconButton onClick = {handleDrawerClose} color = 'secondary'><MdClose/></IconButton>
          </div>
          <div  className={drawerContainer} onClick = {handleDrawerClose}>{getDrawerChoices()}</div>
        </Drawer>
        <div style = {{width: '100%', display: 'flex', justifyContent: 'center'}}>{tantalusLogo}</div>
        <div  style = {{marginLeft: 'auto'}}>
         {CartIcon}
        </div>
       
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label, href, color = 'inherit'}) => {
      return (
        <Link
          {...{
            component: RouterLink,
            to: href,
            color: color,
            style: { textDecoration: "none", },
            key: label,
          }}
        >
          <MenuItem style = {{fontWeight: 400, fontSize: '8vw', fontFamily: "'Montserrat', sans-serif",}}>{label}</MenuItem>
        </Link>
      );
    });
  };

  const tantalusLogo = (
    <Typography variant="h4" color = 'secondary' className = {logo} component = {RouterLink} to = '/react-tantalus/'>
      Tantalus
    </Typography>
  );

  const CartIcon = (
    <IconButton component = {RouterLink} to = '/react-tantalus/cart' color = 'secondary'>
      <Badge badgeContent={getCartSize()} color = 'secondary'>
        <RiShoppingCart2Line />
      </Badge>
    </IconButton>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href, color = 'default' }) => {
      return (
        <Button
          {...{
            key: label,
            color: color,
            to: href,
            component: RouterLink,
            className: menuButton
          }}
        >
          {label}
        </Button>
      );
    });
  };

  return ( 
    <header>
      <AppBar className = {header}>
      {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
   );
}
 
export default Nav;
