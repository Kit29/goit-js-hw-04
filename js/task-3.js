const profile = {
    username: "Jacob",
    playTime: 300,
    
    // Метод для зміни імені користувача
    changeUsername(newName) {
        this.username = newName;
    },

    // Метод для оновлення часу гри
    updatePlayTime(hours) {
        this.playTime += hours;
    },

    // Метод для отримання інформації про профіль
    getInfo() {
        return `${this.username} has ${this.playTime} active hours!`;
    }
};

// Перевірка роботи методів об'єкта profile
console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"
