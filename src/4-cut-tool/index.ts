import { unixCut } from "./cut";

const main = async () => {
    const result = await unixCut(process.argv);
    console.log(result);
}

main();