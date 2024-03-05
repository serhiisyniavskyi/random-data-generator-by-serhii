# Random Data Generator

A JavaScript package for generating random data, designed primarily for testing purposes. This package includes methods to generate random names, ages within a specified range, and email addresses.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Methods](#methods)
- [Contributing](#contributing)
- [License](#license)

## Installation

Install the package using npm:

```bash
npm install random-data-generator
```

## Usage

```javascript
const RandomDataGenerator = require('random-data-generator');

// Generate a random name
const randomName = RandomDataGenerator.generateName();

// Generate a random age between 18 and 40
const randomAge = RandomDataGenerator.generateAge(18, 40);

// Generate a random email address
const randomEmail = RandomDataGenerator.generateEmail();

console.log('Random Name:', randomName);
console.log('Random Age:', randomAge);
console.log('Random Email:', randomEmail);
```

Customize and expand the provided methods to suit your specific data generation needs.

## Methods

### `generateName()`

Generates a random name from a predefined list.

### `generateAge(minAge, maxAge)`

Generates a random age within the specified range.

### `generateEmail()`

Generates a random email address using a random name and a predefined list of domains.

## Contributing

If you have suggestions for improvements or new features, feel free to open an issue or create a pull request. Contributions are welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to adjust the content according to your preferences or include additional sections based on your project's specific needs.