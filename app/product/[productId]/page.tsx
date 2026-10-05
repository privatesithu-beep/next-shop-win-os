// async function ProductDetails({
//   params,
// }: {
//   params: Promise<{ productId: string }>;
// }) {
//   const { productId } = await params;
//   return <div>ProductDetails : {productId}</div>;
// }

// export default ProductDetails;

async function ProductDetails(props: PageProps<"/product/[productId]">) {
  const { productId } = await props.params;
  return <div>ProductDetails : {productId}</div>;
}

export default ProductDetails;
