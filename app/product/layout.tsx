import React from "react";

export default function ProdcutLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div>P Header</div>
      {children}
      <div>P footer</div>
    </div>
  );
}
