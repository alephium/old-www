import React, { ReactNode } from 'react';
import './TeamSection.scss';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import cheng from '../../images/team/cheng.jpeg'
import alois from '../../images/team/alois.jpeg'
import polto from '../../images/team/polto.png'
import droxler from '../../images/team/droxler.jpeg'
import mika from '../../images/team/mika.jpeg'
import yan from '../../images/team/yan.jpeg'
import tianfang from '../../images/team/tianfang.jpeg'
import casey from '../../images/team/casey.png'
import yessin from '../../images/team/yessin.jpeg'
import johannes from '../../images/team/johannes.png'
import pengL from '../../images/team/peng.png'
import { useInView } from 'react-intersection-observer';
import { useAnimation, motion } from 'framer-motion';
import ParallaxWrapper from '../../components/parallaxWrapper/ParallaxWrapper';


const TeamSection = () => {
	return (
		<section className='TeamSection' id="team">
			<ParallaxWrapper className='TeamSection__background' movingSpeed={0.2}/>
			<SectionTitle title='Team' label='OUR TALENTED' />
			<div className='TeamSection__container'>
				<div className='TeamSection__team-members member-grid'>
					<TeamMember
						pictureUrl={cheng}
						name='Cheng Wang'
						role='Founder, R&D'
						desc={<span>Proposed the <a href="https://infoscience.epfl.ch/record/210619/files/main.pdf">first linear time asynchronous Byzantine agreement algorithm</a></span>}
					/>
					<TeamMember
						pictureUrl={alois}
						name='Aloïs Cochard'
						role='Co-founder, CTO'
						desc='Former CTO of Bestmile SA. Functional hacker'
					/>
					<TeamMember
						pictureUrl={droxler}
						name='Thomas Droxler'
						role='Senior Software Engineer'
						desc='Senior backend engineer of Bestmile'
					/>
					<TeamMember
						pictureUrl={polto}
						name='Alexandre Poltorak'
						role='Strategy & Community'
						desc='Key account manager of Bity. Open source practitioner'
					/>
					<TeamMember
						pictureUrl={mika}
						name='Mikaël Vaivre'
						role='Product'
						desc='Former head of product for Lykke corp, a Swiss quality crypto exchange'
					/>
					</div>
				<div className='TeamSection__team-members member-grid'>
					<TeamMember
						pictureUrl={pengL}
						name='Peng Liu'
						role='Research & Marketing'
						desc='iFlytek Vice President; Computational Advertising Expert'
					/>
					<TeamMember
						pictureUrl={tianfang}
						name='Frederic Peng'
						role='Marketing & Operations'
						desc='Vice-president of Blockchain Association of Tsinghua Students'
					/>
					</div>
					<div className='TeamSection__teams-separator'>
						<h1 className='team-title'>Advisors</h1>
					</div>
					<div className='TeamSection__advisors member-grid'>
						<TeamMember
							pictureUrl={casey}
							name='Casey Detrio'
							role='Ethereum Core Developer'
							desc={<span>Eth 1.x <a href="https://ethereum-magicians.org/t/ethereum-1-dot-x-a-half-baked-roadmap-for-mainnet-improvements">roadmap</a><br/>Eth 2 <a href="https://ethresear.ch/t/phase-one-and-done-eth2-as-a-data-availability-engine/5269">"Phase one and done"</a></span>}
						/>
						<TeamMember
							pictureUrl={yessin}
							name='yessin schiegg'
							role='Crypto Advisor'
							desc='Advisor of Ethereum, Web3, Near'
						/>
						<TeamMember
							pictureUrl={yan}
							name='Eric Zhou'
							role='Co-founder'
							desc='Co-Founder & Former COO of FClassroom'
						/>
					</div>
			</div>
		</section>
	)
}

interface TeamMemberProps {
	pictureUrl: string
	name: string
	role: string
	desc: ReactNode
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

const TeamMember: React.FC<TeamMemberProps> = ({ pictureUrl, name, role, desc }) => {
	const [personRef, inView] = useInView({
		rootMargin: '-200px 0px',
		triggerOnce: true
	})

	const controls = useAnimation()

	if (inView) {
		controls.start("visible")
	}

	return (
		<motion.div className='TeamMember' ref={personRef} variants={itemVariants} initial="hidden" animate={controls}>
			<div className='picture__container'>
				<div className='picture' style={{ backgroundImage: `url(${pictureUrl})`}} />
			</div>
			<h2 className='name'>{name}</h2>
			<h3 className='role'>{role}</h3>
			<div className='desc'>{desc}</div>
		</motion.div>
	)
}

export default TeamSection
