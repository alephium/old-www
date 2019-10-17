import React from 'react';
import './WhatIsSection.css';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import scalabilityIcon from '../../images/icons/scalability-icon.svg'
import decentralizationIcon from '../../images/icons/decentralization-icon.svg'
import pragmatismIcon from '../../images/icons/pragmatism-icon.svg'

const WhatIsSection: React.FC = () => {
	return (
		<section className='WhatIsSection'>
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
			<div className='WhatIsSection__selling-points'>
				<SellingPoint imagePath={scalabilityIcon} title='Scalability' desc='Innovative sharding algorithm supports cross-shard transactions natively for the first time'/>
				<SellingPoint imagePath={decentralizationIcon} title='Decentralization' desc='Platform runs in an open, permission-less network securely, like Bitcoin, only vulnerable to 51% attack'/>
				<SellingPoint imagePath={pragmatismIcon} title='Pragmatism' desc='Viable and efficient solutions for scaling smart contract and for confidential transactions'/>
			</div>
		</section>
	);
}

interface SellingPointProps {
	imagePath: string
	title: string
	desc: string
}

const SellingPoint: React.FC<SellingPointProps> = ({ imagePath, title, desc }) => {
	return (
		<div className='SellingPoint'>
			<div className='SellingPoint__image' style={{ backgroundImage: `url(${imagePath})` }}/>
			<div className='SellingPoint__title'>{title}</div>
			<div className='SellingPoint__desc'>{desc}</div>
		</div>
	)
}

export default WhatIsSection;