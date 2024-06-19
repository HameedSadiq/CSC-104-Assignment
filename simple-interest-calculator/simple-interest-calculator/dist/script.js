function calculateInterest() {
    // Get the values from the input fields
    const principal = document.getElementById('principal').value;
    const rate = document.getElementById('rate').value;
    const time = document.getElementById('time').value;

    // Calculate the simple interest
    const interest = (principal * rate * time) / 100;

    // Display the result
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Simple Interest: $${interest.toFixed(2)}`;
}