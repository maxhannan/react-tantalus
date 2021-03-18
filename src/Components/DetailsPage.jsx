import { useHistory } from "react-router-dom";
const DetailsPage = () => {
  const history = useHistory()
  return ( 
    <div>
       <button onClick = {() => history.goBack()}>Back Button</button>
       Hello From Details
    </div>
   
   );
}
 
export default DetailsPage;