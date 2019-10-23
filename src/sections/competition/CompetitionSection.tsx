import React from 'react';
import './CompetitionSection.scss';
import { SectionProps } from '../../App';
import { motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer'

import SectionTitle from '../../components/sectionTitle/SectionTitle';
import logoWhite from '../../images/logo-h--white.svg';

const tableContainerVariants = {
	hidden: {
		opacity: 0,
	},
  visible: {
		opacity: 1,
		transition: {
			when: "beforeChildren",
			staggerChildren: 0.2
		}
	}
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

const CompetitionSection: React.FC<SectionProps> = ({ sectionEl }) => {
	const [tableRef, inView] = useInView({
		rootMargin: '-150px 0px',
		triggerOnce: true
	})

	const controls = useAnimation()

	if (inView) {
		controls.start("visible")
	}

	return (
		<section className='CompetitionSection' ref={sectionEl} id="features">
			<SectionTitle title='Alephium features' label='COMPETITION VS.' light />

			<div className='CompetitionSection__table-wrapper'>
				<motion.div className='CompetitionSection__table' ref={tableRef} variants={tableContainerVariants} initial="hidden" animate={controls}>
					<div className='CompetitionSection__table__fixed'>
						<div className='column'>
							<div className='cell header'></div>
							<div className='cell header'>Performances</div>
							<div className='cell header'>Transaction Finality Time</div>
							<div className='cell header'>No Need For Beacon Chain</div>
							<div className='cell header'>Linear Scalability</div>
							<div className='cell header'>Attack Prevention</div>
						</div>
						<div className='column highlighted'>
							<div className='cell header'><img alt="Alephium Logo" src={logoWhite} className='CompetitionSection__table__logo'/></div>
							<div className='cell'>High (> 10'000 TPS)</div>
							<div className='cell'>Medium</div>
							<div className='cell'>Yes</div>
							<div className='cell'>High</div>
							<div className='cell'>Maximum (51% attack)</div>
						</div>
					</div>
					<div className='CompetitionSection__table__scrollable'>
						<motion.div key={1} className='column' variants={itemVariants}>
							<div className='cell header'>Harmony</div>
							<div className='cell'>Medium</div>
							<div className='cell'>Low</div>
							<div className='cell'>No</div>
							<div className='cell'>Medium</div>
							<div className='cell'>Medium</div>
						</motion.div>
						<motion.div key={2} className='column' variants={itemVariants}>
							<div className='cell header'>Zilliqa</div>
							<div className='cell'>Medium</div>
							<div className='cell'>Medium</div>
							<div className='cell'>No</div>
							<div className='cell'>Low</div>
							<div className='cell'>Medium</div>
						</motion.div>
						<motion.div key={3} className='column' variants={itemVariants}>
							<div className='cell header'>Ethereum 2.0</div>
							<div className='cell'>N/A</div>
							<div className='cell'>Medium</div>
							<div className='cell'>No</div>
							<div className='cell'>Medium</div>
							<div className='cell'>Medium</div>
						</motion.div>
						<motion.div key={4} className='column' variants={itemVariants}>
							<div className='cell header'>QuarkChain</div>
							<div className='cell'>High</div>
							<div className='cell'>Medium</div>
							<div className='cell'>No</div>
							<div className='cell'>High</div>
							<div className='cell'>Medium</div>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

export default CompetitionSection;