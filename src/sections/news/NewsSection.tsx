import React, { ReactNode } from 'react';
import { SectionProps } from '../../App';
import './NewsSection.scss';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import edcon from '../../images/news/edcon.jpg'
import yahoo from '../../images/news/yahoo.jpg'
import ethCC from '../../images/news/ethcc.jpg'
import { useInView } from 'react-intersection-observer';
import { useAnimation, motion } from 'framer-motion';


const NewsSection: React.FC<SectionProps> = ({ sectionEl }) => {
	return (
		<section className='NewsSection' ref={sectionEl} id="news">
			<SectionTitle title='News' label='MOVING FAST' />
			<div className='NewsSection__container'>
				<div className='NewsSection__news-items'>
					<NewsItem pictureUrl={edcon} title="Alephium @ EDCon 2019" desc="Presenting Alephium's innovative algorithm at EDCon 2019 in Sydney. Checkout our talk." link="https://www.youtube.com/watch?v=-tCB9sOT_UI"/>
					<NewsItem pictureUrl={yahoo} title="Featuring in Yahoo Finance" desc="Alephium Pushes the Boundaries of Blockchain Performance & Scalability. Checkout the post." link="https://finance.yahoo.com/news/alephium-pushes-boundaries-blockchain-performance-032500721.html"/>
					<NewsItem pictureUrl={ethCC} title="Alephium @ EthCC lightning session" desc="Presenting Alephium's innovative algorithm at Ethcc lightning session. Checkout the event." link="https://www.youtube.com/watch?v=bJgqaOkDs9Q&t=150s"/>
				</div>
			</div>
		</section>
	)
}

interface NewsItemProps {
	pictureUrl: string
	title: string
	desc: ReactNode
	link: string
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

const NewsItem: React.FC<NewsItemProps> = ({ pictureUrl, title, desc, link }) => {
	const [newsRef, inView] = useInView({
		rootMargin: '-200px 0px',
		triggerOnce: true
	})

	const controls = useAnimation()

	if (inView) {
		controls.start("visible")
	}

	return (
		<motion.a className='NewsItem' href={link} ref={newsRef} variants={itemVariants} initial="hidden" animate={controls}>
			<div className='NewsItem__content'>
				<div className='picture__container'>
					<div className='picture' style={{ backgroundImage: `url(${pictureUrl})`}} />
				</div>
				<div className='text__container'>
					<h2 className='name'>{title}</h2>
					<div className='desc'>{desc}</div>
				</div>
			</div>
		</motion.a>
	)
}

export default NewsSection