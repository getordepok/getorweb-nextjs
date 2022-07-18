import moment from "moment";
import Head from "next/head";

import { useEffect, useState } from "react";
import Birthday from "../components/Birthday";
import Button from "../components/Button";
import Information from "../components/Information";
import LiturgiKeluarga from "../components/LiturgiKeluarga";
import Navbar from "../components/Navbar/Navbar";
// import SapaanPagi from "../components/SapaanPagi";
import Slideshow from "../components/Slideshow";
import SuleLangngan from "../components/SuleLangngan";
import WartaJemaat from "../components/WartaJemaat";
import Footer from "../components/Footer";
import SapaanPagi from "../components/SapaanPagi";

const YOUTUBE_PLAYLIST_ITEMS_API = process.env.YOUTUBE_PLAYLIST_ITEMS_API;

export async function getServerSideProps() {
  const res = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=PLtSVHs98fMyGeZF_I6LW_kFJmj4LMKBt8&maxResults=4&key=${process.env.YOUTUBE_API_KEY}`
  );

  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
export default function Home(dataSapaan = { data }) {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      let header = document.getElementById("navbar");
      header.classList.toggle("navSticky", window.scrollY > 0);
    });
  });
  return (
    <>
      <Navbar />
      <Slideshow />
      <SapaanPagi dataSapaan={dataSapaan.data} />
      <SuleLangngan />
      <WartaJemaat />
      <LiturgiKeluarga />
      <Birthday />
      <Information />
      <Footer />
    </>
  );
}
