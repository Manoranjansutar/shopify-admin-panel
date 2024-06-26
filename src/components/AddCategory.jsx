import React, { useContext, useState } from 'react'
import { ApiContext } from '../context/ApiContext';

const AddCategory = () => {
  const [category, setCategory] = useState('');
    const [categoryDetails, setCategoryDetails] = useState('');
    const [active, setActive] = useState('');
    const [urlA, setUrl] = useState('');
    const [categoryList, setCategoryList] = useState([]);


   const {addCategory} = useContext(ApiContext)





  return (
    <div className="container" style = {{marginTop:"100px"}}>
      <div className="row">
       {/* <div className="col-lg-12 " > */}
            <div className="col-lg-3"></div>
            <div className="col-lg-6 border border-black shadow-lg p-5">
            <h1 className="text-center text-black mb-4">Add Category</h1>
              <div className="form-group row">
                <label htmlFor="categoryName" className="col-sm-4 col-form-label text-black">
                  Category Name
                </label>
                <div className="col-sm-8">
                  <input
                    type="text"
                    className="form-control"
                    id="categoryName"
                    placeholder="Enter Category Name"
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                  />
                </div>
              </div>
              <div className="form-group row mt-3">
                <label htmlFor="active" className="col-sm-4 col-form-label text-black">
                  Active
                </label>
                <div className="col-sm-8">
                <select className="form-select" aria-label="Default select example" onChange={(e) => setActive(e.target.value)}>
                  <option >Select an option</option>
                   <option value="Yes">Yes</option>
                   <option value="No">No</option>
               </select>
                </div>
              </div>
              <div className="form-group row mt-3">
                <label htmlFor="url" className="col-sm-4 col-form-label text-black">
                  URL
                </label>
                <div className="col-sm-8">
                <input
                    type="text"
                    className="form-control"
                    id="mobile"
                    placeholder="Enter URL"
                    onChange={(e) => setUrl(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group row mt-3">
                <label htmlFor="categoryDetails" className="col-sm-4 col-form-label text-black">
                  Category Details
                </label>
                <div className="col-sm-8">
                <textarea cols="30" rows="5" className="form-control" id='categoryDetails' onChange={(e) => setCategoryDetails(e.target.value)}></textarea >
                </div>
              </div>
              <div className="form-group row mt-3">
                <label htmlFor="categoryDetails" className="col-sm-4 col-form-label text-black">
                </label>
              <div className="col-sm-8 flex-center">
              <button onClick={()=>{addCategory(category,categoryDetails,active,urlA,setCategory,setActive,setCategoryDetails,setUrl)}} className="btn btn-dark w-100">Submit</button>
              </div>
              </div>
            </div>
            <div className="col-lg-3"></div>
       </div>
      </div>
    // </div>
  )
}

export default AddCategory
