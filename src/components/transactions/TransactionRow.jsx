import React from "react";
import { Form } from "react-bootstrap";
import Select from "react-select";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import MomentLocaleUtils, {
  formatDate,
  parseDate,
} from "react-day-picker/moment";
import "./TransactionRow.css";
import Icon from "../../common/Icon";

const transactionsOptions = [
  { value: "food", label: "Food" },
  { value: "clothes", label: "Clothes" },
  { value: "restaurant", label: "Restaurant" },
  { value: "utility bills", label: "Utility bills" },
  { value: "pets", label: "Pets" },
];

function TransactionRow({
  id,
  category,
  description,
  date,
  money,
  onTransactionChange,
  onSaveNewTransaction,
  onCancelNewTransaction,
}) {
  return (
    <tr className="transaction-row">
      <td>
        <Select
          value={{ value: category, label: category }}
          onChange={(selectedOption) =>
            onTransactionChange({
              id,
              description,
              date,
              money,
              category: selectedOption.value,
            })
          }
          options={transactionsOptions}
        />
      </td>
      <td>
        <Form.Control
          type="text"
          placeholder="Description"
          onChange={({ target }) =>
            onTransactionChange({
              id,
              description: target.value,
              date,
              money,
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
            onTransactionChange({
              id,
              description,
              date: formatDate(day),
              money,
              category,
            })
          }
        />
      </td>
      <td>
        <Form.Control
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
        />
      </td>
      <td>
        <div className="action-buttons">
          <Icon iconName="save" onClick={onSaveNewTransaction} />
          <Icon iconName="cancel" onClick={onCancelNewTransaction} />
        </div>
      </td>
    </tr>
  );
}

export default TransactionRow;
