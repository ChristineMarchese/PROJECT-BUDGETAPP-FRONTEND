import { useEffect, useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


 function ShowPage() {
  const navigate = useNavigate();
  const API = import.meta.env.VITE_API_KEY;
  const { id } = useParams();

  const [money, setMoney] = useState("");

    useEffect(() => {
      fetchShowPage();
 }, []);

  async function fetchShowPage() {
     try{
        let result = await axios.get(`${API}/budget/${id}`);
        // console.log(result.data);
        setMoney(result.data);
      } catch (error) {
       console.log(error);
     }
  }

  function backButton() {
    navigate("/budget");
  }

  function editButton() {
    navigate(`/budget/${id}/edit`)
  }

  async function deleteButton() {
     try{
      await axios.delete(`${API}/budget/${id}`);
       navigate(`/budget`);
     } catch (error) {
       console.log(error);
     }
  }

 return (
  <div>
    <div>
      <p>name:{money.item_name}</p>
      <p>amount:{money.amount}</p>
      <p>date:{money.date}</p>
      <p>from:{money.from}</p>
      <p>category:{money.category}</p>
    </div>
    <div>
       <button onClick={backButton}>BACK</button>
       <button onClick={editButton}>EDIT</button>
       <button onClick={deleteButton}>DELETE</button>
    </div>
   </div>
  );
}

export default ShowPage;