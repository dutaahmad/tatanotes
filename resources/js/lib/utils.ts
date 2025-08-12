import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function getPlainTextExcerpt(htmlString: string, maxLength: number = 150): string {
    // Strip HTML tags
    const plainText = htmlString.replace(/<[^>]*>/g, '').trim();

    // Truncate if longer than maxLength
    if (plainText.length > maxLength) {
        return plainText.substring(0, maxLength) + '...';
    }

    return plainText;
}