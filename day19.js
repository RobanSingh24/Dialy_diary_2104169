// src/App.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header />
      <p>This is the content of the app.</p>
      <Footer />
    </div>
  );
}

export default App;

// src/Header.js
import React from 'react';

function Header() {
  return (
    <header>
      <h1>Welcome to My React App</h1>
    </header>
  );
}

export default Header;

// src/Footer.js
import React from 'react';

function Footer() {
  return (
    <footer>
      <p>&copy; 2024 My React App</p>
    </footer>
  );
}

export default Footer;
