import IconButton from '@material-ui/core/IconButton';
import { MdClose, MdMenu,MdShoppingCart } from 'react-icons/md' 
import { useState } from "react";
import { Typography } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import { Link } from 'react-router-dom'
import './styles.css'
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false)
  }
  return ( 
    <nav className = 'navbar'>
      <div className = 'brand-title'><Link to="/react-tantalus/">Tantalus</Link></div>
      <div className="btnHolder">
        <IconButton component = {Link} to = '/react-tantalus/cart' >
          <Badge badgeContent={2} color = 'secondary'>
            <MdShoppingCart color = '#252525'/>
          </Badge>
        </IconButton>
        <IconButton onClick = {() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <MdClose color = '#252525'/> : <MdMenu color = '#252525'/>}
        </IconButton>
      </div>
      <div className = {menuOpen ? 'navbar-links active' : 'navbar-links'}>
        <ul>
          <li><Link to="/react-tantalus/men" onClick = {closeMenu}><Typography variant = 'subtitle1'>Men's</Typography></Link></li>
          <li><Link to="/react-tantalus/women" onClick = {closeMenu}><Typography variant = 'subtitle1'>Women's</Typography></Link></li>
          <li><Link to="/react-tantalus/home" onClick = {closeMenu}><Typography variant = 'subtitle1'>Home</Typography></Link></li>
          <li><Link to="/react-tantalus/lifestyle" onClick = {closeMenu}><Typography variant = 'subtitle1'>Lifestyle</Typography></Link></li>
          <li><Link to="/react-tantalus/sale" onClick = {closeMenu}><Typography variant = 'subtitle1' color="secondary">Sale</Typography></Link></li>
        </ul>
      </div>
      <div className={menuOpen ? 'cartBtn' : 'cartBtn'}>
      <IconButton component = {Link} to = '/react-tantalus/cart'>
        <Badge badgeContent={2} color="secondary">
          <MdShoppingCart color = '#252525'/>
        </Badge>
      </IconButton>
      </div>
    </nav>
   );
}
 
export default Navbar;