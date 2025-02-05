'use server';
import { z } from 'zod';
import { drizzle } from 'drizzle-orm/node-postgres';
import { sql } from 'drizzle-orm';

const db = drizzle(process.env.POSTGRES_URI);
 

export async function emailSubmit(_data: { email: string }) {
    try {
    const result = z.object({ email: z.string().email() }).safeParse(_data);

    if (result.success) {
        const { email } = result.data;

        await db.execute(sql`INSERT INTO newsletter_subscriber(email) VALUES (${email})`)

        return { success: true, message: 'Email added successfully!' };
    } else {
        return { success: false, message: 'Invalid email format.' };
    }
} catch (e) {
    console.log(e)
    return {success: false, message: 'Something went wrong'}
}

}
