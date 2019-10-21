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
						done
					>
						The Alpha version including the core BlockFlow algorithm was implemented. Alpha version tested on AWS achieving > 10K TPS
					</RoadmapStep>
					<RoadmapStep 
						side={Side.right}
						stepNumber={2}
						title='2018 Q2 - Q4 '
						done
					>
						Alephium's testnet 1.0 will be released with beta applications for participants.
					</RoadmapStep>
					<RoadmapStep 
						side={Side.left}
						stepNumber={3}
						title='2018 Q2 - Q4 '
					>
						The testnet would be further enhanced with performance, security, and protocol improments.
					</RoadmapStep>
					<RoadmapStep 
						side={Side.right}
						stepNumber={4}
						title='After Pre-A Funding '
						highlight
					>
						The initial <mark>main net</mark> will be released.
					</RoadmapStep>
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
	done?: boolean
	highlight?: boolean
}

const RoadmapStep: React.FC<RoadmapStepProps> = ({ side, stepNumber, title, done, highlight, children }) => {
	return (
		<div className={`RoadmapStep ${Side[side]}`}>
			<div className='content'>
				<div className='box'>
					<h1 className='title'>{title}</h1>
					<p className='text'>{children}</p>
				</div>
				<div className='link'/>
				<div className='number-box'>
					<div className='number'>{stepNumber}</div>
					<div className={`notification-bubble ${done ? 'done' : ''} ${highlight ? 'highlight' : ''}`}>
						<div className='notification-bubble__icon' />
					</div>
				</div>
			</div>
			<div className='free-space' />
		</div>
	)
}

export default RoadmapSection