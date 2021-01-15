import React from 'react';
import CurrentBalance from './CurrentBalance';
import { Tabs, Tab } from 'react-bootstrap';


import './ChargesPage.css';
import TableCharges from './TableCharges';

function ChargesPage () {
	return (
		<div className="page">
			<nav className="navigation-wrapper">
				<CurrentBalance />
			</nav>
			<div className="charges-page">
			<Tabs defaultActiveKey="charges" id="uncontrolled-tab-example" className="mb-5">
				<Tab eventKey="charges" title="Charges">
					<TableCharges />
				</Tab>
				<Tab eventKey="incomes" title="Incomes">
					<h2>Any content 2</h2>
				</Tab>
			</Tabs>
			</div>
		</div>
	);
}

export default ChargesPage;
