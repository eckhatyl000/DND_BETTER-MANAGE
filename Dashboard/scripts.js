function rollDice() {
    const diceType = document.getElementById('diceType').value;
    const diceAmount = document.getElementById('diceAmount').value;
    const outputContainer = document.getElementById('diceOutput');

    // Clear previous results
    outputContainer.innerHTML = '';

    // Validate input values
    if (diceType === '' || diceAmount === '') {
        displayError('Please select a dice type and enter the amount.');
        return;
    }

    if (!Number.isInteger(+diceAmount) || +diceAmount <= 0) {
        displayError('Please enter a valid positive number for dice amount.');
        return;
    }

    const validDiceTypes = ['D4', 'D6', 'D8', 'D10', 'D12', 'D20', 'D100'];
    if (!validDiceTypes.includes(diceType)) {
        displayError('Please select a valid dice type.');
        return;
    }

    // Perform dice roll calculations
    let total = 0;
    let rolls = [];

    for (let i = 0; i < diceAmount; i++) {
        const roll = Math.floor(Math.random() * parseInt(diceType.slice(1))) + 1;
        rolls.push(roll);
        total += roll;
    }

    // Update the output container with the result
    const resultHTML = document.createElement('div');
    resultHTML.innerHTML = `
    <p>Rolling ${diceAmount} ${diceType}(s)...</p>
    <p>Results: ${rolls.join(', ')}</p>
    <p>Total: ${total}</p>
  `;

    outputContainer.appendChild(resultHTML);
}

function displayError(message) {
    const errorContainer = document.getElementById('errorContainer');
    errorContainer.textContent = message;
}
