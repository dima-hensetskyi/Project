import React from "react";
import AddIcon from "../img/icons/png-icons/png/056-plus.png";
import DeleteIcon from "../img/icons/png-icons/png/058-error.png";
import EditIcon from "../img/icons/png-icons/png/218-edit.png";
import SaveIcon from "../img/icons/png-icons/png/059-success.png";
import CancelIcon from "../img/icons/png-icons/png/057-minus.png";
import "./Icon.css";

function Icon({ iconName, size = "small", onClick }) {
  function getUrlByName(iconName) {
    switch (iconName) {
      case "add":
        return AddIcon;
      case "delete":
        return DeleteIcon;
      case "edit":
        return EditIcon;
      case "save":
        return SaveIcon;
      case "cancel":
        return CancelIcon;
    }
  }

  return (
    <div className={`icon-button-${size}`} onClick={onClick}>
      <img src={getUrlByName(iconName)} alt={`${iconName} icon button`} />
    </div>
  );
}

export default Icon;
