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
        title="Opening September 2026"
        href="https://pitstop-arena.hr"
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
          <div className="mt-4 flex flex-1 w-full items-center justify-center rounded-lg border border-red-500/20 bg-gradient-to-br from-red-950/50 via-red-600/15 to-neutral-950 px-4 py-3">
            <p className="font-saira text-xs font-semibold uppercase tracking-[0.2em] text-red-200">
              Opening September 2026
            </p>
          </div>
        </div>
      </PinContainer>
    </div>
  );
}
