import React from 'react';
import './CompetitionSection.css';
import SectionTitle from '../../components/sectionTitle/SectionTitle';
import logoWhite from '../../images/logo-h--white.svg';

const CompetitionSection: React.FC = () => {
	return (
		<section className='CompetitionSection'>
			<SectionTitle title='Alephium features' label='COMPETITION VS.' light />

			<div className='CompetitionSection__table-wrapper'>
				<table className='CompetitionSection__table'>
					<thead>
						<tr>
							<th></th>
							<th>
								<img src={logoWhite} className='CompetitionSection__table__logo'/>
							</th>
							<th>Harmony</th>
							<th>Zilliqa</th>
							<th>Ethereum 2.0</th>
							<th>QuarkChain</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th>Performances</th>
							<td>High (> 10'000 TPS)</td>
							<td>Zilliqa</td>
							<td>Medium</td>
							<td>N/A</td>
							<td>High</td>
						</tr>
						<tr>
							<th>Transaction Finality Time</th>
							<td>Medium</td>
							<td>Low</td>
							<td>Medium</td>
							<td>Medium</td>
							<td>Medium</td>
						</tr>
						<tr>
							<th>No Need For Beacon Chain</th>
							<td>Yes</td>
							<td>No</td>
							<td>No</td>
							<td>No</td>
							<td>No</td>
						</tr>
						<tr>
							<th>Linear Scalability</th>
							<td>High</td>
							<td>Medium</td>
							<td>Low</td>
							<td>Medium</td>
							<td>High</td>
						</tr>
						<tr>
							<th>Attack Prevention</th>
							<td>Maximum (51% attack)</td>
							<td>Medium</td>
							<td>Medium</td>
							<td>Medium</td>
							<td>Medium</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>
	);
}

export default CompetitionSection;