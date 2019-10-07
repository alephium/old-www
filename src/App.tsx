import React from 'react';
import './App.css';

// Components
import Header from './components/header/Header';
import TitleSection from './sections/title/TitleSection';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
			<TitleSection />
    </div>
  );
}

export default App;
