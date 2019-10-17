import React from 'react';
import './WhatIsSection.css';
import SectionTitle from '../../components/sectionTitle/SectionTitle';

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
		</section>
	);
}

export default WhatIsSection;