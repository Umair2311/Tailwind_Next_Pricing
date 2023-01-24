
import React, { ElementType } from "react";
import { PricingIcon } from "@/Icons/Icons";

interface FeatureProps {
  children: string
}

function ListItems(props:FeatureProps) {
  const { children, ...rest } = props;

  const listData = [
    "International calling and messaging API",
    "Additional phone numbers",
    "Automated messages via Zapier",
    "24/7 support and consulting",
  ];
  return (
    <>
      {listData.map((data, index) => {
        return (
          <li className="flex mb-3" key={"Price" + index} {...rest}>
            <>
            <span className="mr-3">{PricingIcon({})}</span>
            <div>{data}</div>
            </>
          </li>
        );
      })}
    </>
  );
}

function Pricing() {
  return (
    <div
    className="max-w-[90%] lg:max-w-5xl m-auto -mt-64 bg-white overflow-hidden rounded-xl shadow-gray-700">
      <div className="flex flex-col lg:flex-row">
        <div className="text-center p-5 md:p-14 bg-[rgba(126,34,206,0.1)]"
        >
          <div className="font-extrabold text-2xl">
            Premium PRO
          </div>
          <div className="font-extrabold text-5xl text-6xl mt-4">
            $329
          </div>
          <div className="text-lg mt-2 mb-6 font-medium text-gray-900">
            billed just once
          </div>
          <button className="bg-purple-800 w-72 capitalize text-white h-12 rounded-lg">
            get started
          </button>
        </div>
        <div className="p-5 md:p-14 text-lg font-normal text-gray-900 bg-white">
          <div>
            Access these features when you get this pricing package for your
            business.
          </div>
          <ul className="pt-6">
            <ListItems children={""} />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
