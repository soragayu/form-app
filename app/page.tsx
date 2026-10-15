"use client";

import Header from "./component/Header/page";
import Form from "./component/Form/page"

export default function Home() {

  return (
    <div className="w-full h-screen flex flex-col items-center gap-10 p-8 bg-[#DFDEFF]">
      <Header />
      <Form />
    </div>
  );
}
