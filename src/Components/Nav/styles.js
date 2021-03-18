import {makeStyles} from '@material-ui/core'
export const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "white",
    opacity: '.9',
    "@media (max-width: 1000px)": {
      paddingLeft: 0,
      paddingRight: 0,
    },
    "&:hover":{
      opacity: '1'
    }
  },
  logo: {
    fontFamily: "'Libre Barcode 39 Text', cursive",

    textAlign: "center",
    textDecoration: 'none',
    "@media (max-width: 1000px)": {
      marginLeft: '0px',
    },
  },
  menuButton: {
    fontFamily: "Roboto, sans-serif",
    fontWeight: 300,
    fontSize: "14px",
    marginLeft: "38px",
 },
 toolbar: {
    display: "flex",
    justifyContent: "space-between",
 },
 drawerContainer: {
  padding: "10px 0px",
  width: '80vw'
}
}));