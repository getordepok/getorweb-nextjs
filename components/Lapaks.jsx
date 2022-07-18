import React, { useState } from "react";
import Lapak_Food from "./Lapak_lapak/Lapak_Food";
import Lapak_Lain from "./Lapak_lapak/Lapak_Lain";
import Lapak_Rental from "./Lapak_lapak/Lapak_Rental";
import Lapak_Service from "./Lapak_lapak/Lapak_Service";

const Lapaks = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  const tabActive = {
    active:
      "inline-block p-4 text-black text-xl font-mono font-bold rounded-t-lg border-b-2 border-blue-600 active dark:text-black dark:border-blue-500",
    nonactive:
      "inline-block p-4 rounded-t-lg text-xl font-mono border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300",
    disable:
      "inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500",
  };
  const tabClick = (tabs) => {
    if (tabs == openTab) return;
    else {
      setOpenTab(tabs);
    }
  };
  const getLapaks = () => {
    switch (openTab) {
      case 1:
        return (
          <div>
            <Lapak_Food />
          </div>
        );
        break;
      case 2:
        return (
          <div>
            <Lapak_Service />
          </div>
        );
        break;
      case 3:
        return (
          <div>
            <Lapak_Rental />
          </div>
        );
        break;
      case 4:
        return (
          <div>
            <Lapak_Lain />
          </div>
        );
        break;
      default:
        return (
          <div>
            <Lapak_Food />
          </div>
        );

        break;
    }
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px">
            <li className="mr-2" onClick={() => tabClick(1)}>
              <a
                href="#"
                className={
                  openTab == 1 ? tabActive.active : tabActive.nonactive
                }
              >
                MAKANAN
              </a>
            </li>
            <li className="mr-2" onClick={() => tabClick(2)}>
              <a
                href="#"
                className={
                  openTab == 2 ? tabActive.active : tabActive.nonactive
                }
                aria-current="page"
              >
                JASA
              </a>
            </li>
            <li className="mr-2" onClick={() => tabClick(3)}>
              <a
                href="#"
                className={
                  openTab == 3 ? tabActive.active : tabActive.nonactive
                }
              >
                RENTAL
              </a>
            </li>
            <li className="mr-2" onClick={() => tabClick(4)}>
              <a
                href="#"
                className={
                  openTab == 4 ? tabActive.active : tabActive.nonactive
                }
              >
                LAIN-LAIN
              </a>
            </li>
          </ul>
        </div>
        <div>{getLapaks()}</div>
      </div>
    </>
  );
};
export default Lapaks;
