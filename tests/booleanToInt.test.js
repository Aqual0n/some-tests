import booleanToInt from "../src/mixins/booleanToInt";

test('Рекурсивно проходит все поля и меняет boolean значения на нули и единицы', () => {
    expect(booleanToInt.methods.booleanToInt([1, 'qwerty', false])).toEqual([1, 'qwerty', 0]);
    expect(booleanToInt.methods.booleanToInt([1, 'qwerty', { a: true }])).toEqual([1, 'qwerty', { a: 1 }]);
    expect(booleanToInt.methods.booleanToInt({ a: { b: true }, c: false, d: 'qwerty' })).toEqual({ a: { b: 1 }, c: 0, d: 'qwerty' });
    expect(booleanToInt.methods.booleanToInt({
        date1: {
            date1_1: 1,
            date1_2: [
                {
                    date2_1: false,
                    date2_2: 'str1',
                },
                {
                    date2_3: true,
                    date2_4: 'str2',
                },
                {
                    date2_5: false,
                    date2_6: 'str1',
                },
            ],
            date1_3: false,
            date1_4: {
                date3_1: true,
                date3_2: false,
                date3_3: 'str1',
                date3_4: true,
                date3_5: 123,
            },
            date1_5: 'true',
        }
    })).toEqual({ date1: {
            date1_1: 1,
            date1_2: [
                {
                    date2_1: 0,
                    date2_2: 'str1',
                },
                {
                    date2_3: 1,
                    date2_4: 'str2',
                },
                {
                    date2_5: 0,
                    date2_6: 'str1',
                },
            ],
            date1_3: 0,
            date1_4: {
                date3_1: 1,
                date3_2: 0,
                date3_3: 'str1',
                date3_4: 1,
                date3_5: 123,
            },
            date1_5: 'true',
        }});
})
