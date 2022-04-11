/**
 Написать функцию, которая будет принимать объект и копировать из него только те свойства, которые прописаны в условиях. Изменение этих ключей в новом объекте не должны менять значения в старом. Пример вызова функции copy(obj, ['key1.key2.key3', 'key2.key1']).
 Второй аргумент функции - это массив путей, по которым нужно выполнять копирование. Этот аргумент может отсутствовать в объекте, например:

 a = {
b: null
}

 a.b.c
 */

import mergeDeep from "../tools/mergeDeep";

export default {
    methods: {
        copyObject(obj, paths) {
            let newObj = {};
            const structures = [];

            // пробег по каждому пути
            paths.forEach(path => {
                const splittedPaths = path.split('.');

                //каждый путь изначально является полной копией начального объекта

                const template = JSON.stringify(obj);

                let structure = JSON.parse(template);

                //пробежка по каждой части вложенного пути

                splittedPaths.forEach((part, index) => {
                    let relatedLink = structure;

                    // Реализация вложенности без рекурсии

                    for (let i = 0; i <= index - 1; i++) {
                        relatedLink = relatedLink[splittedPaths[i]];
                    }

                    // удаление всех лишних ключей
                    for(const [key, ] of Object.entries(relatedLink)) {
                        if (key !== part) {
                            delete relatedLink[key];
                        }
                    }
                });

                // сохранение получившейся структуры

                structures.push(structure)
            })

            // глубокое слияние всех структур в один объект
            mergeDeep(newObj, ...structures);

            return newObj;
        }
    }
}