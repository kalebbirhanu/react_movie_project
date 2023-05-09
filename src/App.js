
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Movies from "./movies";
import Navbar from "./nav";
import Form from "./form";
import SignIn from "./create";
import notFound from "./not";
function App() {
 
  return (
    <div>
    
    
    <div>
      <Navbar />
    </div>
    <div>  
  <Routes>
  <Route  exact path='/navbar' element = { <Navbar />} />
   <Route  path='/create' element = {<SignIn />} />
   <Route  path='/movies' element = {<Movies />} />
    <Route   path='/form' element = {<Form />} />
    <Route   path='/not' element = {<notFound />} />
    
  </Routes>
   </div>
   <div>
    
   </div>
   </div>

  );
}

export default App;
