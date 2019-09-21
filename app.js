console.log('worked');

// синяя - 1 - 15000 : 50
// серебряная - 15001 - 150000 : 70
// золотая - 150001 : 100

// Найти итоговое кол-во бонусов, с конкретной покупки

const previousPurchases = 160000;
const currentPurchase = 4000;

let bonusesPerOneThousand;
if (previousPurchases <= 15000) {
    bonusesPerOneThousand = 50;
} else 
if (previousPurchases <= 150000) {
   bonusesPerOneThousand = 70;
} else {
   bonusesPerOneThousand = 100;
}

console.log(bonusesPerOneThousand);