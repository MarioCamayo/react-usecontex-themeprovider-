import React, { useState } from 'react';
import ThemeContainer from './components/ThemeContainer';
import ThemeTitle from './components/ThemeTitle';
import ThemeToggleButton from './components/ThemeToggleButton';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <ThemeContainer isDarkMode={isDarkMode}>
        <ThemeTitle isDarkMode={isDarkMode} />
        <ThemeToggleButton isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <p style={{ marginTop: '1rem' }}>
          Haz clic en el botón para cambiar el tema.
        </p>
      </ThemeContainer>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
