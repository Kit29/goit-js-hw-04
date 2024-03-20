// Оголошуємо функцію isEnoughCapacity
function isEnoughCapacity(products, containerSize) {
    // Ініціалізуємо змінну для зберігання загальної кількості товарів
    let totalQuantity = 0;

    // Проходимося по ключам (назвам товарів) об'єкта products
    for (let product in products) {
        // Додаємо кількість товарів до загальної кількості
        totalQuantity += products[product];
    }

    // Перевіряємо, чи загальна кількість товарів менше або дорівнює containerSize
    if (totalQuantity <= containerSize) {
        return true; // Повертаємо true, якщо всі товари поміщаються в контейнер
    } else {
        return false; // Повертаємо false, якщо товарів більше, ніж може вмістити контейнер
    }
}

// Перевірка функції з декількома викликами
console.log(
  isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
); // Повинно вивести true

console.log(
  isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
); // Повинно вивести false

console.log(
  isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
); // Повинно вивести true

console.log(
  isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
); // Повинно вивести false
