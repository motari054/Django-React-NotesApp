import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import NotesListPage from './pages/NotesListPage'
import NotePage from "./pages/NotePage";


export default function App(){
  return (
    <>
    <Router>
      <div className="container dark">
        <div className="app">
          <Header/> <br/>
          <Routes>
            <Route path="/" element={<NotesListPage/>} />
            <Route path="note/:id" element={<NotePage/>} />
          </Routes>
        </div>
      </div>
    </Router>
    </>
  )
}
