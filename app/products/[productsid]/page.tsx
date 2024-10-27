
export default function ProductDetails( {params}: {
    params: {productsid: string} 
} ) {
  return (
    <div>details about product {params.productsid}</div>
  )
}
