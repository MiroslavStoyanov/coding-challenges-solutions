import * as path from 'path';

if (process.argv.length === 3) {
    const fileName = process.argv[2];
    const srcDir = path.resolve(__dirname, '..', 'src/3-compression-tool');
    const filePath = path.join(srcDir, fileName);

    process.exit(1);
}