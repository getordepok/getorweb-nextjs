import React from "react";
import CardLiturgiKeluarga from "./CardLiturgiKeluarga";

const LiturgiKeluarga = () => {
  return (
    <section>
      <div className=" bg-white mx-10">
        <h1 className="text-2xl font-semibold font-mono text-center mt-10">
          LITURGI KELUARGA
        </h1>
        <h4 className="text-2 font-semibold font-mono text-center">
          TETAPI AKU DAN SEISI RUMAHKU, KAMI AKAN BERIBADAH KEPADA TUHAN! YOSUA
          24:15
        </h4>
        <CardLiturgiKeluarga />
      </div>
    </section>
  );
};
export default LiturgiKeluarga;
