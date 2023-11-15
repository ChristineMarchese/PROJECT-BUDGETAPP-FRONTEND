import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


function EditPage() {
const API = import.meta.env.VITE_API_KEY;
const navigate = useNavigate();
const { id } = useParams();

const [item_name, setItem_Name] = useState("");
const [amount,setAmount] = useState(0);
const [date, setDate] = useState("");
const [from, setFrom] = useState("");
const [category, setCategory] = useState("");

useEffect(() => {
  fetchEditLog();
}, []);

  async function fetchEditLog(){
      try{
       let result = await axios.get(`${API}/budget/${id}`);
      //  console.log(result);
       setItem_Name(result.data.item_name);
       setAmount(result.data.amount);
       setDate(result.data.date);
       setFrom(result.data.from);
       setCategory(result.data.category);
      } catch(error){
        console.log(error);
      }
  }

async function submitButton(e){
  e.prevent.default();
    try {                           // edit page is prefilled
                                    // edit is the endpoint here
        await axios.put(`${API}/budget/${id}`, {
        item_name: item_name,
        amount: amount,
        date: date,
        from: from,
        category: category,
      });
      // whatever I edited I will see on the index page
      // once the fetch is done it will Navigate to the index
      // page. I will see the edited items on index page
       navigate('/budget')
      } catch (error) {
       console.log(error);
     }
    }
  
  return (
   <>
    <div>Edit Page</div>
    <form>
       <div>
         <label>Item Name</label>
         <input type="text" value={item_name}
          onChange={(e) => setItem_Name(e.target.value)} placeholder="item name" required
        />
       </div>
       <div>
         <label>Amount</label>
         <input type="number" value={amount}
          onChange={(e) => setAmount(e.target.value)} placeholder="amount" required
        />
       </div>
       <div>
         <label>Date</label>
         <input type="text" value={date}
         onChange={(e) => setDate(e.target.value)} placeholder="date" required
         />
       </div>
       <div>
         <label>From</label>
         <input type="text" value={from}
         onChange={(e) => setFrom(e.target.value)} placeholder="from" required
         />
       </div>
       <div>
         <label>Category</label>
         <input type="text" value={category}
         onChange={(e) => setCategory(e.target.value)} placeholder="category" required
         />
       </div>
      <button onSubmit={submitButton}>Submit</button>
    </form>
  </>
  )
 }

export default EditPage;