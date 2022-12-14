const playerNumber = playerArr
// All input text value count function
function allInputText(inputText) {
    const inputTexts = document.getElementById(inputText);
    const inputTextString = inputTexts.value;
    const inputValue = parseInt(inputTextString);
    return inputValue
}
// Selected player name count and total player expenses amount 
function setText() {
    const perPlayerInputField = allInputText('per-player-input-field');
    const totalPlayersExpenses = playerNumber.length * perPlayerInputField;
    return totalPlayersExpenses;

}
//budget per player calculate button 
document.getElementById('btn-player-expenses').addEventListener('click', function () {
    const testInputField = allInputText('per-player-input-field');
    if (!testInputField) {
        alert('Please enter the per player amount');
        return;
    }
    const playerExpensesAmount = setText()
    const playerExpensesText = document.getElementById('player-expenses-text');
    if (playerExpensesAmount) {
       return playerExpensesText.innerText = playerExpensesAmount;
    }

})
// total calculate button 
document.getElementById('btn-total-calculate').addEventListener('click', function () {
    const managerInputField = allInputText('manager-input-field');
    const coachInputField = allInputText('coach-input-field')
    const playerExpensesAmount = setText();
    const totalCost = playerExpensesAmount + managerInputField + coachInputField;
    if (!totalCost) {
        alert('Please enter the number')
        return;
    }
    const totalCostText = document.getElementById('total-cost')
    if (totalCost) {
        return totalCostText.innerText = totalCost;
    }
})
