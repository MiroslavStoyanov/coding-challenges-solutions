import fs, { ReadStream } from 'fs';
import * as path from 'path';

async function myWC(
    argv: string[],
    stream?: NodeJS.ReadStream | fs.ReadStream
  ): Promise<string> {
    // Command and file name is provided
    if (argv.length === 5) {
        const option = argv[3];
        const fileName = argv[4];
        const srcDir = path.resolve(__dirname, '..', 'src');
        const filePath = path.join(srcDir, fileName);

        if (fs.existsSync(filePath)) {
            switch (option) {
                case '-c':
                    return byteCount(filePath).toString() + ' ' + fileName;
                case '-l':
                    return lineCount(filePath) + ' ' + fileName;;
                case '-w':
                    return wordCount(filePath) + ' ' + fileName;;
                case '-m':
                    return charCount(filePath) + ' ' + fileName;;
                default:
                    return 'Invalid option.';
            }
        }
    }

    // Only file name is provided
    if (argv.length === 4) {
        const fileName = argv[3];
        const srcDir = path.resolve(__dirname, '..', 'src');
        const filePath = path.join(srcDir, fileName);

        if (fs.existsSync(filePath)) {
            return lineCount(filePath) + ' ' +
                wordCount(filePath) + ' ' +
                charCount(filePath) + ' ' + 
                fileName;
        }
    }

    if (stream !== undefined) {
        const data = await readStream(stream);
        const fileContents = data.toString();
        return lineCount(fileContents) + ' ' +
            wordCount(fileContents) + ' ' +
            charCount(fileContents) + ' ' + 
            data;
    }
    return 'File not found.';
}

function byteCount(filePath: string): number {
    return fs.statSync(filePath).size;
}

function lineCount(filePath: string): number {
    const data = fs.readFileSync(filePath, 'utf8');
    const lines = data.split(/\r\n|\r|\n/).length - 1;
    return lines;
}

function wordCount(filePath: string): number {
    const data = fs.readFileSync(filePath, 'utf8');
    if (data === '') {
        return 0;
    }

    const words = data.trim().split(/\s+/).length;
    return words;
}

function charCount(filePath: string): number {
    const data = fs.readFileSync(filePath, 'utf8');
    const chars = data.length;
    return chars;
}

async function readStream(stream: NodeJS.ReadStream | ReadStream): Promise<string> {
    let data = '';
    for await (const chunk of stream) {
        data += chunk;
    }
    return data;
}

export { myWC };