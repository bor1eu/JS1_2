// 1. Дан код:
// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2 - в такой нотации сначала идет инкремент переменной a, потом присвоение
// d = b++; alert(d);           // 1 - в такой нотации сначала идет присвоение, потом инкремент переменной b
// c = (2+ ++a); alert(c);      // 5 - в такой нотации сначала идет инкремент переменной a, потом вычисление и присвоение
// d = (2+ b++); alert(d);      // 4 - в такой нотации сначала идет вычисление и присвоение, потом инкремент переменной b
// alert(a);                    // 3 - дважды был инкремент, переменная сначала была равна 1, потом 2, потом 3
// alert(b);                    // 3 - дважды был инкремент, переменная сначала была равна 1, потом 2, потом 3
// Почему код даёт именно такие результаты?
// Ответ: в комментариях выше
//====================================//
// 2. Чему будет равен x в примере ниже?
// var a = 2;
// var x = 1 + (a *= 2);
// Ответ: x = 1 + (2 * 2) = 5
//====================================//
// 3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
// если a и b положительные, вывести их разность;
// если а и b отрицательные, вывести их произведение;
// если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.
// Ответ:
function Task3 () {
    let a = Math.floor (Math.random () * 101) - 50
    let b = Math.floor (Math.random () * 101) - 50
    console.log ("Результат: " + Task3Operation (a, b))
}

function Task3Operation (par1, par2) {
    if (par1 >= 0 && par2 >= 0) {
        return Math.abs (par1 - par2)
    } else if (par1 < 0 && par2 < 0) {
        return par1 * par2
    } else {
        return par1 + par2
    }
}
//====================================//
// 4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.
// Ответ:
function Task4 () {
    //let a = Math.floor (Math.random () * 16)
    let a = +prompt("Введите a:")
    switch (a) {
        case 0:
            console.log ('0')
        case 1:
            console.log ('1')
        case 2:
            console.log ('2')
        case 3:
            console.log ('3')
        case 4:
            console.log ('4')
        case 5:
            console.log ('5')
        case 6:
            console.log ('6')
        case 7:
            console.log ('7')
        case 8:
            console.log ('8')
        case 9:
            console.log ('9')
        case 10:
            console.log ('10')
        case 11:
            console.log ('11')
        case 12:
            console.log ('12')
        case 13:
            console.log ('13')
        case 14:
            console.log ('14')
        case 15:
            console.log ('15')
    }
}
//====================================//

// 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.
// Ответ:
function SumVars (par1, par2) {
    return par1 + par2
}

function SubVars (par1, par2) {
    return par1 - par2
}

function ProdVars (par1, par2) {
    return par1 * par2
}

function DivVars (par1, par2) {
    return par1 / par2
}
//====================================//
// 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).
// Ответ:
function mathOperation(arg1, arg2, operation) {
    if (operation == "+") {
        return SumVars (arg1, arg2)
    } else if (operation == "-") {
        return SubVars (arg1, arg2)
    } else if (operation == "*") {
        return ProdVars (arg1, arg2)
    } else if (operation == "/") {
        return DivVars (arg1, arg2)
    } else {
        return console.log ("Неправильно выбран тип операции")
    }
}

function Task6 () {
    let ch1 = +prompt ("Введите первое число")
    let ch2 = +prompt ("Введите второе число")
    let operSym = prompt ("Выберите операцию: + - сложение, - - вычитание, * - умножение, / - деление")
    console.log (mathOperation (ch1, ch2, operSym))
}
//====================================//
// 7) *Сравнить null и 0. Попробуйте объяснить результат.
// Ответ:
// 0 - конкретное число с типом данных Numbers
// null - не число, а объект, не содержащий ничего
//====================================//
// 8) *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.
// Ответ:
function power (val, pow) {
    return pow !== 1 ? val * power (val, pow-1) : val
}

function Task8 () {
    let num1 = +prompt ("Введите число")
    let num2 = +prompt ("Введите степень")
    console.log (num1 + " в степени " + num2 +": " + power (num1, num2))
}
//====================================//
