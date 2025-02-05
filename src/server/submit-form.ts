'use server';
import { z } from 'zod';
import fs from 'fs/promises';
import path from 'path';

const jsonFilePath = path.join(process.cwd(), 'src/data/email.json');

export async function emailSubmit(_data: { email: string }) {
  
    const result = z.object({ email: z.string().email() }).safeParse(_data);

    if (result.success) {
        const { email } = result.data;

        const fileContent = await fs.readFile(jsonFilePath, 'utf-8');
        const jsonFile = JSON.parse(fileContent);

        if (!jsonFile.emailList.includes(email)) {
            jsonFile.emailList.push(email);

            await fs.writeFile(jsonFilePath, JSON.stringify(jsonFile, null, 2));
        }

        return { success: true, message: 'Email added successfully!' };
    } else {
        return { success: false, message: 'Invalid email format.' };
    }
}
