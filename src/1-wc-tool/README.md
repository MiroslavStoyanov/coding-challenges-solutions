# Build Your Own wc Tool

The `1-wc-tool` is a simple word count tool implemented in TypeScript. It provides functionality to count the number of bytes, lines, words, and characters in a given text file.

## Features

- Count the number of bytes in a file.
- Count the number of lines in a file.
- Count the number of words in a file.
- Count the number of characters in a file.

## Usage

To use the `1-wc-tool`, you can run the following commands:

#### Count Bytes

```sh
node build/1-wc-tool/index.js -c <file-path>
```

#### Count Lines

```sh
node build/1-wc-tool/index.js -l <file-path>
```

#### Count Words

```sh
node build/1-wc-tool/index.js -w <file-path>
```

#### Count Characters

```sh
node build/1-wc-tool/index.js -c <file-path>
```

#### Example

To count the number of lines, words, and characters in test.txt, run:

```sh
node build/1-wc-tool/index.js [test.txt](http://_vscodecontentref_/1)
```

## Development

### Prerequisites
 - Node.js
 - Typescript

### Setup

1. Clone the repository:
```sh
git clone <repository-url>
```
2. Navigate to the project directory:

```sh
cd coding-challenges-solutions
```

3. Install dependencies:
```sh
npm install
```

4. Build
To build the project, run:

```sh
npm run build
```

## File Structure

 - `src/1-wc-tool/`
    - `index.ts`: Entry point for the word count tool.
    - `wc.ts`: Contains the implementation of the word count functions.
    - `test.txt`: Sample text file for testing.
