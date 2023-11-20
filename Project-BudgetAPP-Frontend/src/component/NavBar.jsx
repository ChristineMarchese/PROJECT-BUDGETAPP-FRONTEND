import { useNavigate } from "react-router-dom";

 function NavBar() {

  const navigate = useNavigate();

  function newButton(){
    navigate("/budget/new");
  }

  function newBudget() {
    navigate("/");
  }


  return (

  <div>
    <h1 onClick={newBudget}>Budget App</h1>
    <br />
    <button onClick={newButton}>New Transaction</button>
    <br />
    </div>
  )
}

export default NavBar;