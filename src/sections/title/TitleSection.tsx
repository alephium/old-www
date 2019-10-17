import React from 'react';
import './TitleSection.css';

const TitleSection: React.FC = () => {
	return (
		<section className='TitleSection'>
			<div className='TitleSection__Splash-Container'>
				<div className='TitleSection__Splash'>
					<div className='TitleSection__BlockFlow'>
						<span className='TitleSection__BlockFlow__title'>BlockFlow</span>
						<span className='TitleSection__BlockFlow__sub-title'>consensus and sclable protocol</span>
						<div className='TitleSection__BlockFlow__box'>for massive adoption</div>
					</div>
					<div className='TitleSection__Splash__background-image' />
				</div>
			</div>
		</section>
	);
}

export default TitleSection;