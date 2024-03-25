import React from 'react'
import { useSearchParams } from 'react-router-dom'

const ProductPage = () => {
    let [query, setQuery] = useSearchParams();
    console.log("쿼리값: " + query.get("q"), query.get("num"), query.get("page"))
  return (
    <div>
      <h1>ProductPage</h1>
    </div>
  )
}

export default ProductPage
