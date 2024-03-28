import Condition_ren_IIF from "./component/Condition_ren_IIF";
import Conditional_rendering from "./component/Conditional_rendering";
import Map_fun from "./component/Map_fun";




const App = () => {
 
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
    </div>
  );
};

export default App;