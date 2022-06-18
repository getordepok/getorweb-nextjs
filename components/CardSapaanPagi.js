import React from "react";

export default function CardSapaanPagi({ video, title, postDate }) {
  return (
    <>
      <div className="bg-white shadow-skill rounded-md p-6 flex items-center hover:bg-blue-500">
        <img src={video} className={classnames("mr-6")} />
        <div>
          <h4 className="text-lg font-semibold">{title}</h4>
          <p className="text-sm text-gray-400 font-semibold mt-1">{postDate}</p>
        </div>
      </div>
    </>
  );
}
