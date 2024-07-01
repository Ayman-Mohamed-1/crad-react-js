/**
 * 
 * @param {string} text 
 * @param {number} max 
 * @returns 
 */
export function textSlice (text: string, max: number = 50) {
    if (text.length >= max) return`${text.slice(0, max)}...`;
    return text;
}