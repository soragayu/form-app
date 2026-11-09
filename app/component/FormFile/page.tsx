"use client"

import { useActionState } from "react";

import { handleForm } from "@/app/lib/data";

import Select from "@/app/component/FormFile/Select/page";
import File from "@/app/component/FormFile/File/page";
import Button from "@/app/component/FormFile/Button/page";

type Props = {
    bands: any[];
}

export default function FormFile({ bands }: Props) {

    const [state, formAction, isPending] = useActionState(handleForm, null);

    return (
        <form action={formAction} className="w-full max-w-170 flex flex-col items-center gap-10">
            <Select bands={bands} />
            <File />
            <Button state={state} isPending={isPending} />
        </form>
    )
}