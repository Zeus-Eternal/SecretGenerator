## Secret Key Generator

A new and efficient key generator for your project, providing an easy way to incorporate a key generator into your existing codebase. With the Secret Key Generator, you can generate random secret keys for encryption, authentication, or generating secure tokens. This script is written in Node.js and offers a command-line interface (CLI) for easy usage.

### Table of Contents

- [Description](#description)
- [Installation](#installation)
  - [Windows](#windows)
  - [macOS](#macos)
  - [Linux](#linux)
- [Usage](#usage)
- [Integration into Existing Project](#integration-into-existing-project)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

---

### Description

The Secret Key Generator is a Node.js script that allows you to generate random secret keys with customizable settings. It provides options to generate a single key or multiple keys, specifying the key length and encoding (hex or base64). The script uses the crypto module from Node.js to generate secure random bytes and convert them to the desired encoding.

The Secret Key Generator is designed to be user-friendly and versatile, making it suitable for a wide range of projects. Whether you need to generate keys for encryption algorithms, secure token generation, or any other purpose requiring random secret keys, this script provides a convenient solution.

---

### Installation

To use the Secret Key Generator, follow these steps:

1. Clone the repository by running the following command:

   ```shell
   git clone https://github.com/Zeus-Eternal/SecretGenerator.git
   ```

2. Navigate to the cloned directory:

   ```shell
   cd SecretGenerator
   ```

3. Install the dependencies by running the following command:

   ```shell
   npm install
   ```

#### Windows

1. Install Node.js by downloading the Windows installer from the [official Node.js website](https://nodejs.org).

#### macOS

1. Install Node.js by downloading the macOS installer from the [official Node.js website](https://nodejs.org).

#### Linux

1. Install Node.js using the package manager for your Linux distribution. For example, on Ubuntu, you can use the following command:

   ```shell
   sudo apt-get install nodejs
   ```

---

### Usage

To generate secret keys using the Secret Key Generator, follow these steps:

1. Open a terminal or command prompt.
2. Navigate to the directory where you cloned the Secret Key Generator repository.
3. Run the following command:

   ```shell
   node secretKeyGenerator.js
   ```

4. The script will display a menu with the available options:

   ```
   Secret Key Generator
   ---------------------
   1. Generate Single Key
   2. Generate Multiple Keys
   3. Generate Multiple Keys (Autopilot)
   4. Exit

   Enter your choice:
   ```

5. Enter the corresponding number for the desired option and press Enter.
6. Follow the prompts to enter the required information, such as the number of keys and the length of each key (in bits).
7. The script will generate the secret keys based on the provided settings and display them on the console.
8. Repeat the process for generating more keys or choose the "Exit" option to terminate the script.

Here's an example of the terminal menu and usage:

```
Secret Key Generator
---------------------
1. Generate Single Key
2. Generate Multiple Keys
3. Generate Multiple Keys (Autopilot)
4. Exit

Enter your choice: 2

Enter the number of secret keys to generate (default: 1): 3
Enter the length of Secret Key in bits

 (default: 256): 128

Generating 3 secret key(s)...

Generated 3 secret key(s):

Secret Key 1: c90318f9d4df1d7eb6e44e48631b7a3e
Secret Key 2: a34b086cb787e02e198dfb2ce6e1c101
Secret Key 3: 8b7dc8f7e89edc7e44f703bb609e98a1

Secret Key Generator
---------------------
1. Generate Single Key
2. Generate Multiple Keys
3. Generate Multiple Keys (Autopilot)


4. Exit

Enter your choice: 4

```

---

### Integration into Existing Project

The Secret Key Generator can be easily integrated into your existing project while keeping all the main CLI features. Here's how you can do it:

1. Create a new file named `api.js` in the same directory as the `secretKeyGenerator.js` file.
2. Copy the following code into the `api.js` file:

   ```javascript
   const integrateWithProject = () => {
     // Your integration code here
     console.log('Integrating with existing project...');
   };

   module.exports = {
     integrateWithProject
   };
   ```

3. Save the `api.js` file.
4. Update the `secretKeyGenerator.js` file with the following code:

   ```javascript
   const api = require('./api');

   // Existing code...

   showMenu();
   api.integrateWithProject();
   ```

5. Save the `secretKeyGenerator.js` file.

Now, when you run `node secretKeyGenerator.js`, the Secret Key Generator will provide the CLI menu as before, and after generating the keys, it will call the `integrateWithProject` function from the `api.js` file, allowing you to integrate the generated keys into your existing project.

Feel free to customize the `integrateWithProject` function with your own integration code to seamlessly incorporate the Secret Key Generator into your project. You can access the generated keys and use them as needed within your existing codebase.

---

### API Documentation

The Secret Key Generator provides the following functions:

#### `generateSecretKey(length, encoding)`

Generates a random secret key.

- `length` (number): The length of the secret key in bits.
- `encoding` (string): The encoding for the secret key (hex or base64).

Returns the generated secret key as a string.

#### `generateSingleKey(length, encoding)`

Generates a single random secret key.

- `length` (number): The length of the secret key in bits (default: 256).
- `encoding` (string): The encoding for the secret key (hex or base64, default: hex).

Returns a promise that resolves with the generated secret key.

#### `generateSecretKeys(keySettings)`

Generates multiple random secret keys.

- `keySettings` (Array<{ length: number, encoding: string }>): An array of individual key settings.

Returns a promise that resolves with an array of generated secret keys.

#### `generateMultipleKeys(autopilot)`

Generates multiple random secret keys with autopilot mode.

- `autopilot` (boolean): Whether to use autopilot mode or not.

If `autopilot` is `true`, the function will prompt for the number of secret keys and the length of each key only once, and generate all the keys with the same values.

If `autopilot` is `false`, the function will prompt for the number of secret keys and the length of each key for each key individually.

#### `promptForKeyCount(question, defaultValue)`

Prompts the user to enter

 the number of secret keys to generate.

- `question` (string): The question prompt.
- `defaultValue` (number): The default value if the user enters an invalid input (default: 1).

Returns a promise that resolves with the number of secret keys.

#### `promptForKeyLength(question, defaultValue)`

Prompts the user to enter the length of the secret key in bits.

- `question` (string): The question prompt.
- `defaultValue` (number): The default value if the user enters an invalid input (default: 256).

Returns a promise that resolves with the length of the secret key.

Refer to the code comments for further details on each function.

---

### Contributing

Contributions to the Secret Key Generator are welcome! If you have any ideas, suggestions, or bug reports, please create an issue or submit a pull request. Make sure to follow the existing coding style and conventions.

### License

The Secret Key Generator is open-source software released under the [MIT License](LICENSE).

---

This user document provides an overview of the Secret Key Generator, installation instructions for Windows, macOS, and Linux, usage guidelines with an illustration of the terminal menu and usage, instructions for integrating the generator into an existing project, API documentation for the available functions, contribution guidelines, and license information. Users and developers can refer to this document to understand how to use the script, integrate it into their projects, contribute to its development, and check the licensing details.
