import React, { useEffect, useState } from 'react'
import sanityClient from 'client'
import { useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../hooks/useTypedSelector'

import { Cart } from '../../modules/Cart/Cart'
import { CategoryLink } from '../Category/CategoryLink/CategoryLink'
import { cartActions } from '../../store/Cart'
import { AboutUs } from '../../shared/Aboutus/AboutUs'
import { RecomendedProducts } from 'modules/RecomendedProducts/RecomendedProducts'

import photo1 from 'Assets/products/product-zx9-speaker/mobile/image-gallery-1.jpg'
import photo2 from 'Assets/products/product-zx9-speaker/mobile/image-gallery-2.jpg'
import photo3 from 'Assets/products/product-zx9-speaker/mobile/image-gallery-3.jpg'

type Product = {
  _id: number
  name: string
  shortName: string
  price: number
  description: string
  feature1: string
  feature2: string
  imageDesktop: string
  imageMobile: string
  imageCart: string
  contents: {
    name: string
    quantity: number
  }[]
  category: {
    name: string
  }
}

export const ProductCard = () => {
  const [product, setProduct] = useState<Product | undefined>(undefined)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const { id } = useParams()
  const [quantity, setQuantity] = useState(1)
  const dispatch = useAppDispatch()
  const showCart = useSelector((state: any) => state.ui.cartIsVisible)
  const navigate = useNavigate()

  const addToCart = () => {
    if (product) {
      dispatch(cartActions.addItem({ quantity, product: product as Product }))
      setQuantity(1)
    }
  }

  useEffect(() => {
    const fetchProducts = async () => {
      if (!id) {
        return null
      }
      setIsLoading(true)
      const query = `*[_type == "products" && slug.current == "${id}"]{_id,name,shortName,
					price,
					  slug,
					description,
					feature1,
					feature2,
					contents,
					"imageDesktop": imageDesktop.asset->url,
					"imageMobile": imageMobile.asset->url,
					"imageCart": imageCart.asset->url,
					category[]->{
					  name,
					}
				  }[0]`
      const response = await sanityClient.fetch(query)
      if (!response) {
        setError(true)
        setIsLoading(false)
      } else {
        setProduct(response)
        setIsLoading(false)
      }
    }

    fetchProducts()
  }, [id])

  if (isLoading) {
    return <h1>Loading...............</h1>
  }

  if (error) {
    return <h1>Mordo, nie mam takiego produktu</h1>
  }

  return (
    <div className="flex flex-col items-center w-full mb-4">
      {showCart && <Cart />}
      <div className="flex w-full items-center justify-center py-4">
        <button
          onClick={() => navigate(-1)}
          className="w-3/4 text-[#808080] text-sm text-left"
        >
          Go Back
        </button>
      </div>
      <div className="flex flex-col w-full justify-between items-center">
        <div className=" w-3/4 flex flex-col justify-center items-center rounded-xl">
          <img
            src={product?.imageMobile}
            alt="Zdjecie produktu"
            className="mt-4 rounded-xl"
          />
          <div className="flex flex-col items-start">
            <p className="py-4  text-[#fbaf85] tracking-widest">NEW PRODUCT</p>
            <p className="text-[#101010] text-2xl font-bold pb-4 text-left">
              {product?.name}
            </p>
            <p className="text-[#808080] text-sm text-left">
              {product?.description}
            </p>
            <p className="text-[#101010] text-2xl font-bold pt-4">
              $ {product?.price?.toLocaleString('en-US')}
            </p>
          </div>
        </div>
        <div className="flex w-3/4 justify-between mt-4 mb-20">
          <div className="flex justify-between w-1/3 bg-[#F1F1F1] space-x-2">
            <button
              className="px-2 py-1 bg-[#F1F1F1]"
              onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
            >
              -
            </button>
            <div className="flex justify-center items-center">
              <p className="px-2 py-1">{quantity}</p>
            </div>
            <button
              className="px-2 py-1 bg-[#F1F1F1] "
              onClick={() => setQuantity((prev) => prev + 1)}
            >
              +
            </button>
          </div>
          <div className=" flex justify-start w-2/4">
            <button
              className="w-full py-2 bg-[#D87D4A] text-white hover:bg-[#fbaf85]"
              onClick={addToCart}
            >
              <p>Add to cart</p>
            </button>
          </div>
        </div>
        <div className="w-3/4 flex flex-col">
          <p className="font-bold text-2xl text-left">FEATURES</p>
          <p className="text-left text-[#808080] my-4 text-base">
            {product?.feature1}
          </p>
          <p className="text-left text-[#808080] my-4 text-base">
            {product?.feature2}
          </p>
        </div>
        <div className="w-3/4 flex flex-col">
          <p className="font-bold text-2xl text-left my-2">IN THE BOX</p>
          <ul>
            {product?.contents.map((item) => (
              <li className="flex justify-between mb-2">
                <p className="w-1/5 text-left text-[#fbaf85]">{`${item.quantity}x`}</p>
                <p className="w-4/5 text-left text-[#808080]">{item.name}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-3/4 flex flex-col justify-between my-8">
          <img src={photo1} alt="photo1" className=" rounded-md mb-4" />
          <img src={photo2} alt="photo2" className=" rounded-md mb-4" />
          <img src={photo3} alt="photo3" className=" rounded-md mb-4" />
        </div>
      </div>
      <RecomendedProducts />
      <CategoryLink />
      <AboutUs />
    </div>
  )
}