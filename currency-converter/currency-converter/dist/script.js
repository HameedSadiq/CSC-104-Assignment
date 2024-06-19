// Conversion rate (example rate, this can be updated dynamically)
const conversionRate = 1444.00; // 1 USD = 1444.00 NGN (example rate)

function convert() {
    const usd = document.getElementById('usd').value;
    if (usd === '' || isNaN(usd)) {
        alert('Please enter a valid number');
        return;
    }

    const naira = usd * conversionRate;
    document.getElementById('result').innerText = `₦${naira.toFixed(2)}`;
}