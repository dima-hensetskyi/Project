import React from 'react';
import { Form } from 'react-bootstrap';
import Select from 'react-select';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import MomentLocaleUtils, {
  formatDate,
  parseDate,
} from 'react-day-picker/moment';
import './ChargeRow.css';
import Icon from './Icon';

const categoriesOptions = [
  { value: 'food', label: 'Food' },
  { value: 'clothes', label: 'Clothes' },
	{ value: 'restaurant', label: 'Restaurant' },
	{ value: 'utility bills', label: 'Utility bills' },
  { value: 'pets', label: 'Pets' },
];

function ChargeRow({id, category, description, date, money, onChargeChange, onSaveNewCharge, onCancelNewCharge}) {
	return (
		<tr className="charge-row">
			<td>
				<Select
					value={{value: category, label: category}}
					onChange={(selectedOption) => onChargeChange({id, description, date, money, category: selectedOption.value})}
					categoriesOptions={categoriesOptions}
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
				<div className="action-buttons">
					<Icon iconName="save"
						onClick={onSaveNewCharge}
						/>
							<Icon iconName="cancel"
						onClick={onCancelNewCharge}
						/>
				</div>
			</td>
		</tr>
	);
} 

export default ChargeRow;