import React, { createContext, useState, useEffect } from 'react';

export const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [brand, setBrand] = useState([]);
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [cartLength, setCartLength] = useState([]);

  const reloadCart = () => {
    console.log("Reload cart");
    setIsLoading(true)
    getCart();
  }

  const getBrand = async () => {
    try {
      const response = await fetch('https://cybotrix.com/webapi/brand/getall');
      const jsonData = await response.json();
      // console.log(jsonData);
      setBrand(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setIsLoading(false);
    }
  }

  const addBrand = (brand,setBrand,brandDetails,setBrandDetails) => {
    // console.log(product,productDetails);
    let url = "https://cybotrix.com/webapi/brand/save";
    let newbrand = {"brandname":brand,"details":brandDetails};
    let postdata = {
        headers:{'content-type':'application/json'},
        method:"post",
        body:JSON.stringify(newbrand)
    }
    fetch(url, postdata)
    .then(response=>response.text())
    .then(msg=>{
        alert(msg);
        setBrand('');
        setBrandDetails('');
        console.log(msg)
    })
  };

  const deleteBrand = (brandid) => {
    let url = "https://cybotrix.com/webapi/brand/deleteone";
    let newbrand = { id: brandid }; 
    let postdata = {
      headers: { "content-type": "application/json" },
      method: "post",
      body: JSON.stringify(newbrand),
    };
    fetch(url, postdata)
      .then((response) => response.text())
      .then((msg) => {
        alert(msg);
        getProduct();
      });
  };

  const addCategory = (category,categoryDetails,active,urlA,setCategory,setActive,setCategoryDetails,setUrl) => {
    if (category === '' || categoryDetails === '' || active === '' || urlA === '') {
      alert('Please fill all the fields')
    }
    else {
      let url = "https://cybotrix.com/webapi/category/save";
      let newcategory = {
        "categoryname": category,
        "categorydetails": categoryDetails,
        "active": active,
        "url": urlA
      };
      let postdata = {
        headers: { 'content-type': 'application/json' },
        method: "post",
        body: JSON.stringify(newcategory)
      }
      fetch(url, postdata)
        .then(response => response.text())
        .then(msg => {
          alert(msg);
          setActive('');
          setCategory('');
          setCategoryDetails('');
          setUrl('')
          console.log(msg)
        })
    }
  }

  const getCategory = async () => {
    try {
      const response = await fetch('https://cybotrix.com/webapi/category/getall');
      const jsonData = await response.json();
      console.log(jsonData);
      setCategory(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setIsLoading(false);
    }
  }

  const deleteCategory = (catid) =>{
    let url = "https://cybotrix.com/webapi/category/deleteone";
    let newcategory = { id: catid }; 
    let postdata = {
      headers: { "content-type": "application/json" },
      method: "post",
      body: JSON.stringify(newcategory),
    };
    fetch(url, postdata)
      .then((response) => response.text())
      .then((msg) => {
        alert(msg);
        getCategory();
      });
  }

  const getProduct = async () => {
    try {
      const response = await fetch('https://cybotrix.com/webapi/product/getall');
      const jsonData = await response.json();
      console.log(jsonData)
      setProduct(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };


  const getOrderId = () => {
    // console.log(orderid)
    if (localStorage.getItem("orderid") == null) {
      let orderid = Math.ceil(Math.random() * 7326074744);
      localStorage.setItem("orderid", orderid);
    }
  }


  const getCart = async () => {
    console.log(localStorage.getItem("orderid"))
    const cartItem = {
      // orderid:localStorage.getItem("orderid") ,
      orderid: localStorage.getItem("orderid"),
      // orderid:"7008525309"
    };
    let postData = {
      headers: { "content-type": "application/json" },
      method: "POST",
      body: JSON.stringify(cartItem),
    };
    try {
      const response = await fetch("https://cybotrix.com/webapi/cart/getcartitem", postData)
      const jsonData = await response.json();
      setCart(jsonData);
      setCartLength(cart.length)
      // localStorage.setItem('cartLength' , cart.length)
      console.log(cart)
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const getCartLength = () => {
    return cart.length;
  }

  const getTotal = () => {

  }
  useEffect(() => {

    getProduct();
    getCategory();
    getBrand();
    getCart();
    getTotal();
    getCartLength();
    getOrderId();
  }, []);

  return <ApiContext.Provider value={{ product, isLoading, category, brand, cart, reloadCart, getCartLength, getCart ,addCategory , deleteCategory , addBrand  ,deleteBrand}}>
    {children}
  </ApiContext.Provider>;
};