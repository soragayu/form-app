export default function Button({ state, isPending }: { state: any, isPending: boolean }) {
    return (
        <>
            <div className="w-full max-w-170 flex justify-end">
                <button type="submit" disabled={isPending} className="w-20 p-2 rounded-xl bg-[#000000] text-[#FFFFFF] disabled:opacity-50">{isPending ? "送信中" : "提出"}</button>
            </div>
            {state?.message && (
                <div className="w-full max-w-170 flex justify-end">
                    <p className={state.success ? "text-whites-500" : "text-red-500"}>{state.message}</p>
                </div>
            )}
        </>
    )
}