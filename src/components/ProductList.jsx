import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import CategoryList from './CategoryList';

const ProductList = () => {
    const [product,setProduct] = useState([]);
    // console.log(product)
  const [keyword, setKeyword] = useState("");
  const [productList,setProductList] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [brandList, setBrandList] = useState([]);
  const [bId , setBId] = useState("");
  const [cId , setCId] = useState("");

  const getBrand = () =>{
    fetch("https://cybotrix.com/webapi/product/getall")
    .then((res) => res.json())
    .then((itemList) =>{
        setProduct(itemList);
        // console.log(itemList)
    })
}




  const getProduct = () => {
    fetch("https://cybotrix.com/webapi/brand/getall")
      .then((res) => res.json())
      .then((itemlist) => {
        setBrandList(itemlist);
      });
  };



  const getCategory = () => {
    fetch("https://cybotrix.com/webapi/category/getall")
    .then((res) => res.json())
    .then((itemList) =>{
        setCategoryList(itemList)
    })
}



  
  


 



  const deleteBrand = (productid) =>{
    let url = "https://cybotrix.com/webapi/product/deleteone";
    let newcat = {id:productid}; // pass productid
    let postdata = {
        headers:{'content-type':'application/json'},
        method:"post",
        body:JSON.stringify(newcat)
    }
    fetch(url, postdata)
    .then(response=>response.text())
    .then(msg=>{
        alert(msg);
        getBrand();
    })
}

useEffect(() => {
    getBrand();
    getCategory();
    getProduct();
  }, [1]);
  


  const searchproduct = (categoryid="", brandid="") =>{
    let url = "https://cybotrix.com/webapi/product/searchproduct";
    let newcat = {categoryid:cId, brandid:bId}; // pass productid
    let postdata = {
        headers:{'content-type':'application/json'},
        method:"post",
        body:JSON.stringify(newcat)
    }
    fetch(url, postdata)
    .then(response=>response.json())
    .then(msg=>{
        setProduct(msg);
    })
}






  return (
    <div style={{marginTop:"120px"}}>
         <div className='d-flex justify-content-center'>
           <input
              type="text"
              className="form-control border border-black w-25 m-4"
              placeholder="Search...."
              onChange={(e) => setKeyword(e.target.value)}
              value={keyword}
            />
             <select className="form-control w-25 m-4 border border-black"   onChange={(e) => setBId(e.target.value)}>
              <option >Choose by brand</option>
                {  
                    brandList.map((item,index)=>{
                        return(
                            <option value={item.brandid} key={index}>{item.brandname}-{item.brandid}</option>
                        )
                    })
                }
             </select>
              <select className="form-control w-25 m-4 border border-black"  onChange={(e) => setCId(e.target.value)}>
                <option >Choose by category</option>
                {
                    categoryList.map((item,index)=>{
                        return(
                            <option value={item.catid} key={index}>{item.categoryname}-{item.catid}</option>
                        )
                    })
                }
              </select>
              <button className='btn btn-dark w-25 m-4' onClick={searchproduct}>Search</button>
         </div>
      <Table striped hover variant='light'>
        <thead>
            <tr>
              <th>Product ID</th>  
              <th>Brand ID</th>  
              <th>Category ID</th>  
              <th>Product Name</th>  
              <th>Product Price</th>  
              <th>Product quantity</th>  
              {/* <th>Product Photo</th>   */}
              <th>Product Details</th>  
              <th>Product URL</th>  
              <th>Action</th>  
            </tr>
        </thead>
        <tbody>
          {
             product.map((item,index)=>{
                if (
                    item.productname.toLowerCase().match(keyword.toLowerCase()) ||
                    item.details.toString().match(keyword) || item.url.toString().match(keyword) || item.price.toString().match(keyword) || item.quantity.toString().match(keyword) || item.photo.toString().match(keyword) 
                  )
              return(
                <tr key={index}>
                    <td>{item.productid}</td>
                    <td>{item.brandid}</td>
                    <td>{item.categoryid}</td>
                    <td>{item.productname}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                    {/* <td>{item.photo}</td> */}
                    <td>{item.details}</td>
                    <td>{item.url}</td>
                    <td>
                    <FaEdit className="text-primary mx-2"/> 
                    <MdDelete  className="text-danger"
                      onClick={deleteBrand.bind(this, item.productid)}
                    />
                    </td>
                </tr>
              )  
          })}
        </tbody>
      </Table>
    </div>
  )
}

export default ProductList
