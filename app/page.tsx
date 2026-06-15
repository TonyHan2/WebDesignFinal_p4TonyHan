"use client";

import { useState } from "react";
import { Image } from "@heroui/image";

import { title, subtitle } from "@/components/primitives";

export default function Home() {
  const [spinning, setSpinning] = useState(false);

  const spinButton = () => {
    setSpinning(true);
    setTimeout(() => setSpinning(false), 1500);
  };

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>&nbsp;</span>
        <span className={title({ color: "violet" })}>The Anvil&nbsp;</span>
        <br />
        <div className={subtitle({ class: "mt-4" })}>
          Only the best trinkets and baubles here!
        </div>
        <div className="flex gap-3">
          <Image
            alt="img0"
            src="https://i.pinimg.com/736x/87/e2/97/87e2978ad93f8d794c03e35218df4f0f.jpg"
            width={600}
          />
        </div>
      </div>
      {/* 
      <div className="flex gap-3">
        <ConfettiButton />

        <div className={spinning ? "animate-spin" : ""}>
          <Button radius="full" variant="ghost" onPress={spinButton}>
            Spin
          </Button>
        </div>
      </div>

      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
          Discounted <Code color="primary">Web Shooters</Code> for the month of June! 
          </span>
        </Snippet>
      </div>
      */}
    </section>
  );
}
