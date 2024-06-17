// FILEPATH: /workspaces/skills-copilot-codespaces-vscode/test.js
const { add } = require('./add'); // assuming your function is exported from add.js

describe('add', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(add(1, 2)).toBe(3);
    });

    test('adds 5 + 6 to equal 11', () => {
        expect(add(5, 6)).toBe(11);
    });

    test('adds -1 + -1 to equal -2', () => {
        expect(add(-1, -1)).toBe(-2);
    });

    test('adds 0 + 0 to equal 0', () => {
        expect(add(0, 0)).toBe(0);
    });
});