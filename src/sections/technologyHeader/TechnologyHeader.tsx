import React from 'react';
import './TechnologyHeader.css';

const TechnologyHeader: React.FC = () => {
	return (
		<header className='TechnologyHeader'>
			<div className='TechnologyHeader__title__container'>
				<div className="TechnologyHeader__title__mask" />
				<div className='TechnologyHeader__title__background' />
			</div>
		</header>
	);
}

export default TechnologyHeader;