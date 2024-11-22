import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Assistance from "./pages/Assistance";
import Profile from "./pages/Profile";
import CustomerService from "./pages/CustomerService";
import "./index.css";
import DocRequest from "./pages/DocRequest";
import Financial from "./pages/Financial";
import QuestionAnswer from "./pages/QuestionAnswer";
import DocsProjects from "./pages/Docs";
import ProgressWork from "./pages/ProgressWork";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/assistance" element={<Assistance />} />
        <Route path="/my_profile" element={<Profile />} />
        <Route path="/customer_service" element={<CustomerService />} />
        <Route path="/doc_request" element={<DocRequest />} />
        <Route path="/financial" element={<Financial />} />
        <Route path="/questions_answers" element={<QuestionAnswer />} />
        <Route path="/docs_manuals_porjects" element={<DocsProjects />} />
        <Route path="/progress_work" element={<ProgressWork/>}/>
      </Routes>
    </BrowserRouter>

  );
}
export default App;
