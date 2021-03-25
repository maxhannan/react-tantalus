import { Button, Container, Grid } from "@material-ui/core";
import menHero from '../Assets/home/menHero.jpg'
import womenHero from '../Assets/home/womenHero.jpg'
import furnitureHero from '../Assets/home/furnitureHero.jpg'
import { Link as RouterLink } from "react-router-dom";
import {makeStyles} from '@material-ui/core'
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
    opacity: .7,
    transition: 'opacity 500ms ease, transform 500ms ease',
    '&:hover':{
      opacity: 1,
      transform: 'scale(1.05)'
    }
  }
 }))
const HomePage = () => {
  const classes = useStyles()
  return ( 
  <Container className = {classes.container}>
  <Grid container spacing={4} >
  <Grid item  xs = {12} sm = {12} md = {4} style = {{height: '100%', }}>
      <div className = {classes.heroContainer}>
        <img src={menHero} alt="" className = {classes.imgStyle}/>
        <Button component = {RouterLink} to = '/react-tantalus/men' variant = 'outlined' color = 'secondary' style = {{position: 'absolute'}}>
          Shop Men's
        </Button>
      </div>
    </Grid>
    <Grid item  xs = {12} sm = {12} md = {4} style = {{height: '100%', }}>
      <div className = {classes.heroContainer}>
        <img src={womenHero} alt="" className = {classes.imgStyle}/>
        <Button  component = {RouterLink} to = '/react-tantalus/women' variant = 'outlined' color = 'secondary' style = {{position: 'absolute'}}>
          Shop Women's
        </Button>
      </div>
    </Grid>
    <Grid item  xs = {12} sm = {12} md = {4} style = {{height: '100%', }}>
      <div className = {classes.heroContainer}>
        <img src={furnitureHero} alt="" className = {classes.imgStyle}/>
        <Button  component = {RouterLink} to = '/react-tantalus/home' variant = 'outlined' color = 'secondary' style = {{position: 'absolute'}}>
          Shop Furniture
        </Button>
      </div>
    </Grid>
  </Grid>
</Container>
  );
}
export default HomePage;