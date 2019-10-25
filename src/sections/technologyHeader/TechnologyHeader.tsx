import React from 'react';
import './TechnologyHeader.css';
import ParallaxWrapper from '../../components/parallaxWrapper/ParallaxWrapper';

const TechnologyHeader: React.FC = () => {
	return (
		<header className='TechnologyHeader'>
			<div className='TechnologyHeader__title__container'>
				<div className="TechnologyHeader__title__mask" />
				<div className='TechnologyHeader__title__background__wrapper'>
					<ParallaxWrapper className='TechnologyHeader__title__background' movingSpeed={-0.5}/>
				</div>
			</div>
		</header>
	);
}

export default TechnologyHeader;