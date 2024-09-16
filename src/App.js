import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer, Navbar } from './components';
import Feature from './pages/HomeFeature/Feature';
import Pricing from './pages/Pricing/Pricing';
import Blog from './pages/Blog/Blog';
import FAQs from './pages/FAQs/FAQs';



function App() {
  return (  
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path='/feature' exact element={<Feature />} />
      </Routes>

      <Routes>
        <Route path='/pricing' exact element={<Pricing />} />
      </Routes>

      <Routes>
        <Route path='/blog' exact element={<Blog />} />
      </Routes>

      <Routes>
        <Route path='/faqs' exact element={<FAQs />} />
      </Routes>

      <Footer/>
    </Router>
  );
}

export default App;
