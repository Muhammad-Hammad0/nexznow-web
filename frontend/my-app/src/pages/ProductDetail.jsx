import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { shopDataContext } from '../contaxt/ShopContext'
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import RelatedProduct from '../component/RelatedProduct';

function ProductDetail() {
  let { productId } = useParams()
  let { products, currency, addToCart } = useContext(shopDataContext)
  let [producttData, setProductData] = useState(false)

  const [image, setImage] = useState('')
  const [image1, setImage1] = useState('')
  const [image2, setImage2] = useState('')
  const [image3, setImage3] = useState('')
  const [image4, setImage4] = useState('')
  const [size, setSize] = useState('')

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item)
        setImage1(item.image1)
        setImage2(item.image2)
        setImage3(item.image3)
        setImage4(item.image4)
        setImage(item.image1)
        return null
      }
    })
  }

  useEffect(() => {
    fetchProductData()
  }, [productId, products])

  return producttData ? (
    <div>
      <div className='w-[98.9vw] min-h-[120vh] flex items-center justify-start flex-col
        bg-gradient-to-l  gap-[20px] lg:flex-row'>

        {/* Image Thumbnails Section */}
        <div className='lg:w-[50vw] md:w-[90vw] lg:h-[90vh] h-[50vh] mt-[70px] flex items-center 
          justify-center gap-[30px] md:gap-[10px] flex-col-reverse lg:flex-row'>

          <div className='lg:w-[20%] md:w-[80%] lg:h-auto flex items-center
            justify-center gap-[20px] lg:gap-[20px] lg:flex-col flex-wrap'>

            {/* Image 1 */}
            <div className='md:w-[100px] w-[50px] h-[50px] md:h-[110px] bg-slate-300 
              border-[1px] border-[#80808049] rounded-md overflow-hidden'>
              <img src={image1} alt="" className='w-full h-full object-cover cursor-pointer rounded-md' onClick={() => setImage(image1)} />
            </div>

            {/* Image 2 */}
            <div className='md:w-[100px] w-[50px] h-[50px] md:h-[110px] bg-slate-300 
              border-[1px] border-[#80808049] rounded-md overflow-hidden'>
              <img src={image2} alt="" className='w-full h-full object-cover cursor-pointer rounded-md' onClick={() => setImage(image2)} />
            </div>

            {/* Image 3 */}
            <div className='md:w-[100px] w-[50px] h-[50px] md:h-[110px] bg-slate-300 
              border-[1px] border-[#80808049] rounded-md overflow-hidden'>
              <img src={image3} alt="" className='w-full h-full object-cover cursor-pointer rounded-md' onClick={() => setImage(image3)} />
            </div>

            {/* Image 4 */}
            <div className='md:w-[100px] w-[50px] h-[50px] md:h-[110px] bg-slate-300 
              border-[1px] border-[#80808049] rounded-md overflow-hidden'>
              <img src={image4} alt="" className='w-full h-full object-cover cursor-pointer rounded-md' onClick={() => setImage(image4)} />
            </div>

          </div>

          {/* Main Image */}
          <div className='lg:w-[60%] w-[80%] lg:h-[78%] h-[70%] border-[1px]
            border-[#80808049] rounded-md overflow-hidden'>
            <img src={image} alt="" className='w-[100%] lg:h-[100%] h-[100%] text-[30px] text-[black] text-center rounded-md object-fill' />
          </div>
        </div>

        {/* Product Info Section */}
        <div className='lg:w-[50vw] w-[100vw] lg:h-[75vh] h-[40vh] lg:mt-[80px] flex items-start justify-start
          flex-col py-[20px] px-[30px] md:pb-[20px] md:pl-[20px] lg:pl-[0px] lg:px-[0px] lg:py-[0px] gap-[10px]'>

          <h1 className='text-[40px] font-semibold text-[black]'>
            {producttData.name.toUpperCase()}
          </h1>

          {/* Rating */}
          <div className='flex items-center gap-[1px]'>
            <FaStar className='text-[20px] fill-[#FFD700]' />
            <FaStar className='text-[20px] fill-[#FFD700]' />
            <FaStar className='text-[20px] fill-[#FFD700]' />
            <FaStar className='text-[20px] fill-[#FFD700]' />
            <FaStarHalfAlt className='text-[20px] fill-[#FFD700]' />
            <p className='text-[18px] font-semibold pl-[5px] text-[white]'>(124)</p>
          </div>

          {/* Price */}
          <p className='text-[30px] font-semibold pl-[5px] text-[black]'>
            {currency} {producttData.price}
          </p>

          {/* Description */}
          <div className='w-[80%] md:w-[60%] text-[15px] font-semibold pl-[5px] text-[black]'>
            {producttData.description}
            Engineered for athletes who demand more from their gear, the NumSports Premium Performance Training T-Shirt is crafted from advanced moisture-wicking fabric that keeps you cool, dry, and comfortable even during the most intense sessions.
          </div>

          {/* Sizes */}
          <div className='flex flex-col gap-[10px] my-[10px]'>
            <p className='text-[25px] font-semibold pl-[5px] text-[black]'>Select Size</p>
            <div className='flex gap-[2px]'>
              {producttData.sizes.map((item, index) => (
                <button
                  key={index}
                  className={`border py-2 px-4 bg-slate-300 rounded-md 
                    ${item === size ? 'bg-[black] text-[#6697c3] text-[20px]' : ''}`}
                  onClick={() => setSize(item)}>
                  {item}
                </button>
              ))}
            </div>
            <button
              className='text-[15px] active:bg-slate-500 cursor-pointer bg-slate-600
                py-[10px] px-[20px] rounded-2xl mt-[10px] border-[1px] border-[#80808049] 
                text-[black] shadow-md shadow-[black]'
              onClick={() => addToCart(producttData._id, size)}>
              Add To Cart
            </button>
          </div>

          {/* Extra Info */}
          <div className='w-[100%] h-[1px] bg-slate-700'>
            <div className='w-[88%] text-[16px] text-[black]'>
              <p>100% Original Product.</p>
              <p>Cash On Delivery Is Available On This Product.</p>
              <p>Easy Return And Exchange Policy Within 7 Days.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Description & Related Products */}
      <div className='w-[100%] min-h-[70vh] bg-gradient-to-l 
        flex items-start justify-start flex-col overflow-x-hidden'>

        <div className='flex px-[20px] mt-[90px] lg:ml-[80px] ml-[0px] lg:mt-[0px]'>
          <p className=' px-5 py-3 text-sm text-[black]'>Description</p>
          <p className=' px-5 py-3 text-sm text-[black]'>Review(124)</p>
        </div>

        <div className='w-[80%] md:h-[150px] h-[220px]   text-[black] 
          md:text-[15px] lg:text-[20px] px-[10px] md:px-[30px] lg:ml-[100px] ml-[20px]'>
          <p className='w-[95%] h-[90%] flex items-center justify-center'>
            At NumSports, we’re more than just a sports store – we’re a community for athletes and active lifestyles. 
            Our mission is to provide top-notch sportswear, equipment, and accessories that help you push your limits 
            and achieve your goals. With a commitment to quality, affordability, and style, NumSports.
          </p>
        </div>

        <RelatedProduct
          category={producttData.category}
          subCategory={producttData.subCategory}
          currentProductId={producttData._id}
        />
      </div>
    </div>
  ) : (
    <div className='opacity-0'>Loading...</div>
  )
}

export default ProductDetail
