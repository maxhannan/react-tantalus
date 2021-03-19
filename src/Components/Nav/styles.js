import {makeStyles} from '@material-ui/core'
export const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "white",
    boxShadow: 'none',
    borderBottom: '1px solid #ccc',
    "@media (max-width: 1000px)": {
      paddingLeft: 0,
      paddingRight: 0,
    },
    "&:hover":{
      opacity: '1'
    }
  },
  logo: {
    fontFamily: "'Monoton', cursive",
    textAlign: "center",
    textDecoration: 'none',
    "@media (max-width: 1000px)": {
      marginLeft: '0px',
    },
  },
  menuButton: {
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 400,
    fontSize: '12px',
    marginLeft: "30px",
 },

 toolbar: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: 'center'
 },
 drawerContainer: {
   
  padding: "0px 0px",
  width: '100vw'
}
}));