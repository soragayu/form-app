"use client";

import Image from "next/image";

import Form from "@/app/component/Form/page";

export default function Home() {

  return (
    <>
      <div className="fixed inset-0 -z-10 flex justify-center bg-[#6097bb]">
        <Image src="/formback.jpg" alt="背景" width={1256} height={2315} className="h-screen w-auto" />
      </div>
      <div className="w-full h-screen flex flex-col items-center gap-10 p-8">
        <Image src="/penrogo.png" alt="ロゴ" width={2364} height={1157} className="w-full max-w-170" />
        <Form />
      </div>
    </>
  );
}
