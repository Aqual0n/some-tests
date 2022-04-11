<template>
    <div class="component-wrapper">
        <h2>Я - компонент для тестов</h2>
    </div>
</template>

<script>
import booleanToInt from "@/mixins/booleanToInt";
import copyObject from "@/mixins/copyObject";

export default {
    mixins: [
        booleanToInt,
        copyObject
    ],
    mounted() {
        const testObject1 = {
            a: {
                a: 1,
                b: 2,
                c: 3,
            },
            b: {
                a: null
            }
        }

        const testPaths1 = ['a.a', 'd.a'];

        let finalObject1 = this.copyObject(testObject1, testPaths1)

        console.log(testObject1, finalObject1);
        console.log(testObject1.a.a, finalObject1.a.a);

        finalObject1.a.a = 2

        console.log(testObject1, finalObject1);
        console.log(testObject1.a.a, finalObject1.a.a);

        this.booleanToInt('qwerty') // 'qwerty'
        this.booleanToInt(1) // 1
        this.booleanToInt(false) // 0
        this.booleanToInt(true) // 1
        this.booleanToInt([1, 'qwerty', false]) // [1, 'qwerty', 0]
        this.booleanToInt([1, 'qwerty', { a: true }]) // [1, 'qwerty', { a: 1 }]
        this.booleanToInt({ a: { b: true }, c: false, d: 'qwerty' }) // { a: { b: 1 }, c: 0, d: 'qwerty' }
        this.booleanToInt({
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
        })
    }
}
</script>