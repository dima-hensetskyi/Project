import React from "react";
// import AddIcon from "../../assets/img/icons/png-icons/png/056-plus.png";
// import DeleteIcon from "../../assets/img/icons/png-icons/png/058-error.png";
// import EditIcon from "../../assets/img/icons/png-icons/png/218-edit.png";
// import SaveIcon from "../../assets/img/icons/png-icons/png/059-success.png";
// import CancelIcon from "../../assets/img/icons/png-icons/png/057-minus.png";
import HomeIcon from "../../assets/bgr/white-house.png";
import ChartIcon from "../../assets/bgr/white-chart-pie.png";
import CategoryIcon from "../../assets/bgr/white-category.png";

import "./NavBarIcons.css";

const NavBarIcon = ({ iconName }) => {
  function getUrlByName(iconName) {
    switch (iconName) {
      case "home":
        return HomeIcon;
      case "chart":
        return ChartIcon;
      case "categories":
        return CategoryIcon;
      // case "save":
      //   return SaveIcon;
      // case "cancel":
      //   return CancelIcon;
    }
  }

  return (
    <div className="icon-navBar">
      <img src={getUrlByName(iconName)} alt={`${iconName} icon button`} />
    </div>
  );
};

export default NavBarIcon;
