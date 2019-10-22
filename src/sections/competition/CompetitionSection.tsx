import React from 'react';
import './CompetitionSection.scss';
import { SectionProps } from '../../App';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import logoWhite from '../../images/logo-h--white.svg';

const CompetitionSection: React.FC<SectionProps> = ({ sectionEl }) => {
	return (
		<section className='CompetitionSection' ref={sectionEl} id="features">
			<SectionTitle title='Alephium features' label='COMPETITION VS.' light />

			<div className='CompetitionSection__table-wrapper'>
				<div className='CompetitionSection__table'>
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
						<div className='column'>
							<div className='cell header'>Harmony</div>
							<div className='cell'>Medium</div>
							<div className='cell'>Low</div>
							<div className='cell'>No</div>
							<div className='cell'>Medium</div>
							<div className='cell'>Medium</div>
						</div>
						<div className='column'>
							<div className='cell header'>Zilliqa</div>
							<div className='cell'>Medium</div>
							<div className='cell'>Medium</div>
							<div className='cell'>No</div>
							<div className='cell'>Low</div>
							<div className='cell'>Medium</div>
						</div>
						<div className='column'>
							<div className='cell header'>Ethereum 2.0</div>
							<div className='cell'>N/A</div>
							<div className='cell'>Medium</div>
							<div className='cell'>No</div>
							<div className='cell'>Medium</div>
							<div className='cell'>Medium</div>
						</div>
						<div className='column'>
							<div className='cell header'>QuarkChain</div>
							<div className='cell'>High</div>
							<div className='cell'>Medium</div>
							<div className='cell'>No</div>
							<div className='cell'>High</div>
							<div className='cell'>Medium</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default CompetitionSection;