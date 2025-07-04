import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import ContactFormPage from './components/ContactFormPage';
import MyPage from './components/MyPage';
import ContactDetail from './components/ContactDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/mypage' element={<MyPage/>}/>
        <Route path='/contact' element={<ContactFormPage/>}/>
        <Route path="ContactDetail" element={<ContactDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
