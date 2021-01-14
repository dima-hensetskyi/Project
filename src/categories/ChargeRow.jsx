import { Form, Dropdown, DropdownButton } from 'react-bootstrap';
import Select from 'react-select';
import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import MomentLocaleUtils, {
  formatDate,
  parseDate,
} from 'react-day-picker/moment';


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
				 <td>
				 <DayPickerInput
        formatDate={formatDate}
        parseDate={parseDate}
				value={formatDate(date)}
				onDayChange={day => onChargeChange({id, description, date: formatDate(day), money, category})}
      	/>
					</td>
			<td>
				<Form.Control 
				type="text" 
				placeholder="Money" 
				onChange={({target}) => onChargeChange({id, description, date, money: target.value, category})} 
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