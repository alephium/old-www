import React from 'react'
import './RoadmapSection.scss'
import SectionTitle from '../../components/sectionTitle/SectionTitle'

const RoadmapSection: React.FC = () => {
	return (
		<section className='RoadmapSection'>
			<SectionTitle title='Roadmap' label="WHAT'S UP AHEAD" light />
			<div className='Roadmap__container'>
				<div className='Roadmap__line' />
				<div className='Roadmap'>
					<RoadmapStep 
						side={Side.left}
						stepNumber={1}
						title='2018 Q2 - Q4 '
						text='The Alpha version including the core BlockFlow algorithm was implemented. Alpha version tested on AWS achieving > 10K TPS'
					/>
				</div>
			</div>
		</section>
	)
}

enum Side {
	left = 1,
	right = 2,
}

interface RoadmapStepProps {
	side: Side
	stepNumber: number
	title: string
	text: string
	done?: boolean
	highlight?: boolean
}

const RoadmapStep: React.FC<RoadmapStepProps> = ({ side, stepNumber, title, text, done, highlight}) => {
	return (
		<div className={`RoadmapStep ${side.toString}`}>
			<div className='box'>
				<h1 className='title'>{title}</h1>
				<p className='text'>{text}</p>
			</div>
			<div className='link'/>
			<div className='number-box'>
				<div className='number'>{stepNumber}</div>
				<div className={`notification-bubble ${done ? 'done' : ''} ${highlight ? 'highlight' : ''}`} />
			</div>
		</div>
	)
}

export default RoadmapSection