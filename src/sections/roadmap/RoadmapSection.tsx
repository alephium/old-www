import React from 'react'
import './RoadmapSection.scss'
import SectionTitle from '../../components/sectionTitle/SectionTitle'
import { useInView } from 'react-intersection-observer'
import { useAnimation, motion } from 'framer-motion'

enum Side {
	left = 1,
	right = 2,
}

const RoadmapSection = () => {
	return (
		<section className='RoadmapSection' id="roadmap">
			<SectionTitle title='Roadmap' label="WHAT'S UP AHEAD" light />
			<div className='Roadmap__container'>
				<div className='Roadmap__line' />
				<div className='Roadmap'>
					<RoadmapStep
						side={Side.left}
						stepNumber={1}
						title='2018 Q2 - Q4'
						done
					>
						The Alpha version including the core BlockFlow algorithm was implemented. <a href='https://www.youtube.com/watch?v=lasTOXkMr1k'>Alpha version tested on AWS achieving > 10K TPS</a>
					</RoadmapStep>
					<RoadmapStep
						side={Side.right}
						stepNumber={2}
						done
						title='2019 Q1 - Q3'
					>
						Alephium's testnet 1.0 will be released with beta applications for participants.
					</RoadmapStep>
					<RoadmapStep
						side={Side.left}
						stepNumber={3}
						title='2019 Q4 - 2020 Q1'
					>
						The testnet would be further enhanced with performance, security, and protocol improments.
					</RoadmapStep>
					<RoadmapStep
						side={Side.right}
						stepNumber={4}
						title='After Pre-A Funding'
						highlight
					>
						The initial <mark>main net</mark> will be released.
					</RoadmapStep>
				</div>
			</div>
		</section>
	)
}

interface RoadmapStepProps {
	side: Side
	stepNumber: number
	title: string
	done?: boolean
	highlight?: boolean
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

const RoadmapStep: React.FC<RoadmapStepProps> = ({ side, stepNumber, title, done, highlight, children }) => {
	const [stepRef, inView] = useInView({
		rootMargin: '-200px 0px',
		triggerOnce: true
	})

	const controls = useAnimation()

	if (inView) {
		controls.start("visible")
	}

	return (
		<motion.div className={`RoadmapStep ${Side[side]}`} ref={stepRef} variants={itemVariants} initial="hidden" animate={controls}>
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
		</motion.div>
	)
}

export default RoadmapSection