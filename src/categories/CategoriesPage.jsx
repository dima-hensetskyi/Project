import React, { useState } from 'react';
import { Container, Row, Col, Table, Tabs, Tab }from 'react-bootstrap';
import ChargeRow from './ChargeRow';
import { v4 as uuidv4 } from 'uuid';

function CategoriesPage () {
	const storedCharges = JSON.parse(localStorage.getItem("charges"));

	const [charges, setCharges] = useState(storedCharges || []);
	const [newCharge, setNewCharge] = useState(null);
	const [editableChargeId, setEditableChargeId] = useState();

  const handleAddNewCharge = () => {
		setNewCharge({
			id: uuidv4(),
			category: '',
			description : '',
			date: '28.12.2020',
			money: '$'
		})
	}; 

	const handleSaveNewCharge = () => {
		localStorage.setItem("charges", JSON.stringify([...charges, newCharge]));
		setCharges([...charges, newCharge]);
		setNewCharge(null);
		setEditableChargeId(null);
	}

	const handleSaveEdit = () => {
		const updatedCharges = charges.map((charge) => {
			if(charge.id === newCharge.id){
				return newCharge;
			}
			return charge;
		})

		localStorage.setItem("charges", JSON.stringify(updatedCharges));

		setCharges(updatedCharges);
		setNewCharge(null);
		setEditableChargeId(null);
	}

	const handleCancelNewCharge = () => {
		setNewCharge(null);
		setEditableChargeId(null);
	}

	const handleChargeChange = (charge) => {
		setNewCharge(charge);
	}

	const handleEditCharge = (charge) => {
		setEditableChargeId(charge.id);
		setNewCharge(charge);
	}

	const handleDeleteCharge = (id) => {
		const arrayCharges = charges.filter((charge) => charge.id !== id);

		localStorage.setItem("charges", JSON.stringify(arrayCharges));

		setCharges([...arrayCharges]);
	}

	const buildChargeRow = (charge) => {
		return (
			<tr key={charge.id}>
				<td>{charge.category}</td>
				<td>{charge.description}</td>
				<td>{charge.date}</td>
				<td>{charge.money}</td>
				<td>				
					<button type="button" className="btn btn-outline-primary" onClick={() => handleEditCharge(charge)}>Edit</button>
					<button type="button" className="btn btn-outline-danger" onClick={() => handleDeleteCharge(charge.id)}>Delete</button>
				</td>
			</tr>)
	}

	return (
		<Container>
			<Row>
				<Col md={{ span: 1, offset: 11 }}>Balance</Col>
				<Col md={{ span: 1, offset: 11 }}>1000$</Col>
				</Row>
		<Tabs defaultActiveKey="charges" id="uncontrolled-tab-example">
			<Tab eventKey="charges" title="Charges">
				<button type="button" className="btn btn-primary" onClick={handleAddNewCharge}>Add new</button>
					<Table striped bordered hover>
						<thead>
							<tr> 
								<th>Category</th>
								<th data-editable="true">Description</th>
								<th>Date</th>
								<th>Money</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{charges.map((charge) => {
								if (editableChargeId === charge.id){
									return (<ChargeRow key={charge.id} {...newCharge} 
										onChargeChange={handleChargeChange} 
										onSaveNewCharge={handleSaveEdit} 
										onCancelNewCharge={handleCancelNewCharge} 
										/>)
								} else{
									return buildChargeRow(charge);
								}
							})}
							{newCharge && !editableChargeId &&
								(<ChargeRow key={newCharge.id} {...newCharge}
								onChargeChange={handleChargeChange}
								onSaveNewCharge={handleSaveNewCharge}
								onCancelNewCharge={handleCancelNewCharge}
								/>)}
						</tbody>
					</Table>
			</Tab>
			<Tab eventKey="incomes" title="Incomes">
				<h2>Any content 2</h2>
			</Tab>
		</Tabs>
		</Container>
	);
}

export default CategoriesPage;
