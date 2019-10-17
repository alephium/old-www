import React from 'react';
import './SectionTitle.css';

interface SectionTitleProps {
	label: string
	title: string
}


const SectionTitle: React.FC<SectionTitleProps> = ({label, title}) => {
	return (
		<div className='SectionTitle'>
			<label>{label}</label>
			<h1>{title}</h1>
		</div>
	);
}

export default SectionTitle;