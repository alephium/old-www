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
							Scalability and DeFi security are two well-known challenges in the current crypto space.
							Alephium is a novel sharded blockchain resolving these two issues empowered by BlockFlow algorithm and stateful UTXO model.
						</p>
						<p>
							The platform is built on sound innovations to combine and improve
							the mature ideas that have been tested on Bitcoin and Ethereum.
							The team focuses on the delivery of a secure, scalable, and open financial platform that will work for today.
						</p>
					</div>
				</div>
			</div>
			<div className='WhatIsSection__selling-points__container' ref={sellingPointsContainerRef}>
				<motion.div className='WhatIsSection__selling-points' variants={containerVariants} initial="hidden" animate={controls}>
					<SellingPoint key={1} imagePath={scalabilityIcon} title='Scalability' desc='Innovative sharding algorithm supports single-step xshard transactions for the first time' isMobile={isMobile}/>
					<SellingPoint key={2} imagePath={decentralizationIcon} title='DeFi Security' desc='Tokens are first-class citizen and contracts are safer due to new transaction model and virtual machine' isMobile={isMobile}/>
					<SellingPoint key={3} imagePath={pragmatismIcon} title='Pragmatism' desc='Innovation based on the mature and battle-tested ideas from Bitcoin and Ethereum' isMobile={isMobile}/>
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