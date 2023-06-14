document.getElementById('calculatorForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obter os valores selecionados
    var eventType = document.querySelector('input[name="eventType"]:checked').value;
    var guestProfile = document.querySelector('input[name="guestProfile"]:checked').value;
    var sides = document.querySelector('input[name="sides"]:checked').value;
    var numberOfGuests = parseInt(document.getElementById('numberOfGuests').value);

    // Calcular a quantidade de carne por pessoa
    var meatPerGuest = calculateMeatPerGuest(eventType, guestProfile, sides);

    // Calcular a quantidade total de carne
    var totalMeat = meatPerGuest * numberOfGuests;

    // Exibir os resultados
    document.getElementById('resultPerGuest').textContent = 'Quantidade por pessoa: ' + meatPerGuest.toFixed(3) + ' kg';
    document.getElementById('resultTotal').textContent = 'Quantidade total: ' + totalMeat.toFixed(3) + ' kg';

    document.getElementById('result').style.display = 'block';
});

function calculateMeatPerGuest(eventType, guestProfile, sides) {
    var baseAmount = 0.3;

    if (eventType === 'lunch') {
        baseAmount += 0.1;
    }
    
    if (eventType === 'unending') {
        baseAmount += 0.2;
    }

    if (guestProfile === 'adults') {
        baseAmount += 0.1;
    }

    if (sides === 'snacks') {
        baseAmount += 0.1;
    }

    return baseAmount;
}
