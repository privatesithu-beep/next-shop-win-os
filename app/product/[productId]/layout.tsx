import React from "react";

// export default async function ProdcutDetailsLayout({
//   children,
//   params,
// }: Readonly<{
//   children: React.ReactNode;
//   params: Promise<{ productId: string }>;
// }>): Promise<React.ReactElement> {

export default async function ProdcutDetailsLayout(
  props: LayoutProps<"/product/[productId]">,
) {
  //   const { productId } = await params;
  const { productId } = await props.params;
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div>ProdcutDetailsLayout Header : {productId}</div>
      {props.children}
      <div>ProdcutDetailsLayout footer</div>
    </div>
  );
}
