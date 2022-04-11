import booleanToInt from "../src/mixins/booleanToInt";

test('Рекурсивно проходит все поля и меняет boolean значения на нули и единицы', () => {
    expect(booleanToInt.methods.booleanToInt([1, 'qwerty', false])).toEqual([1, 'qwerty', 0]);
    expect(booleanToInt.methods.booleanToInt([1, 'qwerty', { a: true }])).toEqual([1, 'qwerty', { a: 1 }]);
})
