import { useEffect, useState } from "react";
import Input from "./components/forms/Input";
import Checkbox from "./components/forms/Checkbox";
import ProductCategoryRow from "./components/products/ProductCategoryRow";
import ProductRow from "./components/products/ProductRow";
import Timer from "./components/Timer";
import PwdSecurity from "./components/PwdSecurity";
import FolderTree from "./components/recursive/FolderTree";

const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

function App() {
  const [showStockedOnly, setShowStockedOnly] = useState(false);
  const [search, setSearch] = useState("");
  const [showInput, setShowInput] = useState(true);

  const visibleProducts = PRODUCTS.filter((product) => {
    if (showStockedOnly && !product.stocked) {
      return false;
    }

    if (search && !product.name.includes(search)) {
      return false;
    }
    return true;
  });

  return (
    <div className="container my-3 stack">
      {/* Table of fruits in store and not */}
      {/* div is not display here className=d-none 
      <div className="d-none">
        <Search
          search={search}
          onSearchChange={setSearch}
          showStockedOnly={showStockedOnly}
          onStockedOnlyChange={setShowStockedOnly}
        />
        <ProductTable products={visibleProducts} />
      </div>
      */}
      {/* Display title example start here 
      <div className="d-none">
        <Checkbox
          checked={showInput}
          onChange={setShowInput}
          id="titleshow"
          label="Display the title input textbox"
        />
        {showInput && <EditTitle />}
      </div>
      */}
      {/* Input change the timer 
      <div className="d-none">
        <Timer />
      </div>
      */}
      {/* 
      <div className="">
        <PwdSecurity />
      </div> */}

      <FolderTree />
    </div>
  );
}

function Search({
  showStockedOnly,
  onStockedOnlyChange,
  search,
  onSearchChange,
}) {
  return (
    <div>
      <div className="mb-3">
        <Input
          value={search}
          onChange={onSearchChange}
          placeholder="Search..."
        />
        <Checkbox
          id="stocked"
          checked={showStockedOnly}
          onChange={onStockedOnlyChange}
          label="Only display products in stock."
        />
      </div>
    </div>
  );
}

function ProductTable({ products }) {
  const rows = [];
  let lastCategory = null;

  for (let product of products) {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow key={product.category} name={product.category} />
      );
    }
    lastCategory = product.category;
    rows.push(<ProductRow product={product} key={product.name} />);
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>

      <tbody>{rows}</tbody>
    </table>
  );
}

function EditTitle() {
  const [title, setTitle] = useState("");
  const [firstname, setFirstname] = useState("");

  useEffect(() => {
    const originalTitle = document.title;

    return () => {
      document.title = originalTitle;
    };
  }, []);

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div>
      <Input
        placeholder="Modifier le titre"
        value={title}
        onChange={setTitle}
      />
      <Input
        placeholder="Firstname"
        value={firstname}
        onChange={setFirstname}
      />
    </div>
  );
}

export default App;
