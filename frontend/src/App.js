import React from 'react';
import Header from './components/header.jsx';
import Navbar from './components/navbar.jsx';
import Home from './components/home.jsx';
import Footer from './components/footer.jsx';

function App() {
  return (
    <div className="App">
      {/* Header Component */}
      <Header />
      
      {/* Navbar Component */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Home />
      </main>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}

export default App;
