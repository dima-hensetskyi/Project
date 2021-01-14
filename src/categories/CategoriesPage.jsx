import React, { useState } from 'react';
import { Container, Row, Col, Table, Tabs, Tab }from 'react-bootstrap';
import ChargeRow from './ChargeRow';
import { v4 as uuidv4 } from 'uuid';
import CurrentBalance from './CurrentBalance';
import MomentLocaleUtils, {
  formatDate,
  parseDate,
} from 'react-day-picker/moment';
import './Button.css'

function CategoriesPage () {
	const headers = ['Category', 'Description', 'Date', 'Money', 'Action'];


	const storedCharges = JSON.parse(localStorage.getItem("charges"));

	const [charges, setCharges] = useState(storedCharges || []);
	const [newCharge, setNewCharge] = useState(null);
	const [editableChargeId, setEditableChargeId] = useState();

  const handleAddNewCharge = () => {
		setNewCharge({
			id: uuidv4(),
			category: '',
			description : '',
			date: formatDate(new Date()),
			money: '$'
		})
	}; 

	const handleSaveNewCharge = () => {
		localStorage.setItem("charges", JSON.stringify([...charges, newCharge]));
		setCharges([...charges, newCharge]);
		setNewCharge(null);
		setEditableChargeId(null);
	}

	const handleSaveEditableCharge = () => {
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
		<Container className="p-5">
			<CurrentBalance />


		<Tabs defaultActiveKey="charges" id="uncontrolled-tab-example" className="mb-5">
			<Tab eventKey="charges" title="Charges">
				<div className="d-flex justify-content-end">
					<button type="button" className="btn btn-primary" onClick={handleAddNewCharge}>Add new</button>
				</div>

					<div className="pt-3">
				
					<Table striped bordered hover>   
				<thead>
			<tr> 
				{headers.map((header) => <th>{header}</th>)}
			</tr>
		</thead>
		<tbody>
				{charges.map((charge) => {
					if (editableChargeId === charge.id){
						return (<ChargeRow key={charge.id} {...newCharge} 
								onChargeChange={handleChargeChange} 
								onSaveNewCharge={handleSaveEditableCharge} 
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
						
					</div>
			</Tab>
			<Tab eventKey="incomes" title="Incomes">
				<h2>Any content 2</h2>
			</Tab>
		</Tabs>
		</Container>
	);
}

export default CategoriesPage;
