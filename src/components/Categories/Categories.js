import React from "react";
import { Form } from "react-bootstrap";
import Select from "react-select";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import MomentLocaleUtils, {
  formatDate,
  parseDate,
} from "react-day-picker/moment";
import "./Categories.css";
import Icon from "../../common/Icon";

const categoriesOptions = [
  { value: "food", label: "Food" },
  { value: "clothes", label: "Clothes" },
  { value: "restaurant", label: "Restaurant" },
  { value: "utility bills", label: "Utility bills" },
  { value: "pets", label: "Pets" },
];

function Categories({
  id,
  category,
  description,
  date,
  onCategorieChange,
  onSaveNewCategorie,
  onCancelNewCategorie,
}) {
  return (
    <tr className="categories">
      <td>
        <Select
          value={{ value: category, label: category }}
          onChange={(selectedOption) =>
            onCategorieChange({
              id,
              description,
              date,
              category: selectedOption.value,
            })
          }
          options={categoriesOptions}
        />
      </td>
      <td>
        <Form.Control
          type="text"
          placeholder="Description"
          onChange={({ target }) =>
            onCategorieChange({
              id,
              description: target.value,
              date,
              category,
            })
          }
          value={description}
        />
      </td>
      <td>
        <DayPickerInput
          formatDate={formatDate}
          parseDate={parseDate}
          value={formatDate(date)}
          onDayChange={(day) =>
            onCategorieChange({
              id,
              description,
              date: formatDate(day),
              category,
            })
          }
        />
      </td>
      <td>
        {/* <Form.Control
          type="text"
          placeholder="Money"
          onChange={({ target }) =>
            onTransactionChange({
              id,
              description,
              date,
              money: target.value,
              category,
            })
          }
          value={money}
        /> */}
      </td>
      <td>
        <div className="action-buttons">
          <Icon iconName="save" onClick={onSaveNewCategorie} />
          <Icon iconName="cancel" onClick={onCancelNewCategorie} />
        </div>
      </td>
    </tr>
  );
}

export default Categories;
