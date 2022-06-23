import React from "react";
import CardWartaJemaat from "./CardWartaJemaat";

const WartaJemaat = () => {
  return (
    <section>
      <div className=" bg-slate-100 mx-10">
        <h1 className="text-2xl font-semibold font-mono text-center">
          Warta Jemaat
        </h1>
        <h4 className="text-2 font-semibold font-mono text-center">
          JANGANLAH KITA MENJAUHKAN DIRI DARI PERTEMUAN-PERTEMUAN IBADAH KITA,
          SEPERTI DIBIASAKAN OLEH BEBERAPA ORANG, TETAPI MARILAH KITA SALING
          MENASIHATI, DAN SEMAKIN GIAT MELAKUKANNYA MENJELANG HARI TUHAN YANG
          MENDEKAT. IBRANI 10:25
        </h4>
        <CardWartaJemaat />
      </div>
    </section>
  );
};
export default WartaJemaat;
