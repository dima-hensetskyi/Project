import React from 'react';
import {Row, Col} from 'react-bootstrap';


function CurrentBalance() {
	return (
		<Row >
			<Col md={{ span: 1, offset: 11 }}>Balance</Col>
			<Col md={{ span: 1, offset: 11 }}>1000$</Col>
		</Row>
	);
} 

export default CurrentBalance;
