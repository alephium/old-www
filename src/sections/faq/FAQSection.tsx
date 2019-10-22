import React from 'react';
import './FAQSection.scss';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import { SectionProps } from '../../App';

const FAQSection : React.FC<SectionProps> = ({sectionEl}) => {
	return (
		<section className='FAQSection' ref={sectionEl} id="faq">
			<SectionTitle title='FAQ' label='KNOW EVERYTHING' light />
			<div className='FAQSection__content_wrapper'>
				<div className='FAQSection__content'>
					<div className='FAQSection__boxes'>
						<div className='FAQSection__box'>
							<div className='FAQSection__box__qa'>
								<h1>"How is Alephium different from the other sharding projects?"</h1>
								<p><b>Alephium is simple, efficient, secure and practical compared to other sharding projects. </b>
									Its core sharding algorithm BlockFlow has the <b>same minimal network assumptions as Bitcoin. </b>
									The user experience of Alephium would be the same as single blockchain, thanks to its native cross-shard transactions.
									Alephium is a permissionless decentralized platform, everyone could contribute to the consensus of its network.
								<mark>The elegant design of BlockFlow enables us to implement Alephium much quicker than other projects.</mark>
								</p>
							</div>
						</div>
						<div className='FAQSection__box'>
							<div className='FAQSection__box__qa'>
								<h1>"How does Alephium support DApps?"</h1>
								<p>Alephium’s efficient and practical approach to DApps is to combine our <b>token protocol, data protocol, and smart contracts. </b>
									Token protocol and data protocol are naturally scaled to all shards.
									We support smart contracts in some of the shards called intra-group shards.
									<mark>DApps could benefit very much from our native cross-shard transactions without sacrificing the power of smart contracts.</mark>
								</p>
							</div>
						</div>
					</div>
					<div className='FAQSection__boxes'>
						<div className='FAQSection__box'>
							<div className='FAQSection__box__qa'>
								<h1>"What is the consensus algorithm used in Alephium?"</h1>
								<p>Alephium’s consensus is one of the core parts of its BlockFlow algorithm.
									<b> BlockFlow exploits a DAG data structure</b> to resolve its shard dependencies and then uses a finality algorithm to achieve consensus for all shards.
									<mark>The finality algorithm could be PoW, PoS or any other finality algorithm.</mark> Alephium adopts PoW for the moment as it’s decentralized and secure and has been tested by time with Bitcoin.
								</p>
							</div>
						</div>
						<div className='FAQSection__box'>
							<div className='FAQSection__box__qa'>
								<h1>"How to solve the single-shard takeover attack?"</h1>
								<p>BlockFlow exploits a DAG data structure to resolve its shard dependencies.
										<b>As a result, mining works from all shards are accumulated into every new block. </b>
									If an attacker wants to reorg a block in one shard, he must attack the blocks on the other shards that depend on this block.
										<mark>Therefore, Alephium is only vulnerable to 51% attacks.</mark>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='FAQSection__background'>
				<div className='FAQSection__background__image' />
			</div>
		</section>
	)
}

export default FAQSection;