"use client"
import Image from "next/image";

import { useState } from "react";

export default function File() {

    const [fileName, setFileName] = useState<string | null>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setFileName(event.target.files[0].name);
        } else {
            setFileName(null);
        }
    }

    return (
        < div className="w-full max-w-170 p-4 bg-[#FFFFFF] rounded-2xl flex flex-col items-start gap-4">
            {/* title */}
            <p className="w-full text-base">アーティスト写真</p>
            <div className="p-2 bg-[#FFFFFF] border-1 border-[#D1D5D8] rounded-lg flex items-center justify-center gap-2">
                <input name="image" type="file" onChange={handleChange} className="absolute w-full opacity-0" />
                {/* icon */}
                <Image src="/vector.png" alt="vector" width={42} height={42} className="w-3.5 h-3.5" />
                <p className="text-sm font-normal text-[#0B57D0]">{fileName ? fileName : "ファイルを追加"}</p>
            </div>
        </div>
    )
}