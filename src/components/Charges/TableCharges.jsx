import React, { useState } from 'react';

import { Table } from 'react-bootstrap';

import MomentLocaleUtils, { formatDate, parseDate } from 'react-day-picker/moment';

import { v4 as uuidv4 } from 'uuid';

import ChargeRow from './ChargeRow';
import './TableCharges.css';
import Icon from './Icon';
import { propTypes } from 'react-bootstrap/esm/Image';
import _ from 'lodash';

function TableCharges() {
    const storedCharges = JSON.parse(localStorage.getItem('charges'));

    const [charges, setCharges] = useState(storedCharges || []);
    const [newCharge, setNewCharge] = useState(null);
    const [editableChargeId, setEditableChargeId] = useState();
    const [sort, setSort] = useState('desc');
    const [sortField, setSortField] = useState('id');

    const headers = ['Category', 'Description', 'Date', 'Money', 'Action'];

    const handleAddNewCharge = () => {
        setNewCharge({
            id: uuidv4(),
            category: '',
            description: '',
            date: formatDate(new Date()),
            money: '',
        });
    };

    const handleSaveNewCharge = () => {
        localStorage.setItem('charges', JSON.stringify([...charges, newCharge]));
        setCharges([...charges, newCharge]);
        setNewCharge(null);
        setEditableChargeId(null);
    };

    const handleSaveEditableCharge = () => {
        const updatedCharges = charges.map((charge) => {
            if (charge.id === newCharge.id) {
                return newCharge;
            }
            return charge;
        });

        localStorage.setItem('charges', JSON.stringify(updatedCharges));

        setCharges(updatedCharges);
        setNewCharge(null);
        setEditableChargeId(null);
    };

    const handleCancelNewCharge = () => {
        setNewCharge(null);
        setEditableChargeId(null);
    };

    const handleChargeChange = (charge) => {
        setNewCharge(charge);
    };

    const handleEditCharge = (charge) => {
        setEditableChargeId(charge.id);
        setNewCharge(charge);
    };

    const handleDeleteCharge = (id) => {
        const arrayCharges = charges.filter((charge) => charge.id !== id);

        localStorage.setItem('charges', JSON.stringify(arrayCharges));

        setCharges([...arrayCharges]);
    };

    const buildChargeRow = (charge) => {
        return (
            <tr key={charge.id}>
                <td>{charge.category}</td>
                <td>{charge.description}</td>
                <td>{charge.date}</td>
                <td>{charge.money}</td>
                <td>
                    <div className="action-buttons">
                        <Icon iconName="edit" onClick={() => handleEditCharge(charge)} />
                        <Icon iconName="delete" onClick={() => handleDeleteCharge(charge.id)} />
                    </div>
                </td>
            </tr>
        );
    };

    const onSort = (category) => {
        const cloneData = charges.map((item) => {
            if (typeof item.date === 'string' || typeof moneyFormat === 'string') {
                const сorrectDateFormat = Date.parse(item.date);
                const moneyFormat = item.money.replace(/\D/g, '');
                return {
                    ...item,
                    money: Number(moneyFormat),
                    date: сorrectDateFormat,
                };
            }
            return item;
        });

        const sortType = sort === `desc` ? `asc` : `desc`;
        setSort(sortType);
        setSortField(category);
        const orderedData = _.orderBy(cloneData, category.toLowerCase(), sortType);

        const correctData = orderedData.map((item) => {
            const date = new Date(item.date);

            const correctDay = (date) =>
                date.getDate() <= 9 ? `0${date.getDate()}` : `${date.getDate()}`;
            const correctMounth = (date) =>
                date.getMonth() <= 8 ? `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`;

            const correctDateFormat = `${correctMounth(date)}/${correctDay(
                date
            )}/${date.getFullYear()}`;
            return {
                ...item,
                money: item.money + '$',
                date: correctDateFormat,
            };
        });
        setCharges(correctData);
    };
    return (
        <div className="charge-table">
            <div className="d-flex justify-content-end pb-3">
                <Icon iconName="add" size="big" onClick={handleAddNewCharge} />
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        {headers.map((header, index) => (
                            <th
                                key={index}
                                onClick={onSort.bind(null, `${header}`)}
                                className={sortField === header ? 'sort' : 'notSorting'}
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {charges.map((charge) => {
                        if (editableChargeId === charge.id) {
                            return (
                                <ChargeRow
                                    key={charge.id}
                                    {...newCharge}
                                    onChargeChange={handleChargeChange}
                                    onSaveNewCharge={handleSaveEditableCharge}
                                    onCancelNewCharge={handleCancelNewCharge}
                                />
                            );
                        } else {
                            return buildChargeRow(charge);
                        }
                    })}
                    {newCharge && !editableChargeId && (
                        <ChargeRow
                            key={newCharge.id}
                            {...newCharge}
                            onChargeChange={handleChargeChange}
                            onSaveNewCharge={handleSaveNewCharge}
                            onCancelNewCharge={handleCancelNewCharge}
                        />
                    )}
                </tbody>
            </Table>
        </div>
    );
}

export default TableCharges;
