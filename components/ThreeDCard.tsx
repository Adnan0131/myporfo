"use client"

import Image from "next/image"
import React from "react"
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"

export function ThreeDCard() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-black relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem translateZ="50" className="text-xl font-bold text-white">
          Hi, I&apos;m Adnan Ahamed
        </CardItem>
        <CardItem as="p" translateZ="60" className="text-neutral-300 text-sm max-w-sm mt-2">
          Welcome to my portfolio
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/logo.jpeg"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="Adnan Ahamed"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem translateZ={20} as="button" className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold">
            Learn More
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  )
}

