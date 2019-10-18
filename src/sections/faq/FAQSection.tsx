import React from 'react';
import './FAQSection.scss';
import SectionTitle from '../../components/sectionTitle/SectionTitle';

const FAQSection: React.FC = () => {
	return (
		<section className='FAQSection'>
			<SectionTitle title='FAQ' label='KNOW EVERYTHING' light />
		</section>
	)
}

export default FAQSection;