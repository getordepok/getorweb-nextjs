import moment from "moment";
import Head from "next/head";

import { useEffect, useState } from "react";
import Button from "../components/Button";
import Navbar from "../components/Navbar/Navbar";
// import SapaanPagi from "../components/SapaanPagi";
import Slideshow from "../components/Slideshow";

const YOUTUBE_PLAYLIST_ITEMS_API =
  "https://www.googleapis.com/youtube/v3/playlistItems";

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
export default function Home(data) {
  // const youtubeList = data;
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
      <section>
        <div className="container mx-auto flex flex-col mt-10 mb-10">
          <h2 className="text-2xl font-semibold font-mono text-center">
            SAPAAN PAGI
          </h2>
          <div className="flex flex-column flex-nowrap justify-around  mx-auto">
            {data.data.items.map((item) => {
              // console.log(item, "item");
              const { id, snippet = {} } = item;
              const {
                title,
                thumbnails,
                publishedAt = {},
                resourceId,
              } = snippet;
              const { medium = {} } = thumbnails;
              const night = moment(publishedAt).format("a");
              console.log(night, "night");
              return (
                <div key={id}>
                  <div className="p-4 m-4 bg-slate-100 shadow-md rounded-md hover:bg-white hover:scale-105 hover:shadow-indigo-500 transition-all border-t-indigo-500 border-t-4">
                    <a
                      href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}
                    >
                      <img
                        src={medium.url}
                        width={medium.width}
                        height={medium.height}
                        alt=""
                      />
                      <p className="mt-3 font-semibold border-b-2">{title}</p>
                      <p className="mt-t text-gray-600">
                        {night === "pm"
                          ? moment(publishedAt)
                              .add(1, "day")
                              .format("dddd, DD MMMM YYYY")
                          : moment(publishedAt).format("dddd, DD MMMM YYYY")}
                      </p>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          <Button
            href="#contact"
            pill
            variant="outline-yellow"
            className="w-6/12 mx-auto text-center transition-all border-2"
          >
            LIHAT SEMUA VIDEO
          </Button>
        </div>
      </section>
    </>
  );
}
