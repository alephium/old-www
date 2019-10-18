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
			<label>{label}</label>
			<h1>{title}</h1>
		</div>
	);
}

export default SectionTitle;