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
    expect(copyObject.methods.copyObject({
        a: {
            a: 1,
            b: 2,
            c: 3,
            d: {
                c: {
                    d: 4
                },
                b: 3,
            }
        },
        b: {
            a: null
        }
    }, ['a.a', 'a.d.c.d', 'a.d.c.b'])).toEqual({
        a: {
            a: 1,
            d: {
                c: {
                    d: 4
                },
            }
        },
    });
})
