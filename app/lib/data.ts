"use server"
import postgres from "postgres";

const sql = postgres(`${process.env.DATABASE_URL}`);

export async function handleSubmit(prevState: any, formData: FormData) {
    const bandName = formData.get('bandName') as string;
    try {
        await sql`
        INSERT INTO bands (name)
        VALUES (${bandName})
        `;
        return {
            success: true,
            message: `「${bandName}」を登録しました。`
        };
    } catch (error) {
        console.error(error);
        return {
            success: false,
            message: "登録に失敗しました。"
        };
    }
}