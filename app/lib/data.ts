"use server"
import postgres from "postgres";
import { put } from "@vercel/blob";

const sql = postgres(`${process.env.DATABASE_URL}`);

export async function handleSelect() {
    try {
        const bands = await sql`
        SELECT id, name 
        FROM bands
        `;
        return bands;
    } catch (error) {
        console.error(error);
        return [];
    }
}


export async function handleSubmit(prevState: any, formData: FormData) {
    const bandName = formData.get('bandName') as string;
    try {
        await sql`
        INSERT INTO bands (name)
        VALUES (${bandName})
        `;
        return {
            success: true,
            message: `${bandName}を登録しました。`
        };
    } catch (error) {
        console.error(error);
        return {
            success: false,
            message: "登録に失敗しました。"
        };
    }
}

export async function handleForm(prevState: any, formData: FormData) {
    const id = formData.get('id') as string;
    const image = formData.get('image') as File;
    console.log(id);

    // ①入力チェック
    if (!id || id === "") {
        return { message: "バンドが選択されていません！" };
    }
    if (!image || image.size === 0) {
        return { message: "画像が選択されていません！" };
    }

    // ②vercel blobにアップロード
    const blob = await put(image.name, image, {
        access: 'public',
        addRandomSuffix: true,
    });
    const url = blob.url;

    // ③DBに保存
    try {
        await sql`
    UPDATE bands
    SET  image = ${url}
    WHERE id = ${id}
    `

        return {
            success: true,
            message: `${image.name}を提出しました！`
        }
    } catch (error) {
        console.error(error);
        return {
            success: false,
            message: "提出に失敗しました！"
        };
    }
}