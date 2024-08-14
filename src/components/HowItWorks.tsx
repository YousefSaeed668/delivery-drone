import Image from "next/image";

import { StickyScroll } from "./StickyScroll";
import { MaxWidth } from "./MaxWidth";

const content = [
  {
    title: "Choose Your Meal",
    description:
      "Explore our delicious menu and select your favorite dishes with just a few taps. Whether you're craving something savory or sweet, our user-friendly app makes it easy to customize your order. From fresh salads to gourmet meals, simply browse, select, and get ready to experience the convenience of drone-delivered food.",
    content: (
      <Image
        src="/firststep.jpg"
        width={500}
        height={500}
        className="h-full w-full object-cover"
        alt="linear board demo"
      />
    ),
  },
  {
    title: "Place Your Order",
    description:
      "Once you've made your selection, placing your order is a breeze. Our app streamlines the checkout process, allowing you to confirm your meal and delivery details with ease. Simply choose your preferred payment method, finalize your order, and let us take care of the rest. Your food is now on its way, prepared with care and ready to be delivered by our cutting-edge drones.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/secondstep.jpg"
          width={500}
          height={500}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Track Your Delivery",
    description:
      "Stay connected with your order every step of the way. Our real-time tracking feature lets you monitor your food's journey from the kitchen to your doorstep. Watch as our drone takes flight and delivers your meal with precision. You'll know exactly when to expect your food, so you can be ready to enjoy it the moment it arrives.",
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src="/thirdstep.jpg"
          width={500}
          height={500}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
export function HowItWorks() {
  return (
    <div className="mb-10">
      <MaxWidth>
        <h2 className="text-7xl mb-6 font-semibold">How It Works :</h2>
      </MaxWidth>
      <StickyScroll content={content} />
    </div>
  );
}
