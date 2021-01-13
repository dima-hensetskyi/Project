import { Form } from 'react-bootstrap';

function Row({id, category, description, date, money, onChargeChange, onSaveNewCharge, onCancelNewCharge}) {
	return (
		<tr>
			<td>
				<Form.Control 
					type="text" 
					placeholder="Categories" 
					onChange={({target}) => onChargeChange({id, description, date, money, category: target.value})} 
					value={category}
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

export default Row;