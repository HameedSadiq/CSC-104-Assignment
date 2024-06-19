function calculate() {
    const principal = parseFloat(document.getElementById('principal').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100;
    const time = parseFloat(document.getElementById('time').value);

    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        alert('Please enter valid numbers');
        return;
    }

    const compoundInterest = principal * Math.pow(1 + rate, time) - principal;
    const totalAmount = principal + compoundInterest;

    document.getElementById('result').innerText = `Compound Interest: $${compoundInterest.toFixed(2)}\nTotal Amount: $${totalAmount.toFixed(2)}`;
}
