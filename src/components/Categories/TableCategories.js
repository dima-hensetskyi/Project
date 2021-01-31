import React, { useState } from "react";

import { Table } from "react-bootstrap";

import MomentLocaleUtils, {
  formatDate,
  parseDate,
} from "react-day-picker/moment";

import { v4 as uuidv4 } from "uuid";

import Categories from "./Categories";
import "./TableCategories.css";
import Icon from "../../common/Icon";
import _ from "lodash";

function TableCategories({ storedCategories, onCategorieChange }) {
  const [categories, setCategories] = useState(storedCategories || []);
  const [newCategorie, setNewCategorie] = useState(null);
  const [editableCategorieId, setEditableCategorieId] = useState();
  const [sort, setSort] = useState("desc");
  const [sortField, setSortField] = useState("id");

  const headers = ["Category", "Description", "Date", "Action"];

  const handleAddNewCategorie = () => {
    setNewCattegorie({
      id: uuidv4(),
      category: "",
      description: "",
      date: formatDate(new Date()),
      money: "",
    });
  };

  const handleSaveNewCategorie = () => {
    onCategorieChange([...categories, newCategorie]);
    setCategories([...categories, newCategorie]);
    setNewCategorie(null);
    setEditableCategorieId(null);
  };

  const handleSaveEditableCategorie = () => {
    const updatedCategories = categories.map((categorie) => {
      if (categorie.id === newCategorie.id) {
        return newCategorie;
      }
      return categorie;
    });
    onCategorieChange(updatedCategories);

    setCategories(updatedCategories);
    setNewCategorie(null);
    setEditableCategorieId(null);
  };

  const handleCancelNewCategorie = () => {
    setNewCategorie(null);
    setEditableCategorieId(null);
  };

  const handleCategorieChange = (categorie) => {
    setNewCategorie(categorie);
  };

  const handleEditCategorie = (categorie) => {
    setEditableCategorieId(categorie.id);
    setNewCategorie(categorie);
  };

  const handleDeleteCategorie = (id) => {
    const arrayCategories = categories.filter(
      (categorie) => categorie.id !== id
    );
    onCategorieChange(arrayCategories);
    setCategories([...arrayCategories]);
  };

  const buildCategorieRow = (categorie) => {
    return (
      <tr key={categorie.id}>
        <td>{categorie.category}</td>
        <td>{categorie.description}</td>
        <td>{categorie.date}</td>
        <td>
          <div className="action-buttons">
            <Icon
              iconName="edit"
              onClick={() => handleEditCategorie(categorie)}
            />
            <Icon
              iconName="delete"
              onClick={() => handleDeleteCategorie(categorie.id)}
            />
          </div>
        </td>
      </tr>
    );
  };

  const onSort = (category) => {
    const cloneData = transactions.map((item) => {
      if (typeof item.date === "string" || typeof moneyFormat === "string") {
        const сorrectDateFormat = Date.parse(item.date);
        const moneyFormat = item.money.replace(/\D/g, "");
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
        date.getMonth() <= 8
          ? `0${date.getMonth() + 1}`
          : `${date.getMonth() + 1}`;

      const correctDateFormat = `${correctMounth(date)}/${correctDay(
        date
      )}/${date.getFullYear()}`;
      return {
        ...item,
        money: item.money + "$",
        date: correctDateFormat,
      };
    });
    setCategories(correctData);
  };
  return (
    <div className="categorie-table">
      <div className="d-flex justify-content-end pb-3">
        <Icon iconName="add" size="big" onClick={handleAddNewCategorie} />
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                onClick={onSort.bind(null, `${header}`)}
                className={sortField === header ? "sort" : "notSorting"}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {categories.map((categorie) => {
            if (editableCategorieId === categorie.id) {
              return (
                <Categories
                  key={categorie.id}
                  {...newCategorie}
                  onCategorieChange={handleCategorieChange}
                  onSaveNewCategorie={handleSaveEditableCategorie}
                  onCancelNewCategorie={handleCancelNewCategorie}
                />
              );
            } else {
              return buildCategorieRow(categorie);
            }
          })}
          {newCategorie && !editableCategorieId && (
            <Categories
              key={newCategorie.id}
              {...newCategorie}
                onCategorieChange={handleCategorieChange}
                onSaveNewCategorie={handleSaveEditableCategorie}
                onCancelNewCategorie={handleCancelNewCategorie}
            />
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default TableCategories;
