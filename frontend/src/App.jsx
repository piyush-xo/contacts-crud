import "./App.css";
import Contacts from "./Contacts";
import CreateContact from "./CreateContact";
import UpdateContact from "./UpdateContact";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Contacts />}></Route>
        <Route path="/create" element={<CreateContact />}></Route>
        <Route path="/update/:id" element={<UpdateContact />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
