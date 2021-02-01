import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import CategoryRow from './CategoryRow';

import './CategoriesTable.css';

const CategoriesTable = ({ storedCategories, onChange }) => {
  const [categories, setCategories] = useState(storedCategories);
  const [newCategory, setNewCategory] = useState(null);
  const [editableCategoryId, setEditableCategoryId] = useState();

  const headers = ['Category', 'Description', 'Action'];

  const handleAddNewCategory = () => {
    setNewCategory({
      id: uuidv4(),
      category: '',
      description: '',
    });
  };

  const saveCategories = (categories) => {
    onChange(categories);
    setCategories(categories);
    setNewCategory(null);
    setEditableCategoryId(null);
  };

  const updateCategoryById = (id) => {
    return categories.map((category) => {
      if (category.id === id) {
        return newCategory;
      }
      return category;
    });
  };

  const handleSaveNewCategory = () => {
    saveCategories([...categories, newCategory]);
  };

  const handleSaveEditableCategory = () => {
    const updatedCategories = updateCategoryById(newCategory.id);

    saveCategories(updatedCategories);
  };

  const handleCancelNewCategory = () => {
    setNewCategory(null);
    setEditableCategoryId(null);
  };

  const handleEditCategory = (category) => {
    setEditableCategoryId(category.id);
    setNewCategory(category);
  };

  const handleDeleteCategory = (id) => {
    const arrayCategories = categories.filter((category) => category.id !== id);
    onChange(arrayCategories);
    setCategories([...arrayCategories]);
  };

  const buildCategoryRow = (category) => (
    <tr key={category.id}>
      <td>{category.category}</td>
      <td>{category.description}</td>
      <td>
        <div className="action-category-buttons">
          <button
            className="action-category-button"
            onClick={() => handleEditCategory(category)}
          >
            Edit
          </button>
          <button
            className="action-category-button"
            onClick={() => handleDeleteCategory(category.id)}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );

  return (
    <div className="category-table">
      <div className="d-flex justify-content-end pb-3">
        <button
          className="action-category-button big"
          onClick={handleAddNewCategory}
        >
          Add More
        </button>
      </div>
      <table className="greyGridTable" striped hover responsive="sm" size="lg">
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => {
            if (editableCategoryId === category.id) {
              return (
                <CategoryRow
                  key={category.id}
                  {...newCategory}
                  onCategoryChange={setNewCategory}
                  onSaveNewCategory={handleSaveEditableCategory}
                  onCancelNewCategory={handleCancelNewCategory}
                />
              );
            } else {
              return buildCategoryRow(category);
            }
          })}
          {newCategory && !editableCategoryId && (
            <CategoryRow
              key={newCategory.id}
              {...newCategory}
              onCategoryChange={setNewCategory}
              onSaveNewCategory={handleSaveNewCategory}
              onCancelNewCategory={handleCancelNewCategory}
            />
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CategoriesTable;
