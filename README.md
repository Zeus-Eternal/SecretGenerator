# Secret Key Generator

The Secret Key Generator is a utility tool that allows you to generate random secret keys of varying lengths. These secret keys are useful for various purposes such as cryptographic operations, session management, token signing, and more.

## Table of Contents

1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Command-line Options](#command-line-options)
5. [Examples](#examples)
6. [Contributing](#contributing)
7. [License](#license)

## Introduction

The Secret Key Generator is built with Node.js and utilizes the `crypto` module to generate random secret keys. It provides a command-line interface that allows you to specify the desired length and count of secret keys to generate.

## Installation

1. Ensure that you have [Node.js](https://nodejs.org) installed on your system.
2. Clone the Secret Key Generator repository from GitHub:

```
git clone <repository_url>
```

3. Install the dependencies:

```
cd secret-key-generator
npm install
```

## Usage

To generate secret keys, use the following command:

```
node secretGEN.js [length] [count]
```

### Command-line Options

The Secret Key Generator supports the following command-line options:

- `length`: The desired length of each secret key in bits. Default: 256.
- `count`: The number of secret keys to generate. Default: 1.

### Examples

- Generate a single secret key with a length of 256 bits:

```
node secretGEN.js
```

- Generate three secret keys with a length of 512 bits:

```
node secretGEN.js 512 3
```

## Contributing

Contributions are welcome! If you encounter any issues or have suggestions for improvements, please submit a pull request or open an issue on the GitHub repository.

To contribute to the Secret Key Generator, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature/bug fix.
3. Make your changes and ensure that the tests pass.
4. Commit your changes and push to your forked repository.
5. Submit a pull request to the main repository.

## License

The Secret Key Generator is released under the [MIT License](LICENSE).

---
