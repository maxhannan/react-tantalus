import {makeStyles} from '@material-ui/core'
export const useStyles = makeStyles((theme) => ({
  container:{
    display: 'flex',
    animation: 'fadeIn 500ms ease',
    marginBottom: '2vh',
    "@media (max-width: 1000px)":{
      flexDirection: 'column'
    }
  },
  imgContainer: {
    width: '50%',
    height: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    "@media (max-width: 1000px)":{
      width: '100%',
      height: '100%'
    } 
  },
  imgStyle: {
    maxWidth: '100%', 
    maxHeight: '100%'
  },
  infoContainer: {
    width: '50%',
    display: 'flex', 
    flexDirection: 'column',
    "@media (max-width: 1000px)":{
      width: '100%',
    } 
  },
  btnContainer:{
    width: '95%', 
    display: 'flex', 
    justifyContent: 'flex-end',
    "@media (max-width: 1000px)":{
      width: '98%',
    } 
  },
  formContainer:{
    height: '100%', 
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center',  
    padding: '1.5rem',
    "@media (max-width: 1000px)":{
      padding: '.5rem',
    } 
  },
  formControl: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    minWidth: 120,
    fontFamily: "'Montserrat', sans-serif",

  },
  selectEmpty: {
    marginTop: theme.spacing(2),
    fontFamily: "'Montserrat', sans-serif",
  },
}));