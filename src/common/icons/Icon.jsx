import React from "react";
import AddIcon from "../../assets/img/icons/png-icons/png/056-plus.png";
// import DeleteIcon from "../../assets/img/icons/png-icons/png/058-error.png";
// import EditIcon from "../../assets/img/icons/png-icons/png/218-edit.png";
// import SaveIcon from "../../assets/img/icons/png-icons/png/059-success.png";
// import CancelIcon from "../../assets/img/icons/png-icons/png/057-minus.png";

import DeleteIcon from "../../assets/bgr/white-delete.png";
import EditIcon from "../../assets/bgr/white-edit.png";
// import SaveIcon from "../../assets/img/icons/png-icons/png/059-success.png";
// import CancelIcon from "../../assets/img/icons/png-icons/png/057-minus.png";

import "./Icon.css";

const Icon = ({ iconName, color = "violet", onClick }) => {
  function getUrlByName(iconName) {
    switch (iconName) {
      // case "add":
      //   return AddIcon;
      case "delete":
        return DeleteIcon;
      case "edit":
        return EditIcon;
      // case "save":
      //   return SaveIcon;
      // case "cancel":
      //   return CancelIcon;
    }
  }

  return (
    <div className={`icon-button-${color}`} onClick={onClick}>
      <img src={getUrlByName(iconName)} alt={`${iconName} icon button`} />
    </div>
  );
};

export default Icon;
