import React, { useState } from 'react';
import { Table }from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import Row from './Row';
import { v4 as uuidv4 } from 'uuid';

function CategoriesPage () {
	const [charges, setCharges] = useState([]);
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
		<>
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
							return (<Row key={charge.id} {...newCharge} 
								onChargeChange={handleChargeChange} 
								onSaveNewCharge={handleSaveEdit} 
								onCancelNewCharge={handleCancelNewCharge} 
								/>)
						} else{
							return buildChargeRow(charge);
						}
					})}
					{newCharge && !editableChargeId &&
						(<Row key={newCharge.id} {...newCharge}
						onChargeChange={handleChargeChange}
						onSaveNewCharge={handleSaveNewCharge}
						onCancelNewCharge={handleCancelNewCharge}
						/>)}
				</tbody>
			</Table>
		</>
	);
}

export default CategoriesPage;
