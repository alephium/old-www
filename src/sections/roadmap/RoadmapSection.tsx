import React from 'react';
import './RoadmapSection.scss';
import SectionTitle from '../../components/sectionTitle/SectionTitle';

const RoadmapSection: React.FC = () => {
	return (
		<div className='RoadmapSection'>
			<SectionTitle title='Roadmap' label="WHAT'S UP AHEAD " light />
		</div>
	)
}

export default RoadmapSection;