// Оголошуємо функцію calcAverageCalories
function calcAverageCalories(days) {
    // Ініціалізуємо змінну для зберігання загальної кількості калорій
    let totalCalories = 0;

    // Перевіряємо, чи масив days не є порожнім
    if (days.length === 0) {
        return 0; // Повертаємо 0, якщо масив порожній
    }

    // Проходимося по кожному об'єкту у масиві days
    for (let day of days) {
        // Додаємо кількість калорій відповідного дня до загальної кількості
        totalCalories += day.calories;
    }

    // Розраховуємо середнє значення калорій за тиждень
    const averageCalories = totalCalories / days.length;

    return averageCalories; // Повертаємо середнє значення калорій
}

// Перевірка функції з декількома викликами
console.log(
  calcAverageCalories([
    { day: "monday", calories: 3010 },
    { day: "tuesday", calories: 3200 },
    { day: "wednesday", calories: 3120 },
    { day: "thursday", calories: 2900 },
    { day: "friday", calories: 3450 },
    { day: "saturday", calories: 3280 },
    { day: "sunday", calories: 3300 }
  ])
); // Повинно вивести 3180

console.log(
  calcAverageCalories([
    { day: "monday", calories: 2040 },
    { day: "tuesday", calories: 2270 },
    { day: "wednesday", calories: 2420 },
    { day: "thursday", calories: 1900 },
    { day: "friday", calories: 2370 },
    { day: "saturday", calories: 2280 },
    { day: "sunday", calories: 2610 }
  ])
); // Повинно вивести 2270

console.log(
  calcAverageCalories([])
); // Повинно вивести 0
