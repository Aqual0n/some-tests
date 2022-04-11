/**
 Реализовать функцию, которая принимает любой тип данных, и преобразовывать тип boolean (при его наличии) в числовое значение.
 В качестве параметров могут быть объекты любого уровня вложенности, массивы, строки, числа и т.д.
 Т.е. пример
 */

export default function booleanToInt(data) {
    const process = (dataPart) => {
        const type = typeof dataPart;

        switch (type) {
            case 'boolean': {
                return handleBooleanCase(dataPart);
            }
            case "object": {
                if (Array.isArray(dataPart)) {
                    return handleArrayCase(dataPart);
                }

                return handleObjectCase(dataPart);
            }
            default: {
                return dataPart;
            }
        }
    };

    const handleBooleanCase = (dataPart) => {
        return dataPart ? 1 : 0;
    };

    const handleObjectCase = (dataPart) => {
        const newObject = {};

        for (let [key, object] of Object.entries(dataPart)) {
            newObject[key] = process(object);
        }

        return newObject;
    };

    const handleArrayCase = (dataPart) => {
        const array = [];

        dataPart.forEach(item => {
            array.push(process(item))
        })

        return array;
    };

    const dataToReturn = process(data);

    return process(data);
}