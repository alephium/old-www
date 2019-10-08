import React from 'react';
import './Button.css';

type ButtonProps = {
	text: string
}

const Button: React.FC<ButtonProps> = ({ text }) => {
	return (
		<button className='Button'>
			<span>{text}</span>
		</button>
	);
}

export default Button;