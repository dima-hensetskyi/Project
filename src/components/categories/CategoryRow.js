import React from 'react';
import { Form } from 'react-bootstrap';

import './CategoryRow.css';

const CategoryRow = ({
  id,
  category,
  description,
  onCategoryChange,
  onSaveNewCategory,
  onCancelNewCategory,
}) => {
  const handleSaveNewCategory = () => {
    onSaveNewCategory();
  };

  return (
    <tr className="category-row">
      <td>
        <Form.Control
          type="text"
          placeholder="Category"
          onChange={({ target }) =>
            onCategoryChange({
              id,
              description,
              category: target.value,
              value: target.value,
              label: target.value,
            })
          }
          value={category}
        />
      </td>
      <td>
        <Form.Control
          type="text"
          placeholder="Description"
          onChange={({ target }) =>
            onCategoryChange({
              id,
              description: target.value,
              category,
              value: target.value,
              label: target.value,
            })
          }
          value={description}
        />
      </td>
      <td>
        <div className="action-row-buttons">
          <button className="action-row-button" onClick={handleSaveNewCategory}>
            Save
          </button>
          <button className="action-row-button" onClick={onCancelNewCategory}>
            Cancel
          </button>
        </div>
      </td>
    </tr>
  );
};

export default CategoryRow;
