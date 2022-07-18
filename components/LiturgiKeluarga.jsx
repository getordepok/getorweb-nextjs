import React from "react";
import CardLiturgiKeluarga from "./Card/CardLiturgiKeluarga";

const LiturgiKeluarga = () => {
  return (
    <section className='w-10/12 mx-auto'>
      <div className=''>
        <h1 className='text-3xl font-semibold text-center mt-10'>
          LITURGI KELUARGA
        </h1>
        <h4 className='text-2 font-semibold text-center'>
          TETAPI AKU DAN SEISI RUMAHKU, KAMI AKAN BERIBADAH KEPADA TUHAN! YOSUA
          24:15
        </h4>
        <CardLiturgiKeluarga />
      </div>
    </section>
  );
};
export default LiturgiKeluarga;
