"use server"
import postgres from "postgres";

const sql = postgres(`${process.env.DATABASE_URL}`);

export async function handleSubmit(formData: FormData) {
    const bandName = formData.get('bandName') as string;
    try {
        await sql`
        INSERT INTO bands (name)
        VALUES (${bandName})
        `;
    } catch (error) {
        console.error(error);
    }
}