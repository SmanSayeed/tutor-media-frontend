"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Text from "@/components/atoms/Text/Text";
import Image from "next/image";
import VideoPlayer from "../atoms/Video/Video";

export function HeroSection() {
  return (
    <section className="py-8 md:py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-6">
          <div className="flex justify-center gap-16 items-center">
            <div className="w-1/2">
              <Text
                as="h1"
                className="text-brand-primary-500 text-8xl font-semibold"
              >
                Get Tuition Jobs
              </Text>
              <br />
              <Text as="h1" className="text-4xl font-semibold">
                No Commissions & Keep 100% of <br /> Your Earnings!
              </Text>
              <br />
              <div className="flex items-center">
                <Button className="bg-brand-primary-500 flex items-center">
                  <p>Start Earning as a tutor</p>
                  <Image width={15} height={15} src="/right-arrow.png" alt="" />
                </Button>
                <Button className="ml-2" variant={"outline"}>
                  <Text as="p" className="text-brand-primary-500">
                    Hire a tutor
                  </Text>
                </Button>
              </div>
              <br />
              <br />
              <div className="flex items-center">
                <Image width={18} height={18} src="/man-plus.png" alt="" />
                <Text as="p" className="text-gray-500 text-sm ml-2">
                  want to become a tutor?
                </Text>
                <Text as="p" className="text-gray-500 text-sm">
                  Sign Up
                </Text>
                <div className="bg-brand-primary-500 ml-2 rounded-full h-[19px] w-[19px] relative">
                  <Image
                    width={15}
                    height={15}
                    src="/arrow.png"
                    alt=""
                    className="absolute top-1"
                  />
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <VideoPlayer
                url="https://www.youtube.com/watch?v=lg4uP7QjIZk"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
