import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Helper from "../utility/Helper";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateFood = () => {
  const navigate = useNavigate();

  const [productList, setProductList] = useState({
    ProductName: "",
    ProductCode: "",
    Img: "",
    Category: "",
    Qty: "",
    Price: "",
  });

  const InputValue = (e) => {
    const { name, value } = e.target;
    setProductList((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${Helper.API_BASE}/create`,
        productList
      );
      console.log(response.data);
      navigate("/");
      toast.success("Successfully created data", { position: "top-center" });
    } catch (error) {
      console.error("Error creating food:", error);
      toast.error("Error occurred while creating data", {
        position: "top-center",
      });
    }
  };

  return (
    <div className="w-8/12">
      <h3 className="text-2xl font-semibold">Create Food Item</h3>
      <div className="mt-8">
        <ToastContainer />

        <form onSubmit={handleForm}>
          <div className="flex gap-8">
            <div>
              <label htmlFor="ProductName">Food Name</label>
              <input
                type="text"
                name="ProductName"
                value={productList.ProductName}
                onChange={InputValue}
                className="mt-2 w-full outline-none border border-indigo-400 rounded p-2"
                placeholder="Add Food Name"
              />
            </div>
            <div>
              <label htmlFor="ProductCode">Food Code</label>
              <input
                type="text"
                name="ProductCode"
                value={productList.ProductCode}
                onChange={InputValue}
                className="mt-2 w-full outline-none border border-indigo-400 rounded p-2"
                placeholder="Add Food Code"
              />
            </div>
            <div>
              <label htmlFor="Img">Food Image</label>
              <input
                type="text"
                name="Img"
                value={productList.Img}
                onChange={InputValue}
                className="mt-2 w-full outline-none border border-indigo-400 rounded p-2"
                placeholder="Add Food Image"
              />
            </div>
          </div>
          <div className="flex gap-8 mt-8">
            <div>
              <label htmlFor="Category">Food Category</label>
              <input
                type="text"
                name="Category"
                value={productList.Category}
                onChange={InputValue}
                className="mt-2 w-full outline-none border border-indigo-400 rounded p-2"
                placeholder="Category"
              />
            </div>
            <div>
              <label htmlFor="Qty">QTY</label>
              <input
                type="text"
                name="Qty"
                value={productList.Qty}
                onChange={InputValue}
                className="mt-2 w-full outline-none border border-indigo-400 rounded p-2"
                placeholder="Quantity"
              />
            </div>
            <div>
              <label htmlFor="Price">Price</label>
              <input
                type="text"
                name="Price"
                value={productList.Price}
                onChange={InputValue}
                className="mt-2 w-full outline-none border border-indigo-400 rounded p-2"
                placeholder="Price"
              />
            </div>
          </div>
          <button
            type="submit"
            className="capitalize text-base bg-violet-600 px-8 py-2 text-white rounded hover:bg-pink-500 mt-8"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateFood;
