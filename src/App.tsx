import Header from './dashboard/Header'
import Content from './dashboard/Content'
import Download from './dashboard/Download'
import Enjoy from './dashboard/Enjoy';
import Footer from './dashboard/Footer';
import Questions from './dashboard/Questions';
import './styles/css/style.css'
import Reason from './dashboard/Reasons';
import CarouselDashboard from './dashboard/Carousel';
function App() {
  return (
    <>
      <Header />
      <CarouselDashboard />
      <Reason/>
      <Content />
      <Download />
      <Enjoy />
      <Questions />
      <Footer />
    </>
  );
}

export default App
