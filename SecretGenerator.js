const crypto = require('crypto');

/**
 * Generates a random secret key.
 * @param {number} length - The length of the secret key in bits.
 * @returns {string} The generated secret key as a hexadecimal string.
 */
const generateSecretKey = (length) => {
  const byteLength = Math.ceil(length / 8);
  const buffer = crypto.randomBytes(byteLength);
  return buffer.toString('hex');
};

/**
 * Generates multiple random secret keys.
 * @param {number} count - The number of secret keys to generate.
 * @param {number} length - The length of each secret key in bits.
 * @returns {string[]} An array of generated secret keys.
 */
const generateSecretKeys = (count, length) => {
  const secretKeys = [];
  for (let i = 0; i < count; i++) {
    const secretKey = generateSecretKey(length);
    secretKeys.push(secretKey);
  }
  return secretKeys;
};

/**
 * Generates a random secret key with a specific length.
 * @param {number} length - The length of the secret key in bits.
 * @returns {string} The generated secret key as a hexadecimal string.
 */
const generateRandomSecretKey = (length = 256) => {
  return generateSecretKey(length);
};

/**
 * Generates a single random secret key.
 * @param {number} length - The length of the secret key in bits.
 * @returns {string} The generated secret key as a hexadecimal string.
 */
const generateSingleSecretKey = (length = 256) => {
  return generateSecretKey(length);
};

/**
 * Generates multiple random secret keys with a specific length.
 * @param {number} count - The number of secret keys to generate.
 * @param {number} length - The length of each secret key in bits.
 * @returns {string[]} An array of generated secret keys.
 */
const generateMultipleSecretKeys = (count = 1, length = 256) => {
  return generateSecretKeys(count, length);
};

// Check if the script is executed from the command line
if (require.main === module) {
  // If executed from the command line, generate the secret keys
  const [length, count] = process.argv.slice(2);

  const keyLength = length ? parseInt(length, 10) : 256;
  const keyCount = count ? parseInt(count, 10) : 1;

  if (isNaN(keyLength) || isNaN(keyCount)) {
    console.error('Invalid command-line arguments. Please provide valid numeric values for length and count.');
    process.exit(1);
  }

  const secretKeys = generateSecretKeys(keyCount, keyLength);

  console.log(`Generated ${keyCount} secret key(s) of length ${keyLength} bits:`);
  for (let i = 0; i < secretKeys.length; i++) {
    console.log(`Secret Key ${i + 1}: ${secretKeys[i]}`);
  }
}

module.exports = {
  generateSecretKey,
  generateSecretKeys,
  generateRandomSecretKey,
  generateSingleSecretKey,
  generateMultipleSecretKeys,
};
