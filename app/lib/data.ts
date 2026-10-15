"use server"
export async function handleSubmit(formData: FormData) {
    const bandName = formData.get('bandName') as string;
    console.log(bandName);
}