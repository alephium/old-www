import React, { ReactNode } from 'react';
import './TeamSection.scss';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import cheng from '../../images/team/cheng.jpeg'
import alois from '../../images/team/alois.jpeg'
import yan from '../../images/team/yan.jpeg'
import peng from '../../images/team/peng.jpeg'
import tianfang from '../../images/team/tianfang.jpeg'
import casey from '../../images/team/casey.png'
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
						desc={<span>Proposed the <a href="https://infoscience.epfl.ch/record/210619/files/main.pdf">first linear time asynchronous Byzantine agreement algorithm.</a></span>}
					/>
					<TeamMember
						pictureUrl={alois}
						name='Alois Cochard'
						role='Co-founder, CTO'
						desc='Former CTO of Bestmile SA. Functional hacker.'
					/>
					<TeamMember
						pictureUrl={yan}
						name='Eric Zhou'
						role='Co-founder'
						desc='Co-Founder & Former COO of FClassroom'
					/>
					<TeamMember
						pictureUrl={peng}
						name='Peng Cui'
						role='Marketing & Operations'
						desc='Fund Manager at Cybernaut (China) Investment'
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
							pictureUrl={johannes}
							name='Johannes Schweifer'
							role='Founder, R&D'
							desc='Co-Founder of Bitcoin Suisse AG'
						/>
						<TeamMember
							pictureUrl={pengL}
							name='Peng Liu'
							role='IFlyTek Vice President'
							desc='Computational Advertising Expert'
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