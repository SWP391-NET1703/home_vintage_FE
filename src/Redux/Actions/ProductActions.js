import { PRODUCT_DETAIL_FAIL, PRODUCT_DETAIL_REQUEST, PRODUCT_DETAIL_SUCCESS, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "Redux/Constants/ProductConstants";
import { data } from "autoprefixer";
import axios from "axios";
import { useState } from "react";


//PRODUCT LIST
export const listProduct = () => async (dispatch) => {
  try {
    dispatch({type: PRODUCT_LIST_REQUEST});
    const {data} = await axios.get(`http://localhost:4000/interiors/best-seller`);
    // const {data} = product.list_interior.best_seller
    dispatch({type: PRODUCT_LIST_SUCCESS, payload: data});
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
  console.log("hihi")
};

//SINGLE PRODUCT
export const listProductDetails = (_id) => async (dispatch) => {
  try {
    dispatch({type: PRODUCT_DETAIL_REQUEST});
    const {data} = await axios.get(`http://localhost:4000/interiors/${_id}`);
    // const {data} = product.DETAIL_interior.best_seller
    dispatch({type: PRODUCT_DETAIL_SUCCESS, payload: data});
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
  console.log("hihi")
};