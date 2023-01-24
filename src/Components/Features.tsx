// import { HassleFreeIcon, MoneyBackIcon, SubscriptionIcon } from "@/Icons/Icons";
import React, { ElementType } from "react";
import Image from "next/image";
import MoneyIcon from "../../public/assets/Images/moneyIcon.png"
import Feesicon from "../../public/assets/Images/feesIcon.png"
import SubscriptionIcon from "../../public/assets/Images/subscriptionIcon.png"

interface FeatureProps {
  icon: ElementType | any;
  children: string
}

function Feature(props: FeatureProps) {
  const { icon,children, ...rest } = props;
  
  return (
    <div {...rest} className="spacing-6 mb-6 md:mb-0 mx-0 md:mx-2 flex justify-center items-center" >
      <Image src={icon} alt="Icons" className="mr-2" />
      <div
      className="text-left text-lg font-bold w-full md:w-56"
      >
        {children}
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <div className="max-w-[90%] md:max-w-5xl m-auto pt-10 md:pt-14 pb-8">
      <div className="px-0 md:px-12 spacing-0 md:spacing-20 items-start md:items-center justify-center flex flex-col md:flex-row">
        <Feature icon={MoneyIcon}>30 days money back Gurantee</Feature>
        <Feature icon={Feesicon}>
          No setup fees 100% hassle-free
        </Feature>
        <Feature icon={SubscriptionIcon}>
          No monthly subscription Pay once and for all
        </Feature>
      </div>
    </div>
  );
}
