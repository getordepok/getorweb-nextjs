import React from "react";
import moment from "moment";

export default function CardSapaanPagi(dataSapaan) {
  return (
    <>
      <div className='flex flex-col md:flex-row lg:flex-row justify-around mx-auto'>
        {dataSapaan.dataSapaan.items.map(item => {
          const { id, snippet = {} } = item;
          const { title, thumbnails, publishedAt = {}, resourceId } = snippet;
          const { medium = {} } = thumbnails;
          const night = moment(publishedAt).format("a");
          return (
            <div key={id}>
              <div className='p-4 m-4 bg-slate-100 shadow-md rounded-md hover:bg-white hover:scale-105 hover:shadow-indigo-500 transition-all border-t-indigo-500 border-t-4'>
                <a
                  href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}
                >
                  <img
                    src={medium.url}
                    width={medium.width}
                    height={medium.height}
                    alt=''
                  />
                  <p className='mt-3 font-semibold border-b-2'>{title}</p>
                  <p className='mt-t text-gray-600'>
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
    </>
  );
}
