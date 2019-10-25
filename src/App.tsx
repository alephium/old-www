import React, { useState, useCallback } from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import './App.css';
import InView from 'react-intersection-observer'
import { StateProvider, initialState, reducer } from './store/state';

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
import useWindowDimensions from './hooks/windowsDimensions';
import FooterSection from './sections/footer/FooterSection';


// === App container

const App = () => {
	smoothscroll.polyfill()

	const [activeSectionIndex, setActiveSectionIndex] = useState()

	// Views
	const { width: windowWidth } = useWindowDimensions();


	// On menu click, scroll to element
	// Make sure to use the correct idea in corresponding sections elements

	const scrollSectionIntoView = (index: number) => {

		let elementIdToScrollTo: string = "";

		switch(index) {
			case 0:
				elementIdToScrollTo = "intro"
				break;
			case 1:
				elementIdToScrollTo = "features"
				break;
			case 2:
				elementIdToScrollTo = "faq"
				break;
			case 3:
				elementIdToScrollTo = "roadmap"
				break;
			case 4:
				elementIdToScrollTo = "team"
				break;
			case 5:
				elementIdToScrollTo = "news"
				break;
			default:
				elementIdToScrollTo = ""
		}

		const element = document.getElementById(elementIdToScrollTo)
		if (element !== null)
		{
			if (windowWidth > 800) {
				element.scrollIntoView({ behavior: "smooth", block: "center" })
			} else {
				element.scrollIntoView({ behavior: "smooth", block: "start" })
			}
		}
	}

	const onSectionActive = useCallback((sectionIndex: number) => {
		if (activeSectionIndex !== sectionIndex)
		{
			setActiveSectionIndex(sectionIndex)
		}
	}, [activeSectionIndex])

  return (
		<React.StrictMode>
			<StateProvider initialState={initialState} reducer={reducer}>
				<div className="App">
					<Header />
					<FloatingMenu activeSectionIndex={activeSectionIndex} onMenuItemClick={scrollSectionIntoView} />
					<TitleSection />
					<MemoizedWatchedSection index={0} SectionNode={WhatIsSection} handleSectionInView={onSectionActive}/>
					<TechnologyHeader />
					<MemoizedWatchedSection index={1} SectionNode={CompetitionSection} handleSectionInView={onSectionActive}/>
					<MemoizedWatchedSection index={2} SectionNode={FAQSection} handleSectionInView={onSectionActive}/>
					<MemoizedWatchedSection index={3} SectionNode={RoadmapSection} handleSectionInView={onSectionActive}/>
					<MemoizedWatchedSection index={4} SectionNode={TeamSection} handleSectionInView={onSectionActive}/>
					<MemoizedWatchedSection index={5} SectionNode={NewsSection} handleSectionInView={onSectionActive}/>
					<FooterSection />
				</div>
			</StateProvider>
		</React.StrictMode>
  );
}

interface WatchedSectionProps {
	index: number
	handleSectionInView: (sectionIndex: number) => void
	SectionNode: React.FC
}

const WatchedSection: React.FC<WatchedSectionProps> = ({ index, handleSectionInView, SectionNode }) => {
	return (
		<InView className="Section__wrapper" onChange={(inView) => inView ? handleSectionInView(index) : null} threshold={0.5}>
			<SectionNode />
		</InView>
	)
}

const MemoizedWatchedSection = React.memo(WatchedSection)

export default App;
