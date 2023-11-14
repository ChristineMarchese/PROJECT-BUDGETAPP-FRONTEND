import { useNavigate } from "react-router-dom";


function EditPage() {
const navigate = useNavigate();
const [date, seDate] = useState();



function submitButton(e){
  e.prevent.default();
}

  return (
   <>
    <div>EditPage</div>
    <form>
      <button onSubmit={submitButton}>Submit</button>
    </form>
  </>
  )
}

export default EditPage;