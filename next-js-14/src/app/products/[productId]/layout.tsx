import React from 'react'

const ProductDetailsLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
      <h4>Products heading</h4>
      {children}
    </div>
  )
}

export default ProductDetailsLayout