"use client";
import React, { useState } from "react";
import { PinContainer } from "@/components/ui/3d-pin";
import { Croatia } from "./Croatia";

export function CroatiaAnimatedPin() {
  const [isRotated, setIsRotated] = useState<boolean>(false);

  React.useEffect(() => {

    const setRotate = setTimeout(() => {
      setIsRotated(true)
    }, 750)

    return () =>{
      clearTimeout(setRotate)
    }
  })

  return (
    <div className="h-[25rem] sm:h-[35rem] w-full flex items-center justify-center ">
      <PinContainer
        title="Opening May 2025 in Varaždin, Croatia."
        href="https://twitter.com/mannupaaji"
        className="border-none"
        isRotated={isRotated}
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[18rem] sm:w-[20rem] h-[20rem] border-none ">
          <h3 className="h-16 !pb-2 !m-0 font-bold  text-base text-slate-100 opacity-0">
            Croatia
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
           <Croatia className="w-full h-full" isrotated={isRotated.toString()}/>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
    </div>
  );
}
