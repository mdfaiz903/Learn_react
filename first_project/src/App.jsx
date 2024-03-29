import Condition_ren_IIF from "./component/Condition_ren_IIF";
import Conditional_rendering from "./component/Conditional_rendering";
import Map_fun from "./component/Map_fun";
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import { useRef } from "react";


const App = () => {
  function SubForm(A){
    A.preventDefault();
    alert("No Reload");
  }

  let myheadline = useRef();
  const text_int = ()=>{
    myheadline.current.innerText = "Hellow Bangladesh"
  }
  return (
    <div>
  
      <Map_fun/>

      <Conditional_rendering/>
      <Condition_ren_IIF/>


      <button onClick={
        function demo(){
          alert("Hellow")
        }
      }>Submit</button>

      <hr />
      <form onSubmit={SubForm} action="" method="post">
        <input type="text" name="" placeholder="Name" id="" />
        <button type="submit">Submit</button>
      </form>
      <hr />
  
      <h1 className="text-danger" ref={myheadline} ></h1>
      <button onClick={text_int} type="submit">Click</button>

    </div>
  );
};

export default App;