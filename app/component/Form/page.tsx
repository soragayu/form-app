"use client"
import { useActionState } from "react";
import { handleSubmit } from "@/app/lib/data";

export default function Form() {
    const [state, formAction, isPending] = useActionState(handleSubmit, null);

    return (
        <form action={formAction} className="w-full max-w-160 flex flex-col items-center gap-10">
            <div className="w-full max-w-160 flex flex-col gap-2 p-6 rounded-2xl bg-[#FFFFFF]">
                <p className="text-sm">バンド名</p>
                <input type="text" required name="bandName" className="w-full max-w-160 h-8 border-b-1 border-[#B7B7B7] invalid:border-red-500"></input>
            </div>
            <div className="w-full max-w-160 flex justify-start">
                <button type="submit" disabled={isPending} className="w-20 p-2 rounded-xl bg-[#0800FF] text-[#FFFFFF] disabled:opacity-50">{isPending ? "送信中" : "提出"}</button>
            </div>
            {state?.message && (
                <div className="w-full max-w-160 flex justify-start">
                    <p className={state.success ? "text-green-500" : "text-red-500"}>{state.message}</p>
                </div>
            )}
        </form>
    )
}