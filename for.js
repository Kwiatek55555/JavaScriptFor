var monthCounter = 1;
var rabbitPopulation = 30;
for (monthCounter; monthCounter <=6; monthCounter ++) {
    rabbitPopulation *= 2;
    console.log('Liczba królików w Skylark Valley wynosi ' + rabbitPopulation + ' na końcu miesiąca ' + monthCounter);
}

for (monthCounter; monthCounter <=12; monthCounter ++) {
    rabbitPopulation *= 3;
    console.log('Liczba królików w Skylark Valley wynosi ' + rabbitPopulation + ' na końcu miesiąca ' + monthCounter);
}