document.addEventListener("DOMContentLoaded", function () {
    calculateAndDisplayResult();
});

const inputs = document.querySelectorAll("#calculatorForm input");

inputs.forEach(input => {
    input.addEventListener("change", function () {
        calculateAndDisplayResult();
    });
});

function calculateAndDisplayResult() {
    const eventType = document.querySelector("input[name='eventType']:checked").value;
    const guestProfile = document.querySelector("input[name='guestProfile']:checked").value;
    const sides = document.querySelector("input[name='sides']:checked").value;
    const numberOfGuests = parseInt(document.getElementById("numberOfGuests").value);
    const meatPerGuest = calculateMeatPerGuest(eventType, guestProfile, sides);
    const totalMeat = meatPerGuest * numberOfGuests;
    document.getElementById("resultPerGuest").textContent = "Quantidade por pessoa: " + meatPerGuest.toFixed(3) + " kg";
    document.getElementById("resultTotal").textContent = "Quantidade total: " + totalMeat.toFixed(3) + " kg";
}

function calculateMeatPerGuest(eventType, guestProfile, sides) {
    let baseAmount = 0.3;

    if (eventType === "lunch") {
        baseAmount += 0.1;
    }

    if (eventType === "unending") {
        baseAmount += 0.2;
    }

    if (guestProfile === "adults") {
        baseAmount += 0.1;
    }

    if (sides === "snacks") {
        baseAmount += 0.1;
    }

    return baseAmount;
}
