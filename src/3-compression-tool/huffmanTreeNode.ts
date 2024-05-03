import { ICompare } from '@datastructures-js/priority-queue';

interface IHuffmanNode {
    value: string | null;
    weight: number;
    left: IHuffmanNode | null;
    right: IHuffmanNode | null;
    isLeaf(): boolean;
}

class HuffmanNode implements IHuffmanNode {
    public weight: number;
    public value: string | null;
    public left: IHuffmanNode | null;
    public right: IHuffmanNode | null;

    constructor(
        weight: number,
        value: string | null = null,
        left: IHuffmanNode | null = null,
        right: IHuffmanNode | null = null
    ) {
        this.weight = weight;
        this.value = value;
        this.left = left;
        this.right = right;
    }

    isLeaf(): boolean {
        return this.left !== undefined && this.right !== undefined;
    }
}

const compareNode: ICompare<IHuffmanNode> = (
    a: IHuffmanNode,
    b: IHuffmanNode
) => {
    if (a.weight < b.weight) {
        return -1;
    }
    if (a.weight === b.weight) {
        return 0;
    }
    return 1;
};

export { IHuffmanNode, HuffmanNode, compareNode };