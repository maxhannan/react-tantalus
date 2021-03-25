import { Button, Container, Grid } from "@material-ui/core";
import menHero from '../Assets/home/menHero.jpg'
import womenHero from '../Assets/home/womenHero.jpg'
import furnitureHero from '../Assets/home/furnitureHero.jpg'
import { Link as RouterLink } from "react-router-dom";
import {makeStyles} from '@material-ui/core'
import { Type } from "./StyledComponents";
 const useStyles = makeStyles(() => ({
  container: {
    width: '100%', 
    display: 'flex', 
    alignItems: 'center', 
    height: '90vh',
    "@media (max-width: 1000px)": {
      height: '100%',
      marginTop: '20px'
    }
  },
  heroContainer: {
    width: '100%', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    position: 'relative',
    animation: 'fadeIn 500ms ease-in-out',
  },
  imgStyle: {
    maxHeight: '100%', 
    maxWidth: '100%', 
    opacity: .5,
    transition: 'opacity 500ms ease, transform 500ms ease',
    '&:hover':{
      transform: 'scale(1.05)'
    }
  }
 }))
const HomePage = () => {
  const classes = useStyles()
  
  const HeroBox = ({src, href, btnText}) => (
    <Grid item  xs = {12} sm = {12} md = {4} style = {{height: '100%', }}>
      <div className = {classes.heroContainer}>
        <img src={src} alt="hero" className = {classes.imgStyle}/>
        <Button component = {RouterLink} to = {href} variant = 'outlined' color = 'secondary' style = {{position: 'absolute'}}>
          <Type>{btnText}</Type>
        </Button>
      </div>
    </Grid>
  );

  return ( 
  <Container className = {classes.container}>
  <Grid container spacing={4} >
    <HeroBox src = {menHero} href = '/react-tantalus/men' btnText = "Shop Men's"/>
    <HeroBox src = {womenHero} href = '/react-tantalus/women' btnText = "Shop Women's"/>
    <HeroBox src = {furnitureHero} href = '/react-tantalus/home' btnText = "Shop Furniture"/>
  </Grid>
</Container>
  );
}
export default HomePage;