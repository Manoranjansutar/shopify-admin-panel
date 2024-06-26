import React, { useEffect, useState } from 'react'


const AddProduct = () => {
    const [productName,setProductName] = useState("");
    const [productPhoto,setProductPhoto] = useState("");
    const [productDetails,setProductDetails] = useState("");
    const [productPrice,setProductPrice] = useState("");
    const [productQuantity,setProductQuantity] = useState("");
    const [productList,setProductList] = useState([]);
    const [catl,setCatl] = useState('');
    const [brandl,setBrandl] = useState('');
    const [categoryList,setCategoryList] = useState([]);


    const save = () =>{
        // console.log(productDetails,productPhoto,productPrice,productQuantity,productName,catl,brandl);
        let url = "https://cybotrix.com/webapi/product/save";
        let newproduct = {
		"productname":productName, 
		"categoryid": catl, 
		"brandid":brandl, 
		"price":productPrice,
		"quantity":productQuantity,
		"photo":productPhoto,
		"details":productDetails
		};
        let postdata = {
            headers:{'content-type':'application/json'},
            method:"post",
            body:JSON.stringify(newproduct)
        }
        fetch(url, postdata)
        .then(response=>response.text())
        .then(msg=>{
            setProductDetails('');
            setProductName('')
            setProductPhoto('');
            setProductPrice('')
            setProductQuantity('')
            setCatl('')
            setBrandl('')
            alert(msg);
        })
    }



    const getCategory = () => {
        fetch("https://cybotrix.com/webapi/category/getall")
        .then((res) => res.json())
        .then((itemList) =>{
            setCategoryList(itemList)
            // console.log(setCategoryList)
        })
    }

    const getProduct = () =>{
        fetch('https://cybotrix.com/webapi/brand/getall')
        .then((res)=>res.json())
        .then((itemlist) => {
           setProductList(itemlist)
        })
   }

    useEffect(() => {
        getCategory();
        getProduct()
      }, []);


  return (
    <div className="container " style={{marginTop:"120px",backgroundColor:"rgba(255,255,255,.2)"}}>
    <div className="row">
     <div className="col-lg-12 flex-center" >
          <div className="col-lg-2"></div>
          <div className="col-lg-8 border border-dark shadow-lg p-5">
          <h1 className="text-center mb-3">Add Product</h1>
                <div className="form-group row">
                  <label for="categoryName" className="col-sm-2 col-form-label">
                    Product Name
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control"
                      id="categoryName"
                      placeholder="Enter Product Name"
                      value={productName}
                      onChange={(e) => setProductName(e.target.value)}
                    />
                  </div>
                </div>
                <div class="form-group row mt-3">
                  <label for="price" className="col-sm-2 col-form-label">
                    Price
                  </label>
                  <div class="col-sm-10">
                   <input type="number" className="form-control" id='price' accordion
                   value={productPrice} placeholder="Enter Product Price "
                   onChange={(e)=>setProductPrice(e.target.value)}/>
                  </div>
                </div>
                <div class="form-group row mt-3">
                  <label for="quantity" className="col-sm-2 col-form-label">
                    Quantity
                  </label>
                  <div class="col-sm-10">
                  <input
                      type="number"
                      className="form-control"
                      id="quantity"
                      value={productQuantity}
                      onChange={(e) => setProductQuantity(e.target.value)}
                      placeholder="Enter Product Quantity"
                    />
                  </div>
                </div>
                <div class="form-group row mt-3">
                  <label for="photo" className="col-sm-2 col-form-label">
                    Photo
                  </label>
                  <div class="col-sm-10">
                  <input type="text" className="form-control" id='photo'
                  value={productPhoto}
                  onChange={(e)=>setProductPhoto(e.target.value)} placeholder="Enter Photo "/>
                  </div>
                </div>
                <div class="form-group row mt-3">
                  <label for="details" className="col-sm-2 col-form-label">
                    Details
                  </label>
                  <div class="col-sm-10">
                  <input type="text" className="form-control" id='details' 
                  value={productDetails} onChange={(e)=>setProductDetails(e.target.value)} placeholder="Enter Product Details"/>
                  </div>
                </div>
    
                <div class="form-group row mt-3">
                  <label for="cateID" className="col-sm-2 col-form-label">
                    Category ID
                  </label>
                  <div class="col-sm-10">
                    <select className='form-select' onChange={(e)=>setCatl(e.target.value)}>
                        <option className='form-select'  >Select Category</option>
                        {
                           
                            categoryList.map((cat,index) =>{
                                return(
                                    <option key={index} value={cat.catid}>{cat.categoryname}</option>
                                )
                            })
                        }
                      
                    </select>
                  </div>
                </div>
    
                <div class="form-group row mt-3">
                  <label for="cateID" className="col-sm-2 col-form-label">
                    Brand ID
                  </label>
                  <div class="col-sm-10">
                    <select className='form-select' onChange={(e)=>setBrandl(e.target.value)}>
                        <option className='form-select'  >Select Brand</option>
                        {
                           
                            productList.map((brand,index) =>{
                                return(
                                    <option key={index} value={brand.brandid}>{brand.brandname}</option>
                                )
                            })
                        }
                    </select>
                  </div>
                </div>
                
               
                <div class="form-group row mt-3">
                  <label  className="col-sm-2 col-form-label">
                  </label>
                  <div class="col-sm-10">
                  <button  className="btn btn-dark w-100" onClick={save}>Submit</button>
                  </div>
                </div>
          </div>
          <div className="col-lg-2"></div>
     </div>
    </div>
  </div>
  )
}

export default AddProduct
