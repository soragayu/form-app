type Props = {
    bands: any[];
}

export default function Select({ bands }: Props) {
    return (
        <select name="id" className="w-full max-w-170 flex flex-col gap-2 p-4 rounded-2xl bg-[#FFFFFF] text-base">
            <option value="" >選択してください</option>
            {bands?.map((band) => (
                <option key={band.id} value={band.id}>{band.name}</option>
            ))}
        </select>
    )
}