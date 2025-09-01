import React, { useContext, useState } from 'react'
import Nav from "../components/Nav.jsx"
import Sidebar from "../components/Sidebar.jsx"
import uploadImg from '../assets/uploadimg.png' 
import { authDataContext } from '../context/AuthContext.jsx'
import axios from 'axios'

function Add() {
  let [image1, setImage1] = useState(false)
  let [image2, setImage2] = useState(false)
  let [image3, setImage3] = useState(false)
  let [image4, setImage4] = useState(false)
  const [name, setName] = useState("")
  const [data, setData] = useState("") // ✅ added for schema
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("Men")
  const [price, setPrice] = useState("")
  const [subCategory, setSubCategory] = useState("TopWear")
  const [bestseller, setBestseller] = useState(false)
  const [seizes, setSizes] = useState([])
  let { serverUrl } = useContext(authDataContext)

  const handleAddProduct = async (e) => {
    e.preventDefault()

    try {
      let formData = new FormData()

      formData.append("name", name)
      formData.append("data", data) // ✅ matches schema
      formData.append("description", description) // ✅ fixed spelling
      formData.append("price", price)
      formData.append("category", category)
      formData.append("subCategory", subCategory)
      formData.append("bestseller", bestseller)
      formData.append("sizes", JSON.stringify(seizes))
      formData.append("image1", image1)
      formData.append("image2", image2)
      formData.append("image3", image3)
      formData.append("image4", image4)

      let result = await axios.post(
        serverUrl + "/api/product/addProduct",
        formData,
        { withCredentials: true }
      )

      console.log(result.data)

      if (result.data) {
        setName("")
        setData("")
        setDescription("")
        setImage1(false)
        setImage2(false)
        setImage3(false)
        setImage4(false)
        setPrice("")
        setBestseller(false)
        setCategory("Men")
        setSubCategory("TopWear")
        setSizes([])
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='w-[100vw] min-h-[100vh] bg-gradient-to-l  text-[white] overflow-x-hidden relative'>
      <Nav />
      <Sidebar />

      <div className='w-[82%] h-[100%] absolute right-0 overflow-x-hidden bottom-[5%]'>
        <form
          onSubmit={handleAddProduct}
          className='w-full md:w-[90%] mt-[70px] flex flex-col gap-[30px] py-[60px] px-[30px] md:px-[60px]'
        >
          <div className='w-[400px] h-[50px] text-[25px] md:text-[40px] text-white'>
            Add Product Page
          </div>

          {/* Upload Images */}
          <div className='w-[80%] h-[130px] flex items-start justify-center flex-col mt-[20px] gap-[10px]'>
            <p className='text-[20px] md:text-[25px] font-semibold'>Upload Images</p>
            <div className='w-[100%] h-[100%] flex items-center justify-start'>
              {[1, 2, 3, 4].map((num) => (
                <label
                  key={num}
                  htmlFor={`image${num}`}
                  className='w-[65px] h-[65px] md:w-[100px] md:h-[100px] cursor-pointer hover:border-[#46d1f7]'
                >
                  <img
                    src={
                      !eval(`image${num}`)
                        ? uploadImg
                        : URL.createObjectURL(eval(`image${num}`))
                    }
                    alt=''
                    className='w-[80%] h-[80%] rounded-lg shadow-2xl hover:border-[#1d1d1d] border-[2px]'
                  />
                  <input
                    type='file'
                    id={`image${num}`}
                    hidden
                    onChange={(e) => eval(`setImage${num}`)(e.target.files[0])}
                    required
                  />
                </label>
              ))}
            </div>
          </div>

          {/* Product Name */}
          <div className='w-[80%] h-[100px] flex items-start justify-center flex-col gap-[10px]'>
            <p className='text-[20px] md:text-[25px] font-semibold'>
              Product Name
            </p>
            <input
              type='text'
              placeholder='Type Here'
              className='w-[600px] max-w-[98%] h-[40px] rounded-lg hover:border-[#46d187] border-[2px] cursor-pointer bg-black px-[20px] text-[18px] placeholder:text-[#ffffffc2]'
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </div>

          

          {/* Description */}
          <div className='w-[80%] flex items-start justify-center flex-col gap-[10px]'>
            <p className='text-[20px] md:text-[25px] font-semibold'>
              Product Description
            </p>
            <textarea
              placeholder='Type Here'
              className='w-[600px] max-w-[98%] h-[100px] rounded-lg hover:border-[#46d187] border-[2px] py-[10px] cursor-pointer bg-black px-[20px] text-[18px] placeholder:text-[#ffffffc2]'
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              required
            />
          </div>

          {/* Category & Sub-Category */}
          <div className='w-[80%] flex items-center gap-[10px] flex-wrap'>
            <div className='md:w-[30%] w-[100%] flex items-start sm:justify-center flex-col gap-[10px]'>
              <p className='text-[20px] md:text-[25px] font-semibold w-[100%]'>
                Product Category
              </p>
              <select
                className='bg-black w-[150px] px-[10px] py-[7px] rounded-lg hover:border-[#46d1f7] border-[2px]'
                onChange={(e) => setCategory(e.target.value)}
                value={category}
                required
              >
                <option value='Men'>Men</option>
                <option value='Women'>Women</option>
                <option value='Kids'>Kids</option>
              </select>
            </div>

            <div className='md:w-[30%] w-[100%] flex items-start sm:justify-center flex-col gap-[10px]'>
              <p className='text-[20px] md:text-[25px] font-semibold w-[100%]'>
                Sub-Category
              </p>
              <select
                className='bg-black w-[150px] px-[10px] py-[7px] rounded-lg hover:border-[#46d1f7] border-[2px]'
                onChange={(e) => setSubCategory(e.target.value)}
                value={subCategory}
                required
              >
                <option value='TopWear'>TopWear</option>
                <option value='BottomWear'>BottomWear</option>
                <option value='WinterWear'>WinterWear</option>
              </select>
            </div>
          </div>

          {/* Price */}
          <div className='w-[80%] h-[100px] flex items-start justify-center flex-col gap-[10px]'>
            <p className='text-[20px] md:text-[25px] font-semibold'>
              Product Price
            </p>
            <input
              type='number'
              placeholder='$15.5'
              className='w-[600px] max-w-[98%] h-[40px] rounded-lg hover:border-[#46d187] border-[2px] cursor-pointer bg-black px-[20px] text-[18px] placeholder:text-[#ffffffc2]'
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              required
            />
          </div>

          {/* Sizes */}
          <div className='w-[80%] h-[220px] md:h-[100px] flex items-start justify-center flex-col gap-[10px] py-[10px] md:py-[0]'>
            <p className='text-[20px] md:text-[25px] font-semibold'>Product Size</p>
            <div className='flex items-center justify-start gap-[15px] flex-wrap'>
              {["S", "M", "L", "XL", "XXL"].map((size) => (
                <div
                  key={size}
                  className={`px-[20px] py-[7px] rounded-lg bg-black text-[18px] hover:border-[#46f1d7] border-[2px] cursor-pointer ${
                    seizes.includes(size)
                      ? "bg-green-400 text-black border-[#46d1f7]"
                      : ""
                  }`}
                  onClick={() =>
                    setSizes((prev) =>
                      prev.includes(size)
                        ? prev.filter((item) => item !== size)
                        : [...prev, size]
                    )
                  }
                >
                  {size}
                </div>
              ))}
            </div>
          </div>

          {/* Bestseller */}
          <div className='w-[80%] flex items-center justify-start gap-[10px] mt-[20px] text-black'>
            <input
              type='checkbox'
              id='checkbox'
              className='w-[25px] h-[25px] cursor-pointer'
              onChange={() => setBestseller((prev) => !prev)}
              checked={bestseller}
            />
            <label
              htmlFor='checkbox'
              className='text-[18px] md:text-[22px] font-semibold'
            >
              Add To BestSeller
            </label>
          </div>

          <button className='w-[140px] px-[20px] py-[20px] rounded-xl bg-black flex items-center justify-center gap-[10px] text-white active:bg-white active:text-black active:border-[2px] border-white'>
            Add Product
          </button>
        </form>
      </div>
    </div>
  )
}

export default Add
