
import AdminApp from "./admin/adminapp";
import UserApp from "./user/userapp";

function App() {

  

  if( localStorage.getItem("sellerid") == null )
    return (<UserApp/>);
  else 
    return (<AdminApp/>);

}

export default App;
