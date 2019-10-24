import React from 'react';
import './WhatIsSection.css';
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer'

import SectionTitle from '../../components/sectionTitle/SectionTitle';
import scalabilityIcon from '../../images/icons/scalability-icon.svg'
import decentralizationIcon from '../../images/icons/decentralization-icon.svg'
import pragmatismIcon from '../../images/icons/pragmatism-icon.svg'
import useWindowDimensions from '../../hooks/windowsDimensions';

const containerVariants = {
	hidden: {
		opacity: 0,
	},
  visible: {
		opacity: 1,
		transition: {
			when: "beforeChildren",
			staggerChildren: 0.2
		}
	},
	mobile: {
		opacity: 1
	}
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const WhatIsSection = () => {

	const [sellingPointsContainerRef, inView] = useInView({
		rootMargin: '-250px 0px',
		triggerOnce: true
	})

	const { width: windowWidth } = useWindowDimensions();

	const isMobile = windowWidth < 800

	const controls = useAnimation()

	if (inView) {
		controls.start(isMobile ? "mobile" : "visible")
	}

	return (
		<section className='WhatIsSection' id="intro">
			<div className='WhatIsSection__description-container'>
				<SectionTitle label='WHAT IS' title='Alephium?' />
				<div className='WhatIsSection__content'>
					<div className='WhatIsSection__content__logo' />
					<div className='WhatIsSection__content__text'>
						<p>
							Alephium is a high-throughput public blockchain platform that could scale
							to <mark>ten thousands of transactions per second</mark> without sacrificing decentralization and security.
						</p>
						<p>
							The platform is built on its innovative sharding algorithm called <b>BlockFlow</b>.
							BlockFlow exploits a scalable UTXO model, combining DAG and sharding, to be <b>the first sharding algorithm supporting cross-shard transactions natively</b>. Alephium also designs a practical and scalable solution for decentralized applications.
						</p>
					</div>
				</div>
			</div>
			<div className='WhatIsSection__selling-points__container' ref={sellingPointsContainerRef}>
				<motion.div className='WhatIsSection__selling-points' variants={containerVariants} initial="hidden" animate={controls}>
					<SellingPoint key={1} imagePath={scalabilityIcon} title='Scalability' desc='Innovative sharding algorithm supports cross-shard transactions natively for the first time' isMobile={isMobile}/>
					<SellingPoint key={2} imagePath={decentralizationIcon} title='Decentralization' desc='Platform runs in an open, permission-less network securely, like Bitcoin, only vulnerable to 51% attack' isMobile={isMobile}/>
					<SellingPoint key={3} imagePath={pragmatismIcon} title='Pragmatism' desc='Viable and efficient solutions for scaling smart contract and for confidential transactions' isMobile={isMobile}/>
				</motion.div>
			</div>
		</section>
	);
}

interface SellingPointProps {
	imagePath: string
	title: string
	desc: string
	isMobile: boolean
}


const SellingPoint: React.FC<SellingPointProps> = ({ imagePath, title, desc, isMobile }) => {

	const [sellingPointRef, inView] = useInView({
		rootMargin: '-200px 0px',
		triggerOnce: true
	})

	const controls = useAnimation()

	if (inView) {
		controls.start("visible")
	}

	return (
		<motion.div ref={sellingPointRef} className='SellingPoint' variants={itemVariants} animate={isMobile ? controls : undefined} whileHover={{ y: -3, boxShadow: '0 15px 25px rgba(0, 0, 0, 0.08)' }} transition={{ ease: "easeOut", duration: .2 }}>
			<div className='SellingPoint__image' style={{ backgroundImage: `url(${imagePath})` }}/>
			<div className='SellingPoint__title'>{title}</div>
			<div className='SellingPoint__desc'>{desc}</div>
		</motion.div>
	)
}

export default WhatIsSection;