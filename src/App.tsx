import { MainPage } from "./MainPage";
import Shop from "./containers/Counter/ContactsBlock";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const App = () => {
  return (

    <BrowserRouter>
      <MainPage />
      <Routes>
        <Route path="dishes" element={<Shop />} />
        <Route path="orders" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
