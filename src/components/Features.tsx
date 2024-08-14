import Image from "next/image";
import { MaxWidth } from "./MaxWidth";
import { Separator } from "./ui/separator";

export function Features() {
  return (
    <MaxWidth>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-20 mt-6">
        <div className="flex flex-col gap-2 items-center">
          <Image src="/rocket.gif" width={100} height={100} alt="fresh" />
          <h3 className="text-xl font-bold">Fast Delivery</h3>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <Image src="/gps.gif" width={100} height={100} alt="fast" />
          <h3 className="text-xl font-bold">Real-Time Tracking</h3>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <Image src="/lock.gif" width={100} height={100} alt="safe" />
          <h3 className="text-xl font-bold">Safe and Secure</h3>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <Image src="/weather.gif" width={100} height={100} alt="weather" />
          <h3 className="text-xl font-bold">Weather Resistant</h3>
        </div>
      </div>
      <Separator className="my-10" />
    </MaxWidth>
  );
}
