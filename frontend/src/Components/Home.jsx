import React from 'react';
import Header from '../Section/Header';
import Content from '../Section/Content';
import Footer from '../Section/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/path/to/your/image.jpg')" }}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
