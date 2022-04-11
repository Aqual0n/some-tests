import copyObject from "../src/mixins/copyObject";

test('Копирует пути объекта указанные в массиве второго аргумента', () => {
    expect(copyObject.methods.copyObject({
        a: {
            a: 1,
            b: 2,
            c: 3,
        },
        b: {
            a: null
        }
    }, ['a.a', 'b.a'])).toEqual({
        a: {
            a: 1,
        },
        b: {
            a: null
        }
    });
})
