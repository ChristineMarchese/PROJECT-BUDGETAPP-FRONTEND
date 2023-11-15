import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './component/NavBar';
import EditPage from './component/EditPage';
import IndexPage from './component/IndexPage';
import NewPage from './component/NewPage';
import ShowPage from './component/ShowPage';
import HomePage from './component/HomePage';
import PageNotFound from './component/PageNotFound';

function App() {


  return (

    <div>
     <Router>
       <NavBar />
         <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/budget" element={<IndexPage/>} />
          <Route path="/budget/:id" element={<ShowPage/>} />
          <Route path="/budget/new" element={<NewPage/>} />
          <Route path="/budget/:id/edit" element={<EditPage/>} />
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
    </Router>
   </div>

   
  )
}

export default App;
