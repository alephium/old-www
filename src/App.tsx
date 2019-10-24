import React, { useState, useLayoutEffect } from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import './App.css';
import { useInView, InViewHookResponse } from 'react-intersection-observer'
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

export interface SectionProps {
	sectionEl: InViewHookResponse[0]
}

let previousActiveSectionIndex : number = 0;
const useInViewParams = {
	threshold: 0.5
}

// === App container

const App = () => {
	smoothscroll.polyfill()

	const [activeSectionIndex, setActiveSectionIndex] = useState(0)

	// Views
	const [IntroSectionRef, IntroInView] = useInView(useInViewParams)
	const [FeaturesSectionRef, FeaturesInView] = useInView(useInViewParams)
	const [FAQSectionRef, FAQInView] = useInView(useInViewParams)
	const [RoadmapSectionRef, RoadmapInView] = useInView(useInViewParams)
	const [TeamSectionRef, TeamInView] = useInView(useInViewParams)
	const [NewsSectionRef, NewsInView] = useInView(useInViewParams)
	const { width: windowWidth } = useWindowDimensions();

	useLayoutEffect(() => {
		let index : number = previousActiveSectionIndex

		if (IntroInView) {
			index = 0
		}
		if (FeaturesInView) {
			index = 1
		}
		if (FAQInView) {
			index = 2
		}
		if (RoadmapInView) {
			index = 3
		}
		if (TeamInView) {
			index = 4
		}
		if (NewsInView) {
			index = 5
		}

		if (activeSectionIndex !== index)
		{
			setActiveSectionIndex(index)
			previousActiveSectionIndex = index
		}
	}, [IntroInView, FeaturesInView, FAQInView, RoadmapInView, TeamInView, NewsInView, activeSectionIndex]);


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

  return (
		<React.StrictMode>
			<StateProvider initialState={initialState} reducer={reducer}>
				<div className="App">
					<Header />
					<FloatingMenu activeSectionIndex={activeSectionIndex} onMenuItemClick={scrollSectionIntoView} />
					<TitleSection />
					<WhatIsSection sectionEl={IntroSectionRef} />
					<TechnologyHeader />
					<CompetitionSection sectionEl={FeaturesSectionRef} />
					<FAQSection sectionEl={FAQSectionRef} />
					<RoadmapSection sectionEl={RoadmapSectionRef} />
					<TeamSection sectionEl={TeamSectionRef} />
					<NewsSection sectionEl={NewsSectionRef} />
				</div>
			</StateProvider>
		</React.StrictMode>
  );
}

export default App;
