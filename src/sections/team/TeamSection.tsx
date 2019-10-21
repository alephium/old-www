import React from 'react';
import './TeamSection.scss';
import SectionTitle from '../../components/sectionTitle/SectionTitle';

const TeamSection: React.FC = () => {
	return (
		<section className='TeamSection'>
			<SectionTitle title='Team' label='OUR TALENTED' />
		</section>
	)
}

export default TeamSection