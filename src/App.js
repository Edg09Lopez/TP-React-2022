import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Address from './Pages/Address';
import ErrorPage from './Pages/ErrorPage';

function App() {
  return (
    <div className="App">
      <>
        <Header />
        <Routes>
          <Route path='/' element={<Address />} />
          <Route path='/Buscador' element={<Address />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
