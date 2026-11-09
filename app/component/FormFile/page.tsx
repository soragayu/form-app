"use client"

import Image from "next/image";

import { useState } from "react";
import { useActionState } from "react";

import { handleForm } from "@/app/lib/data";

type Props = {
    bands: any[];
}

export default function FormFile({ bands }: Props) {

    const [fileName, setFileName] = useState<string | null>(null);
    const [state, formAction, isPending] = useActionState(handleForm, null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            setFileName(event.target.files[0].name);
        } else {
            setFileName(null);
        }
    }

    return (
        <form action={formAction} className="w-full max-w-170 flex flex-col items-center gap-10">
            <select name="id" className="w-full max-w-170 flex flex-col gap-2 p-4 rounded-2xl bg-[#FFFFFF] text-base">
                <option value="" >選択してください</option>
                {bands.map((bands) => (
                    <option key={bands.id} value={bands.id}>{bands.name}</option>
                ))}
            </select>
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
            <div className="w-full max-w-170 flex justify-end">
                <button type="submit" disabled={isPending} className="w-20 p-2 rounded-xl bg-[#000000] text-[#FFFFFF] disabled:opacity-50">{isPending ? "送信中" : "提出"}</button>
            </div>
            {state?.message && (
                <div className="w-full max-w-170 flex justify-end">
                    <p className={state.success ? "text-green-500" : "text-red-500"}>{state.message}</p>
                </div>
            )}
        </form>
    )
}