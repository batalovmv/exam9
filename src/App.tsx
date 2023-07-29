import { MainPage } from "./MainPage";
import Shop from "./containers/ContactsBlock/ContactsBlock";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EditPage from "./containers/Modal/EditPage";
const App = () => {
  return (

    <BrowserRouter>
      <MainPage />
      <Routes>
        <Route path="dishes" element={<Shop />} />
        <Route path="orders" element={<EditPage />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
