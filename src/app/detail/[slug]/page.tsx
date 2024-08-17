import React from "react";

const DetailPage = ({ params }: { params: { slug: string } }) => {
  return (
    <div className="mx-auto h-screen flex flex-col items-center justify-center">
      <p>Ini siapa yang nulis?</p>
      <p>Yang nulis : {params.slug}</p>
    </div>
  );
};

export default DetailPage;
