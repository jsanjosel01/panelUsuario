// Utils

// Convierte un ArrayBuffer en string hexadecimal
export function bufferToHex(buffer) {
  return Array.from(new Uint8Array(buffer))
    .map(b => b.toString(16).padStart(2, "0"))
    .join("");
}

// Genera hash SHA-256 del texto dado
export async function hashText(text) {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  return bufferToHex(hashBuffer);
}

// Genera una sal aleatoria (16 bytes)
export function generateSalt() {
  const saltArray = new Uint8Array(16);
  crypto.getRandomValues(saltArray);
  return bufferToHex(saltArray);
}