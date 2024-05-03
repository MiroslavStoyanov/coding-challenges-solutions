import { PriorityQueue } from "@datastructures-js/priority-queue";
import { HuffmanNode, IHuffmanNode, compareNode } from "./huffmanTreeNode";

export default class HuffmanTree {
    private table?: Map<string, number>;
    private huffmanTree?: IHuffmanNode;

    public getHuffmanTree(): IHuffmanNode | undefined {
        return this.huffmanTree;
    }

    public getFrequencyTable(): Map<string, number> | undefined {
        return this.table;
    }

    /**
     * Create a frequency table of characters for the given text.
     * 
     * @public
     * @param {string} text - The text to create the frequency table for.
     * @returns {Map<string, number>}
     */
    public createFrequencyTable(text: string): Map<string, number> {
        const table = new Map<string, number>();
        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            if (table.has(char)) {
                const count = Number(table.get(char));
                table.set(char, count + 1);
            } else {
                table.set(char, 1);
            }
        }
        this.table = table;
        return table;
    }

    /**
     * Create a Huffman tree from the given frequency table.
     * 
     * @param {Map<string, number>} table - The frequency table to create the Huffman tree from.
     * @returns {IHuffmanNode | undefined}
     */
    public createHuffmanTree(table: Map<string, number>): IHuffmanNode | undefined {
        const queue = new PriorityQueue<IHuffmanNode>(compareNode);
        table.forEach((value, key) => {
            const node = new HuffmanNode(value, key);
            queue.enqueue(node);
        });

        while (queue.size() > 1) {
            const left = queue.dequeue();
            const right = queue.dequeue();
            const parent = new HuffmanNode(left.weight + right.weight, null, left, right);
            queue.push(parent);
        }

        this.huffmanTree = queue.dequeue();
        return this.huffmanTree;
    }

    /**
     * Encode the given text using the Huffman tree.
     * 
     * @param {string} text - The text to encode.
     * @returns {string}
     */
    public encode(text: string): string {
        if (this.huffmanTree === undefined) {
            throw new Error('Huffman tree is not defined.');
        }

        const table = new Map<string, string>();
        this.buildEncodingTable(this.huffmanTree, '', table);

        let encoded = '';
        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            encoded += table.get(char);
        }

        return encoded;
    }

    /**
     * Decode the given text using the Huffman tree.
     * 
     * @param {string} text - The text to decode.
     * @returns {string}
     */
    public decode(text: string): string {
        if (this.huffmanTree === undefined) {
            throw new Error('Huffman tree is not defined.');
        }

        let decoded = '';
        let node = this.huffmanTree;
        for (let i = 0; i < text.length; i++) {
            const bit = text[i];
            if (node.isLeaf()) {
                decoded += node.value;
                node = this.huffmanTree;
            }
            node = bit === '0' ? node.left : node.right;
        }

        if (node.isLeaf()) {
            decoded += node.value;
        }

        return decoded;
    }

    private buildEncodingTable(node: IHuffmanNode, prefix: string, table: Map<string, string>): void {
        if (node.isLeaf()) {
            table.set(node.value as string, prefix);
        } else {
            this.buildEncodingTable(node.left as HuffmanNode, prefix + '0', table);
            this.buildEncodingTable(node.right as HuffmanNode, prefix + '1', table);
        }
    }
}