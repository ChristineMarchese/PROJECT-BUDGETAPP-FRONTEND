/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

 function IndexPage() {
 const API = import.meta.env.VITE_API_KEY;
 let [total, setTotal] = useState(0);
const [money, setMoney] = useState([]);


useEffect(() => {
   fetchIndex();
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);


async function fetchIndex() {
    try {
      let result = await axios.get(`${API}/budget`);
       console.log(result.data);
      //  setMoney(result.data);

       for (let i of result.data) {
         setTotal((total += Number(i.amount)));
       }
        setMoney(result.data)
      
        } catch (error) {
        console.log(error);
     }
    }
    
    function color(total) {
      if (total > 100) return "green";
      else if (total < 0) return "red";
      else if (0 > total < 100) return "yellow";
    }
    

  return (
   <>
     <div>
        <h2>
          Bank Account Toatl:{" "}
          <span style={{ color: `${color(total)}` }}>{total}</span>
        </h2>
      </div>
      <table>
         <tbody>
          <tr>
           <th>Date</th>
           <th>Category</th>
           <th>Amount</th>
        </tr>
        {money.map((element) => {
          return (
            <tr key={element.id}>
             <td>
              <Link to={`/budget/${element.id}`}>{element.date}</Link>
              </td>
              <td>
                <Link to={`/budget/${element.id}`}>{element.category}</Link>
              </td>
              <td>
                <Link to={`/budget/${element.id}`}>{element.amount}</Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table> 
  </>  
  );
}

export default IndexPage;