import React, { Suspense, useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { forUseContext } from "../contextApi/contextApiStore";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

function Products() {
  const [products, setProducts] = useState([]);
  const [sliceProduct, setsliceProduct] = useState();
  const [search, setsearch] = useState("");
  const context = useContext(forUseContext);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data));
  }, []);

  const productOpts = [
    { id: 1, lable: "10 Products", Value: 10 },
    { id: 2, lable: "14 Products", Value: 14 },
    { id: 3, lable: "18 Products", Value: 18 },
    { id: 4, lable: "20 Products", Value: 20 },
  ];
  const priceOpts = [
    { id: 5, lable: "All Price Products", Value: 0 },
    { id: 1, lable: "more than 10$", Value: 10 },
    { id: 2, lable: "more than 15$", Value: 14 },
    { id: 3, lable: "less than 50$", Value: 50 },
    { id: 4, lable: "more than 70$", Value: 70 },
  ];
  const categoryOpts = [
    { id: 1, lable: "women's clothing", Value: "women's clothing" },
    { id: 2, lable: "electronics", Value: "electronics" },
    { id: 3, lable: "jewelery", Value: "jewelery" },
    { id: 4, lable: "men's clothing", Value: "men's clothing" },
  ];

  function handleProduct(e) {
    setsliceProduct(e.target.value);
  }

  function handlePice(e) {
    setProducts(products.filter((product) => product.price >= e.target.value));
  }
  function handleCatogery(e) {
    setProducts(products.filter((product) => product.category === e.target.value));
  }

  function handleSearch() {
    setProducts(products.filter((prod) => prod.title.includes(search)));
    console.log(products);
  }

  return (
    <div className="product-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="flex justify-between my-2">
            <p className="text-[#766946] pl-[30px]">
              shop > products > top - products
            </p>
            <div className="filters flex items-center">
              <div className="search-wrapper relative">
                <input
                  type="text"
                  className="filter-search"
                  value={search}
                  onChange={(e) => setsearch(e.target.value)}
                />
                <button onClick={handleSearch}>search</button>
              </div>
              <button
                className="filter-btn"
                onClick={() => {
                  context.setfilterShow(!context.filterShow);
                  console.log(context.filterShow);
                }}
              >
                <FontAwesomeIcon icon={faFilter} />
              </button>
              <select className="filter-select" onChange={handleProduct}>
                <option value={products.length} key="">
                  All Products
                </option>
                {productOpts.map((opt) => (
                  <option value={opt.Value} key={opt.id}>
                    {opt.lable}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div
            className={
              context.filterShow
                ? "filter-wrapper-show "
                : "filter-wrapper-hide"
            }
          >
            <div className="filter-top flex justify-between items-center">
              <h1>Filter Products</h1>
              <div>
                <div className="filter-item">
                  <label htmlFor="price">Price:</label>
                  <select
                    id="price"
                    onChange={handlePice}
                    className="filter-select text-[16px] p-[2px] "
                  >
                    {priceOpts.map((opt) => (
                      <option
                        value={opt.Value}
                        key={opt.id}
                        className="border-red-50 outline-1"
                      >
                        {opt.lable}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <div className="filter-item">
                  <label htmlFor="price">category:</label>
                  <select
                    id="price"
                    onChange={handleCatogery}
                    className="filter-select text-[16px] p-[2px] "
                  >
                    {categoryOpts.map((opt) => (
                      <option
                        value={opt.Value}
                        key={opt.id}
                        className="border-red-50 outline-1"
                      >
                        {opt.lable}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <button
                className="filter-btn"
                onClick={() => {
                  context.setfilterShow(!context.filterShow);
                  console.log(context.filterShow);
                }}
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
            <div className="row">
              <div className="col-lg-3 col-sm-6"></div>
            </div>
          </div>
          <Suspense fallback={<p>Load.....</p>}>
            {products.slice(0, sliceProduct).map((product) => (
              <div
                className="col-lg-3 col-md-6 col-sm-12 mx-auto my-2"
                key={product.id}
              >
                <ProductCard
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  id={product.id}
                  category={product.category}
                />
              </div>
            ))}
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default Products;
