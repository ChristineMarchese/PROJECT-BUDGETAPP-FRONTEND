  import { useNavigate } from "react-router-dom";
  import { useState } from "react";
  import axios from "axios";


 function NewPage() {
 const navigate = useNavigate();
 const API = import.meta.env.VITE_API_KEY;
 const [date, setDate] = useState("");
 const [name, setName] = useState();
 const [amount, setAmount] = useState(0);
 const [from, setFrom] = useState("");

async function newButton(e) {
   e.preventDefault();
     try{
       let result = await axios.post(`${API}/budget`,{
         date: date,
         name: name,
         amount: amount,
         from: from, 
       });
       navigate("/budget");
       console.log(result);
       return result;
      }catch(error){
      console.log(error);
     }
   }
  return (
   <>
    <h2>Add a new item</h2>
    <form onSubmit={newButton}>
      <div>
        <label>Date</label> 
        <input type="text" id="date" name="date" value={date} onChange={(e) => 
         setDate(e.target.value)} placeholder="date" required
        />
      </div>
      <br/>
      <div>
        <label>Name</label>
        <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)}
        placeholder="name" required
        />
      </div>
      <br/>
      <div>
        <label>Amount</label>
        <input type="number" id="amount" name="amount" value={amount} onChange={(e) => setAmount(e.target.value)}
         placeholder="amount" required
        />
      </div>
       <br/>
       <div>
        <label>From</label> 
        <input type="text" id="from" name="from" value={from} onChange={(e) => setFrom(e.target.value)} 
        placeholder="from" required
        />
        </div>
        <br/>
         <button>Create New Item</button>
    </form> 
   </>
  )
}

export default NewPage;