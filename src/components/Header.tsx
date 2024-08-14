import Link from "next/link";
import { Button } from "./Button";
import { Droplet } from "lucide-react";

export function Header() {
  return (
    <div className="flex h-[4.4rem] justify-between fixed top-0 left-0 items-center w-full px-10 z-50 text-white">
      <Link href="/" className="text-2xl font-medium">
        Drone Delivery
      </Link>
      <nav className="flex space-x-6">
        <Link
          href="#home"
          className="relative group text-xl font-medium  overflow-hidden "
        >
          <span className="block relative">
            <span className="block text-top">Home</span>
            <span className="absolute inset-0 block text-bottom transform translate-y-full">
              Home
            </span>
          </span>
        </Link>
        <Link
          href="#about"
          className="relative group text-xl font-medium  overflow-hidden"
        >
          <span className="block relative">
            <span className="block text-top">About</span>
            <span className="absolute inset-0 block text-bottom transform translate-y-full">
              About
            </span>
          </span>
        </Link>
        <Link
          href="#contact"
          className="relative group text-xl font-medium  overflow-hidden"
        >
          <span className="block relative">
            <span className="block text-top">Contact</span>
            <span className="absolute inset-0 block text-bottom transform translate-y-full">
              Contact
            </span>
          </span>
        </Link>
      </nav>

      <Button className="flex gap-2 items-center">
        <Droplet />
        WAITLIST
      </Button>
    </div>
  );
}
