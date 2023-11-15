  import { useNavigate } from "react-router-dom";
  import { useState } from "react";
  import axios from "axios";


 function NewPage() {
 const navigate = useNavigate();
 const API = import.meta.env.VITE_API_KEY;

 const [item_name, setItem_Name] = useState("");
 const [amount, setAmount] = useState(0);
 const [date, setDate] = useState("");
 const [from, setFrom] = useState("");
 const [category, setCategory] = useState("")

async function newButton(e) {
   e.preventDefault();
     try{
       let result = await axios.post(`${API}/budget`,{
         item_name: item_name,
         amount: amount,
         date: date,
         from: from, 
         Category: category,
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
        <label>Item Name</label> 
        <input type="text" id="item_name" name="item_name" value={item_name} 
        onChange={(e) => setItem_Name(e.target.value)} placeholder="item name" required
        />
      </div>
      <br/>
      <div>
        <label>Amount</label>
        <input type="number" id="amount" name="amount" value={amount} 
        onChange={(e) => setAmount(e.target.value)} placeholder="amount" required
        />
      </div>
      <br/>
      <div>
        <label>Date</label>
        <input type="text" id="amount" name="amount" value={date} 
        onChange={(e) => setDate(e.target.value)} placeholder="date" required
        />
      </div>
       <br/>
       <div>
        <label>From</label> 
        <input type="text" id="from" name="from" value={from} 
        onChange={(e) => setFrom(e.target.value)} placeholder="from" required
        />
        </div>
        <div>
         <label>Category</label>
         <input type="bank account" id="category" name="category" value={category} 
         onChange={(e) => setCategory(e.target.value)} placeholder="category" required
          />
        </div>
        <br/>
         <button>Create New Item</button>
    </form> 
   </>
  )
}

export default NewPage;