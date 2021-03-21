import { CircularProgress } from "@material-ui/core";

const Loader = () => {
  return ( 
    <div style = {{display: 'flex', height: '90vh', justifyContent: 'center', alignItems: 'center'}}>
      <CircularProgress color="secondary" size = '3rem' />
    </div>
   );
}
 
export default Loader;