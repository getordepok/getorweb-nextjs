import React from "react";

const Information = () => {
  return (
    <section>
      <div className="grid grid-cols-3 bg-white mx-10 mt-10">
        <div className="flex flex-col px-6  bg-slate-100 ">
          <h2 className="text-xl font-bold font-mono text-center">
            SEJARAH GEREJA TORAJA JEMAAT DEPOK
          </h2>
          <p className="text-2 font-light font-mono text-center mt-5">
            GEREJA TORAJA JEMAAT DEPOK BERDIRI PADA BULAN MEI TAHUN 2005. DAHULU
            MERUPAKAN CAB. KEBAKTIAN DARI JEMAAT JATIWARINGIN. JEMAAT DEPOK
            MEMULAI PELAYANAN HARI MINGGU DI JALAN LENTENG AGUNG. SEIRING
            BERJALAN WAKTU TUHAN MENAMBAHKAN JUMLAH JEMAAT SEHINGGA DIPUTUSKAN
            UNTUK MENDIRIKAN GEDUNG GERAJA DI JALAN PEMUDA.
          </p>
          <a className="text-2 font-light font-mono text-center underline ">
            BACA SELENGKAPNYA
          </a>
        </div>
        <div className="flex flex-col px-6  bg-slate-100 mx-2">
          <h2 className="text-xl font-bold font-mono text-center">
            PENGAKUAN IMAN GEREJA TORAJA
          </h2>
          <p className="text-2 font-light font-mono text-center mt-5">
            YESUS KRISTUS ITULAH TUHAN DAN JURUSELAMAT. ALLAH BERFIRMAN KEPADA
            MANUSIA YANG DITEBUS, DIKUDUSKAN, DAN DIPANGGIL MENJADI UMAT ALLAH
            UNTUK DIUTUS KE DALAM DUNIA BAGI PEKERJAAN PENYELAMATAN MENUJU ZAMAN
            AKHIR.
          </p>
          <a className="text-2 font-light font-mono text-center underline ">
            BACA SELENGKAPNYA
          </a>
        </div>
        <div className="flex flex-col px-6  bg-slate-100 ">
          <h2 className="text-xl font-bold font-mono text-center">
            JADWAL IBADAH
          </h2>
          <p className="text-2 font-light font-mono text-center mt-5">
            IBADAH UMUM :
          </p>
          <p className="text-2 font-light font-mono text-center">
            SETIAP HARI MINGGU, PUKUL 09.00 WIB
          </p>
          <p className="text-2 font-light font-mono text-center mt-5">
            IBADAH SEKOLAH MINGGU :
          </p>
          <p className="text-2 font-light font-mono text-center">
            SETIAP HARI MINGGU, PUKUL 09.00 WIB
          </p>
          <h2 className="text-xl font-bold font-mono text-center">ALAMAT</h2>
          <p className="text-2 font-light font-mono text-center mt-5">
            JL. PEMUDA NO.62A, DEPOK, KEC. PANCORAN MAS, KOTA DEPOK, JAWA BARAT
            16431
          </p>
          <h4 className="border-2 border-emerald-600 rounded-md text-center text-lg font-semibold my-1 mx-20">
            KLIK MAPS
          </h4>
        </div>
      </div>
    </section>
  );
};
export default Information;
