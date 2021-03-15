import IconButton from '@material-ui/core/IconButton';
import { MdMenu,MdShoppingCart } from 'react-icons/md' 
import { useState } from "react";
import { Typography } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
const Navbar = ({cartCount}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return ( 
    <nav className = 'navbar'>
      <div className = 'brand-title'>Tantalus</div>
      <div className="btnHolder">
      <IconButton  onClick = {() => setMenuOpen(!menuOpen)}>
        <MdMenu color = '#252525'/>
      </IconButton>
      <IconButton >
        <Badge badgeContent={cartCount} color="secondary">
          <MdShoppingCart color = '#252525'/>
        </Badge>
      </IconButton>
      </div>
      <div className = {menuOpen ? 'navbar-links active' : 'navbar-links'}>
        <ul>
          <li><a href="/"><Typography variant = 'subtitle1'>Men's</Typography></a></li>
          <li><a href="/about"><Typography variant = 'subtitle1'>Women's</Typography></a></li>
          <li><a href="/contact"><Typography variant = 'subtitle1'>Home</Typography></a></li>
          <li><a href="/"><Typography variant = 'subtitle1'>Lifestyle</Typography></a></li>
          <li><a href="/about"><Typography variant = 'subtitle1' color="secondary">Sale</Typography></a></li>
        </ul>
      </div>
      <div className={menuOpen ? 'cartBtn' : 'cartBtn'}>
      <IconButton >
        <Badge badgeContent={cartCount} color="secondary">
          <MdShoppingCart color = '#252525'/>
        </Badge>
      </IconButton>
      </div>
    </nav>
   );
}
 
export default Navbar;