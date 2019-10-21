import React from 'react';
import './SectionTitle.css';

interface SectionTitleProps {
	label: string
	title: string
	light?: boolean
}


const SectionTitle: React.FC<SectionTitleProps> = ({label, title, light}) => {
	return (
		<div className={`SectionTitle ${light ? 'light' : ''}`}>
			<div className='SectionTitle__content'>
				<label>{label}</label>
				<h1>{title}</h1>
			</div>
		</div>
	);
}

export default SectionTitle;