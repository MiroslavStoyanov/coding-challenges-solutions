import fs from 'fs';
import * as path from 'path';

const SRC_DIRECTORY = path.resolve(__dirname, '..', '..', 'src', '4-cut-tool');

async function unixCut(argv: string[]): Promise<string> {
    let delimiter = '\t';
    let fieldIndex = -1;
    let fileName = '';

    // Parse arguments
    for (let i = 3; i < argv.length; i++) {
        if (argv[i] === '-f1') {
            fieldIndex = 0;
        } else if (argv[i] === '-f2') {
            fieldIndex = 1;
        } else if (argv[i].startsWith('-d')) {
            delimiter = argv[i].substring(2) || '\t';
        } else {
            fileName = argv[i];
        }
    }

    if (fieldIndex === -1 || !fileName) {
        console.error('Invalid arguments.');
        process.exit(1);
    }

    const filePath = path.join(SRC_DIRECTORY, fileName);

    if (!fs.existsSync(filePath)) {
        console.error('File does not exist.');
        process.exit(1);
    }

    return extractField(filePath, fieldIndex, delimiter);;
}

function extractField(filePath: string, fieldIndex: number, delimiter: string): string {
    const data = fs.readFileSync(filePath, 'utf8');
    const lines = data.split(/\r?\n/);
    const fields = lines.map(line => {
        const columns = line.split(delimiter);
        return columns[fieldIndex] || '';
    });
    return fields.join('\n');
}

export { unixCut };