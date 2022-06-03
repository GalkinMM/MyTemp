"use strict"
const anyData = 'Любой тип данных'

// Консоль

    /** 
     * Функция printC(data) заменяет функцию console.log(data) для упрощения записи
     * @type {anyData} */
    const printC = console.log;


// Функции проверки

    /**
     * Функция проверяет, является ли переменная числом
     * @param {anyData} data
     * @return {Boolean}
     */
    const isNumber = data => {
        return (typeof(data) === 'number' && !isNaN(data))
    }

    //Нужно ли это?
    const isPositive = data => {
        if (isNumber(data) && data > 0) {
            return true}
        else {return false}
    }

// info()
    const info = data => {
        switch(true) {
            case isNumber(data):
                printC({
                    data: data, 
                    type: "Number",
                    // Доработать
                });
                break;
        }
    };
