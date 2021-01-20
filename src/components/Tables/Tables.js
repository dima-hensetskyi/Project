import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import TableCharges from '../Charges/TableCharges';
import TableIncomes from '../Incomes/TableIncomes';
function Tables() {
    return (
        <div className="tables-page">
            <Tabs
                defaultActiveKey="charges"
                id="uncontrolled-tab-example"
                className="mb-5"
            >
                <Tab eventKey="charges" title="Charges">
                    <TableCharges />
                </Tab>
                <Tab eventKey="incomes" title="Incomes">
                    <TableIncomes />
                </Tab>
            </Tabs>
        </div>
    );
}
export default Tables;
