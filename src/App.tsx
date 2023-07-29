import { MainPage } from "./MainPage";
import Shop from "./containers/Counter/ContactsBlock";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ModalForm from "./containers/Modal/Modal";
const App = () => {
  return (

    <BrowserRouter>
      <MainPage />
      <Routes>
        <Route path="dishes" element={<Shop />} />
        <Route path="orders" element={<ModalForm />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
