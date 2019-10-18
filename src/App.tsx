import React from 'react';
import './App.css';

// Components
import Header from './components/header/Header';
import TitleSection from './sections/title/TitleSection';
import WhatIsSection from './sections/whatIs/WhatIsSection';
import FloatingMenu from './components/floatingMenu/FloatingMenu';
import TechnologyHeader from './sections/technologyHeader/TechnologyHeader';
import CompetitionSection from './sections/competition/CompetitionSection';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
			<FloatingMenu />
			<TitleSection />
			<WhatIsSection />
			<TechnologyHeader />
			<CompetitionSection />
    </div>
  );
}

export default App;
