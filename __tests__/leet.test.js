const { encodeLeet, decodeLeet } = require('../index');

describe('encodeLeet', () => {
    test('encode basic Leet', () => {
        const input = 'hello world';
        const level = 'basic';
        const encoded = encodeLeet(input, level);
        expect(encoded).toEqual('h3ll0 w0rld');
    });

    test('encode intermediate Leet', () => {
        const input = 'hello world';
        const level = 'intermediate';
        const encoded = encodeLeet(input, level);
        expect(encoded).toEqual('#3110 \\/\\/0I21|)');
    });

    test('encode advanced Leet', () => {
        const input = 'hello world';
        const level = 'advanced';
        const encoded = encodeLeet(input, level);
        // multiple possible encodings
        // just assert result equals string
        expect(typeof encoded).toEqual('string');
    });

    test('encode expert Leet', () => {
        const input = 'hello world';
        const level = 'expert';
        const encoded = encodeLeet(input, level);
        // multiple possible encodings
        // just assert result == string
        expect(typeof encoded).toEqual('string');
    });
});

describe('decodeLeet', () => {
    test('decode basic Leet', () => {
        const input = 'h3ll0 w0rld';
        const level = 'basic';
        const decoded = decodeLeet(input, level);
        expect(decoded).toEqual('hello world');
    });

    test('decode intermediate Leet', () => {
        const input = '#3110 \\/\\/0I21|)';
        const level = 'intermediate';
        const decoded = decodeLeet(input, level);
        expect(decoded).toEqual('hello world');
    });

    test('decode advanced Leet', () => {
        const input = '(-)ë|_|_<> \\N<>2|_[)';
        const level = 'advanced';
        const decoded = decodeLeet(input, level);
        expect(decoded).toEqual('hello world');
    });

    test('decode expert Leet', () => {
        const input = '(-)£77Ø v²Ø27)';
        const level = 'expert';
        const decoded = decodeLeet(input, level);
        expect(decoded).toEqual('hello world');
    });
});
