import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AnnouncementBar from './components/AnnouncementBar';
import HeroSlider from './components/HeroSlider';
import QuickAccess from './components/QuickAccess';
import ServicesSection from './components/ServicesSection';
import ContentSection from './components/ContentSection';
import StickySidebar from './components/StickySidebar';
import ProductCatalog from './pages/ProductCatalog';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-950 text-white overflow-x-hidden">
        <AnnouncementBar />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/kho-san-pham" element={<ProductCatalog />} />
        </Routes>
        <StickySidebar />
      </div>
    </Router>
  );
}

export default App;
