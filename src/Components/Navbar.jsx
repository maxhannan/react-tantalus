import IconButton from '@material-ui/core/IconButton';
import { MdClose, MdMenu,MdShoppingCart } from 'react-icons/md' 
import { useState } from "react";
import { Typography } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(!menuOpen)
  }
  return ( 
    <nav className = 'navbar'>
      <div className = 'brand-title'><Link to="/">Tantalus</Link></div>
      <div className="btnHolder">
        <IconButton component = {Link} to = '/' >
          <Badge badgeContent={0} color = 'secondary'>
            <MdShoppingCart color = '#252525'/>
          </Badge>
        </IconButton>
        <IconButton onClick = {closeMenu}>
          {menuOpen ? <MdClose color = '#252525'/> : <MdMenu color = '#252525'/>}
        </IconButton>
      </div>
      <div className = {menuOpen ? 'navbar-links active' : 'navbar-links'}>
        <ul>
          <li><Link to="/men" onClick = {closeMenu}><Typography variant = 'subtitle1'>Men's</Typography></Link></li>
          <li><Link to="/women" onClick = {closeMenu}><Typography variant = 'subtitle1'>Women's</Typography></Link></li>
          <li><Link to="/home" onClick = {closeMenu}><Typography variant = 'subtitle1'>Home</Typography></Link></li>
          <li><Link to="/lifestyle" onClick = {closeMenu}><Typography variant = 'subtitle1'>Lifestyle</Typography></Link></li>
          <li><Link to="/sale" onClick = {closeMenu}><Typography variant = 'subtitle1' color="secondary">Sale</Typography></Link></li>
        </ul>
      </div>
      <div className={menuOpen ? 'cartBtn' : 'cartBtn'}>
      <IconButton component = {Link} to = '/'>
        <Badge badgeContent={0} color="secondary">
          <MdShoppingCart color = '#252525'/>
        </Badge>
      </IconButton>
      </div>
    </nav>
   );
}
 
export default Navbar;