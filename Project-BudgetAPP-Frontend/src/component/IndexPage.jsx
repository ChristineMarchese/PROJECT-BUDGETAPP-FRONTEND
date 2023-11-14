/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

 function IndexPage() {
 const API = import.meta.env.VITE_API_KEY;
 const [money, setMoney] = useState([]);

useEffect(() => {
   fetchIndex();
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);


async function fetchIndex() {
    try {
      let result = await axios.get(`${API}/budget`)
       console.log(result.data)
       setMoney(result.data);
    } catch (error) {
     console.log(error)
 }
}
  return (
      <table>
         <body>
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
      </body>
    </table> 
  );
}

export default IndexPage;