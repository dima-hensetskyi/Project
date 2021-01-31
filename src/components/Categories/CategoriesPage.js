import React, { useEffect, useState } from "react";
// import CurrentBalance from "../CurrentBalance/CurrentBalance";
import { Tabs, Tab } from "react-bootstrap";

import "./CategoriesPage.css";
import TableCategories from "./TableCategories";

function CategoriesPage() {
  const storedIncomes = JSON.parse(localStorage.getItem("incomes")) || [];
  const storedCharges = JSON.parse(localStorage.getItem("charges")) || [];

  const [balance, setBalance] = useState(0);

  useEffect(() => {
    getBalance(storedIncomes, storedCharges);
  }, []);

  const handleCategorieChange = (storageKey, categories) => {
    localStorage.setItem(storageKey, JSON.stringify(categories));
    const incomes = storageKey === "incomes" ? categories : storedIncomes;
    const charges = storageKey === "charges" ? categories : storedCharges;
    getBalance(incomes, charges);
  };

  const getBalance = (incomes, charges) => {
    const incomesSum = incomes.reduce(
      (total, income) => (total += +income.money),
      0
    );
    const chargesSum = charges.reduce(
      (total, charge) => (total += +charge.money),
      0
    );
    setBalance(incomesSum - chargesSum);
  };
  {
    /* <nav className="navigation-wrapper">
        <CurrentBalance balance={balance} />
      </nav> */
  }
  return (
    <div className="categorie-page">
      <Tabs defaultActiveKey="charges" className="mb-5">
        <Tab eventKey="charges" title="Charges">
          <TableCategories
            storedCategorieKey="charges"
            storedCategories={storedCharges}
            onCategorieChange={(categories) =>
              handleCategorieChange("charges", categories)
            }
          />
        </Tab>
        <Tab eventKey="incomes" title="Incomes">
          <TableCategories
            storedCategorieKey="incomes"
            storedCategories={storedIncomes}
            onCategorieChange={(categories) =>
              handleCategorieChange("incomes", categories)
            }
          />
        </Tab>
      </Tabs>
    </div>
  );
}

export default CategoriesPage;
