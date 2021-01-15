import React, { useState } from 'react';

import {Table} from 'react-bootstrap';

import MomentLocaleUtils, {
	formatDate,
	parseDate,
  } from 'react-day-picker/moment';

import { v4 as uuidv4 } from 'uuid';

import ChargeRow from './ChargeRow';
import './TableCharges.css';
import Icon from './Icon';

function TableCharges() {
	const storedCharges = JSON.parse(localStorage.getItem("charges"));

	const [charges, setCharges] = useState(storedCharges || []);
	const [newCharge, setNewCharge] = useState(null);
    const [editableChargeId, setEditableChargeId] = useState();
    
    const headers = ['Category', 'Description', 'Date', 'Money', 'Action'];

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
					<div className="action-buttons">
					<Icon iconName="edit"
						onClick={() => handleEditCharge(charge)}
						/>
					<Icon iconName="delete"
						onClick={() => handleDeleteCharge(charge.id)}
						/>
					</div>
				</td>
			</tr>)
    }

    return (
		<div className="charge-table">
		<div className="d-flex justify-content-end pb-3">
			<Icon iconName="add"
				size="big"
				onClick={handleAddNewCharge}
						/>
		</div>
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
    );
}

export default TableCharges;
