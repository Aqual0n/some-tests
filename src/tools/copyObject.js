/**
 Написать функцию, которая будет принимать объект и копировать из него только те свойства, которые прописаны в условиях. Изменение этих ключей в новом объекте не должны менять значения в старом. Пример вызова функции copy(obj, ['key1.key2.key3', 'key2.key1']).
 Второй аргумент функции - это массив путей, по которым нужно выполнять копирование. Этот аргумент может отсутствовать в объекте, например:

 a = {
b: null
}

 a.b.c
 */

export default function copyObject(obj, paths) {
    const newObj = {};

    paths.forEach(path => {
        const splittedPaths = path.split('.');

        let structure = {};

        splittedPaths.forEach((part) => {
            const relatedLink = obj[part];
            if (relatedLink) {
                structure[part] = obj[part];
            }
        });

        Object.assign(newObj, structure);
    })

    return JSON.parse(JSON.stringify(newObj));
}

