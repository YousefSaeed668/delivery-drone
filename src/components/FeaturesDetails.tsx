"use client";
import { motion } from "framer-motion";

import { MaxWidth } from "./MaxWidth";
import { InView } from "./InView";

export function FeaturesDetails() {
  return (
    <>
      <InView
        variants={{
          hidden: { opacity: 0, y: 100, filter: "blur(4px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        viewOptions={{ margin: "0px 0px -200px 0px" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <h2 className=" text-center font-bold text-4xl max-w-[500px] mx-auto">
          Delivering More Than Just Food: Explore Our Innovative Drone
        </h2>
      </InView>
      <div className="h-full w-full overflow-auto">
        <div className="flex h-[1700px] items-end justify-center pb-12">
          <InView
            viewOptions={{
              once: false,
              margin: "0px 0px -250px 0px",
              amount: 0,
            }}
            variants={{
              hidden: {
                opacity: 0,
              },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.09,
                },
              },
            }}
          >
            <MaxWidth>
              <div className="columns-2 gap-4 sm:columns-3">
                {[
                  "/1.jpg",
                  "/9.jpg",
                  "/6.jpg",
                  "/2.jpg",
                  "/4.jpg",
                  "/5.jpg",
                  "/3.jpg",

                  "/7.jpg",
                  "/8.jpg",
                ].map((imgSrc, index) => {
                  return (
                    <motion.div
                      variants={{
                        hidden: {
                          opacity: 0,
                          scale: 0.8,
                          filter: "blur(10px)",
                        },
                        visible: {
                          opacity: 1,
                          scale: 1,
                          filter: "blur(0px)",
                        },
                      }}
                      key={index}
                      className="mb-4"
                    >
                      <img
                        src={imgSrc}
                        alt={`Image placeholder from cosmos.so, index:${index}`}
                        className="size-full rounded-lg object-contain"
                      />
                    </motion.div>
                  );
                })}
              </div>
            </MaxWidth>
          </InView>
        </div>
      </div>
    </>
  );
}
