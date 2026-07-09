/**
 * Simple encryption utility for chat messages using Web Crypto API
 * This provides client-side encryption for message privacy
 */

const ALGORITHM = {
  name: "AES-GCM",
  length: 256,
};

const ENCODING = "utf-8";

/**
 * Generate a random encryption key
 */
export async function generateKey(): Promise<CryptoKey> {
  return await window.crypto.subtle.generateKey(
    ALGORITHM,
    true, // extractable
    ["encrypt", "decrypt"]
  );
}

/**
 * Export key to string for storage
 */
export async function exportKey(key: CryptoKey): Promise<string> {
  const exported = await window.crypto.subtle.exportKey("raw", key);
  const exportedAsString = String.fromCharCode.apply(null, new Uint8Array(exported) as any);
  return btoa(exportedAsString);
}

/**
 * Import key from string
 */
export async function importKey(keyString: string): Promise<CryptoKey> {
  const binaryString = atob(keyString);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return await window.crypto.subtle.importKey(
    "raw",
    bytes.buffer,
    ALGORITHM,
    true,
    ["encrypt", "decrypt"]
  );
}

/**
 * Encrypt a message
 */
export async function encryptMessage(
  message: string,
  key: CryptoKey
): Promise<string> {
  const iv = window.crypto.getRandomValues(new Uint8Array(12));
  const encodedMessage = new TextEncoder().encode(message);

  const encryptedData = await window.crypto.subtle.encrypt(
    { ...ALGORITHM, iv },
    key,
    encodedMessage
  );

  // Combine IV and encrypted data
  const combined = new Uint8Array(iv.length + encryptedData.byteLength);
  combined.set(iv);
  combined.set(new Uint8Array(encryptedData), iv.length);

  // Convert to base64 for storage/transmission
  const combinedString = String.fromCharCode.apply(null, combined as any);
  return btoa(combinedString);
}

/**
 * Decrypt a message
 */
export async function decryptMessage(
  encryptedMessage: string,
  key: CryptoKey
): Promise<string> {
  // Decode from base64
  const binaryString = atob(encryptedMessage);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }

  // Extract IV and encrypted data
  const iv = bytes.slice(0, 12);
  const encryptedData = bytes.slice(12);

  const decryptedData = await window.crypto.subtle.decrypt(
    { ...ALGORITHM, iv },
    key,
    encryptedData
  );

  return new TextDecoder().decode(decryptedData);
}
