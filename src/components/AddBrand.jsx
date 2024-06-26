import React, { useContext, useState } from 'react'
import { ApiContext } from '../context/ApiContext';
// import backgroundimg from './../assets/shopping-cart-black-background-with-copy-space.jpg';
import backgroundimg from './../assets/shopping-cart-filled-with-coins-copy-space-background.jpg';



const AddBrand = () => {
    const [brand,setBrand] = useState('');
    const [brandDetails,setBrandDetails] = useState('');
    const {addBrand} = useContext(ApiContext)
    const style = {
      // backgroundImage: `url(${backgroundimg})`, // Use the imported image
      // backgroundSize: 'cover',
      // backgroundPosition: 'center',
      // height: '100vh', // Set the desired height for the component
      marginTop:"120px",
    };
  return (
    <div style={style}>
      <div className="container  d-flex justify-content-center align-items-center" >
      <div className="row">
        <div className="col-lg-12 w-100 border border-black shadow-lg p-5">
       
        <div class="mb-3">
          <h3 className='text-center'>Add Brand</h3>
   <label for="exampleInputProduct" class="form-label">Brand Name</label>
   <input type="text" class="form-control" id="exampleInputProduct" aria-describedby="emailHelp" value={brand} onChange={(e) => setBrand(e.target.value)} />
  </div>
  <div class="mb-3">
   <label for="exampleInputProductDetails" class="form-label">Brand Details</label>
   <textarea cols="30" rows="2" className="form-control" id='exampleInputProductDetails' value={brandDetails} onChange={(e) => setBrandDetails(e.target.value)}></textarea>
  </div>
  {/* <div className='d-flex justify-content-center text-center '> */}
  <button type="submit" className="btn btn-dark  w-100 " onClick={()=>{addBrand(brand,setBrand,brandDetails,setBrandDetails)}}>Submit</button>
  {/* </div> */}
      
        </div>
      </div>
   </div>
    </div>
  )
}

export default AddBrand
