import Image from "next/image";

import Form from "@/app/component/Form/page";
import FormFile from "@/app/component/FormFile/page";

import { handleSelect } from "@/app/lib/data";

export const instant = false;

export default async function Home() {

  const bands = await handleSelect();

  return (
    <>
      <div className="fixed inset-0 -z-10 flex justify-center bg-[#6097bb]">
        <Image src="/formback.JPG" alt="背景" width={1256} height={2315} className="h-screen w-auto" />
      </div>
      <div className="w-full h-screen flex flex-col items-center gap-10 p-8">
        <Image src="/penrogo.PNG" alt="ロゴ" width={2364} height={1157} className="w-full max-w-170" />
        {/* <Form /> */}
        <FormFile bands={bands} />
      </div>
    </>
  );
}
