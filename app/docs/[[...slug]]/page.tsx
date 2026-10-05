import React from "react";

async function Docs({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;

  return (
    <>
      {slug?.length === 2 ? (
        <p>
          Title - {slug[0]} & (subtitle - {slug[1]})
        </p>
      ) : slug?.length === 1 ? (
        <p>Title - {slug[0]}</p>
      ) : (
        <p>Docs page</p>
      )}
    </>
  );
}

export default Docs;
