
import { describe, it, expect } from 'vitest';
import dotenv from 'dotenv';
import path from 'path';
import { saveFormDataToSheet } from '../src/utils/googleSheets';

// Load environment variables manually since Vitest doesn't Auto-load .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

describe('Google Sheets Integration', () => {
    it('should save data to the sheet successfully', async () => {
        // validation to ensure we don't fail if keys are missing in local dev
        if (!process.env.GOOGLE_SHEET_ID) {
            console.warn('Skipping test: GOOGLE_SHEET_ID not found in .env.local');
            return;
        }

        const testData = {
            fullName: "Test User StepByStep",
            email: "test.step@example.com",
            location: "Paris",
            phone: "00000000",
            discovery: "Manual Test",
            status: "Developer",
            field: "Testing",
            objectives: ["Validity"],
            interests: ["Vitest"],
            consent: true
        };

        const result = await saveFormDataToSheet(testData);

        expect(result.success).toBe(true);
        expect(result.message).toBe("Données enregistrées avec succès");
    }, 30000);
});
