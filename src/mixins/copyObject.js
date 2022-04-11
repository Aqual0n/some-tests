/**
 Написать функцию, которая будет принимать объект и копировать из него только те свойства, которые прописаны в условиях. Изменение этих ключей в новом объекте не должны менять значения в старом. Пример вызова функции copy(obj, ['key1.key2.key3', 'key2.key1']).
 Второй аргумент функции - это массив путей, по которым нужно выполнять копирование. Этот аргумент может отсутствовать в объекте, например:

 a = {
b: null
}

 a.b.c
 */

export default {
    methods: {
        copyObject(obj, paths) {
            const newObj = {};

            paths.forEach(path => {
                const splittedPaths = path.split('.');

                let structure = {};

                splittedPaths.forEach((part, index) => {
                    let relatedLink = obj[part];

                    for (let i = 0; i < index; i++) {
                        console.log('here', index, );
                        relatedLink = obj[splittedPaths[i]];
                    }

                    if (relatedLink) {
                        structure[part] = JSON.parse(JSON.stringify(relatedLink));

                        for(const [key, value] of Object.entries(structure)) {
                            console.log('\n')
                            console.log(key, value, part)
                            console.log('\n')

                            if (key !== part) {
                                console.log('\n')
                                console.log('delete?')
                                console.log('\n')

                                delete structure[key];
                            }
                        }
                        console.log('\n')

                        console.log(relatedLink, 'RELATED LINK')
                        console.log('\n')
                    }
                });

                Object.assign(newObj, structure);
            })

            return newObj;
        }
    }
}