import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './dashboard/Header'
import Content from './dashboard/Content'
import Download from './dashboard/Download'
import Enjoy from './dashboard/Enjoy';
import Footer from './dashboard/Footer';
import Questions from './dashboard/Questions';
import './styles/css/style.css'
import Reason from './dashboard/Reasons';
import CarouselDashboard from './dashboard/Carousel';
import LogIn from './components/LogIn';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<>
          <Header />
          <CarouselDashboard />
          <Reason />
          <Content />
          <Download />
          <Enjoy />
          <Questions />
          <Footer />
        </>} />
        <Route path='/login' element={<LogIn />} />
      </Routes>
    </Router>
  );
}

export default App
