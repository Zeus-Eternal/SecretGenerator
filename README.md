# Secret Key Generator

The Secret Key Generator is a utility tool that allows you to generate random secret keys of varying lengths. These secret keys are useful for various purposes such as cryptographic operations, session management, token signing, and more.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
  - [Command-line Options](#command-line-options)
  - [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)
- [Resources](#resources)

## Features

- Generate random secret keys with customizable length and count.
- Command-line interface for easy usage.
- Supports various output formats, including hexadecimal and base64.
- High-quality randomization using the `crypto` module in Node.js.
- Secure key generation to enhance application security.

## Installation

To use the Secret Key Generator, follow these steps:

1. Ensure that you have [Node.js](https://nodejs.org) installed on your system.
2. Clone this repository:

```bash
git clone https://github.com/Zeus-Eternal/SecretGenerator.git
```

3. Navigate to the cloned directory:

```bash
cd secret-key-generator
```

4. Install the necessary dependencies:

```bash
npm install
```

## Usage

To generate secret keys, use the following command:

```bash
node secretGEN.js [options]
```

### Command-line Options

The Secret Key Generator supports the following command-line options:

- `-l, --length <length>`: The desired length of each secret key in bits. Default: 256.
- `-c, --count <count>`: The number of secret keys to generate. Default: 1.
- `-f, --format <format>`: The output format of the generated secret keys. Options: `hex` (default), `base64`.

### Examples

- Generate a single secret key with a length of 256 bits (default):

```bash
node secretGEN.js
```

- Generate three secret keys with a length of 512 bits:

```bash
node secretGEN.js --length 512 --count 3
```

- Generate a single secret key with a length of 128 bits in base64 format:

```bash
node secretGEN.js --length 128 --format base64
```

## Contributing

Contributions to the Secret Key Generator project are highly appreciated. If you encounter any issues, have feature requests, or want to contribute in any way, please refer to the contribution guidelines outlined in the [CONTRIBUTING.md](CONTRIBUTING.md) file.

## License

The Secret Key Generator is open-source software licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute it in accordance with the terms of the license.

## Resources

- [Node.js Documentation](https://nodejs.org/docs/)
- [crypto Module Documentation](https://nodejs.org/api/crypto.html)

---
