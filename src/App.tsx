import React from 'react';
import './App.css';

// Components
import Header from './components/header/Header';
import TitleSection from './sections/title/TitleSection';
import WhatIsSection from './sections/whatIs/WhatIsSection';
import FloatingMenu from './components/floatingMenu/FloatingMenu';
import TechnologyHeader from './sections/technologyHeader/TechnologyHeader';
import CompetitionSection from './sections/competition/CompetitionSection';
import FAQSection from './sections/faq/FAQSection';
import RoadmapSection from './sections/roadmap/RoadmapSection';
import TeamSection from './sections/team/TeamSection';
import NewsSection from './sections/news/NewsSection';

const App: React.FC = () => {
  return (
		<React.StrictMode>
			<div className="App">
				<Header />
				<FloatingMenu />
				<TitleSection />
				<WhatIsSection />
				<TechnologyHeader />
				<CompetitionSection />
				<FAQSection />
				<RoadmapSection />
				<TeamSection />
				<NewsSection />
			</div>
		</React.StrictMode>
  );
}

export default App;
