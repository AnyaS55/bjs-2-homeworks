"use strict";

function solveEquation(a, b, c) {
    const discriminant = b ** 2 - 4 * a * c;
    if (discriminant < 0) {
        return []; // нет корней
    } else if (discriminant === 0) {
        const root = -b / (2 * a);
        return [root]; // один корень
    } else {
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return [root1, root2]; // два корня
    }
}



function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    // Проверка на типы данных
    if (
        typeof percent !== "number" ||
        typeof contribution !== "number" ||
        typeof amount !== "number" ||
        typeof countMonths !== "number"
    ) {
        return false;
    }

    // Преобразование процентной ставки в дробное число и ежемесячной ставки
    const monthlyPercent = percent / 100 / 12;

    // Расчет тела кредита
    const creditBody = amount - contribution;

    // Расчет ежемесячного платежа
    const monthlyPayment =
        creditBody *
        (monthlyPercent +
            monthlyPercent / ((1 + monthlyPercent) ** countMonths - 1));

    // Расчет общей суммы к оплате
    const totalAmount = countMonths * monthlyPayment;

    // Округление и возврат результата
    return parseFloat(totalAmount.toFixed(2));
}