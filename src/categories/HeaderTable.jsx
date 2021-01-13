import { Table } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import Row from './Row';

const data = {
	category: 'food',
	description : 'Dinner with John',
	date: '28.12.2020',
	money: '125$'
};


function HeaderTable() {
	return (
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
    	<tr>
				<td>{data.category}</td>
 				<td>{data.description}</td>
 				<td>{data.date}</td>
 				<td>{data.money}</td>
	 			<td>Action</td>
    	</tr>
    	<tr>
				<td>{data.category}</td>
 				<td>{data.description}</td>
 	<td>{data.date}</td>
 	<td>{data.money}</td>
	 <td>Action</td>
    </tr>
    <tr>
		<td>{data.category}</td>
 	<td>{data.description}</td>
 	<td>{data.date}</td>
 	<td>{data.money}</td>
	 <td>Action</td>
    </tr>
		<tr>
		 <Row />
    </tr>
  </tbody>
</Table>


        // <thead>
        //     <tr>
        //         <th scope="col">Category</th>
        //         <th scope="col">Description</th>
        //         <th scope="col">Date</th>
        //         <th scope="col">Money</th>
        //         <th scope="col">Action</th>
        //     </tr>
        // </thead>
    );
}

export default HeaderTable;