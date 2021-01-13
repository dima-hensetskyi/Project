import { Form, Dropdown, DropdownButton } from 'react-bootstrap';
import Select from 'react-select';

const options = [
  	{ value: 'food', label: 'Food' },
  	{ value: 'clothes', label: 'Clothes' },
	{ value: 'restaurant', label: 'Restaurant' },
	{ value: 'utility bills', label: 'Utility bills' },
  	{ value: 'pets', label: 'Pets' },
];

function ChargeRow({id, category, description, date, money, onChargeChange, onSaveNewCharge, onCancelNewCharge}) {
	return (
		<tr>
			<td>
				<Select
					value={{value: category, label: category}}
					// onChange={handleChange}
					onChange={(selectedOption) => onChargeChange({id, description, date, money, category: selectedOption.value})}
					options={options}
      	/>
			</td>
			<td>
				<Form.Control
				 type="text" 
				 placeholder="Description" 
				 onChange={({target}) => onChargeChange({id, description: target.value, date, money, category})} 
				 value={description}/>
				 </td>
			<td><Form.Control
				type="text" placeholder="Date" 
				onChange={({target}) => onChargeChange({id, description, date: target.value, money, category})} 
				value={date}/>
			 </td>
			<td>
				<Form.Control 
				type="text" 
				placeholder="Money" 
				onChange={({target}) => onChargeChange({id, description, date: target.value, money, category})} 
				value={money}/>
			</td>
			<td>
				<button type="button" className="btn btn-outline-success" onClick={onSaveNewCharge}>&#10003;</button> 
				<button type="button" className="btn btn-outline-secondary" onClick={onCancelNewCharge}>&#10008;</button>
			</td>
		</tr>
	);
} 

export default ChargeRow;