import Condition_ren_IIF from "./component/Condition_ren_IIF";
import Conditional_rendering from "./component/Conditional_rendering";
import Map_fun from "./component/Map_fun";




const App = () => {
  function SubForm(A){
    A.preventDefault();
    alert("No Reload");
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
    </div>
  );
};

export default App;