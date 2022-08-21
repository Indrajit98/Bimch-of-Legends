const playerNumber = playerArr
// All input text value count function
function allInputText(inputText) {
    const inputTexts = document.getElementById(inputText);
    const inputTextString = inputTexts.value;
    const inputValue = parseInt(inputTextString);
    return inputValue
}
// Selected player name count and total player expenses amount 
function setText (){
    const perPlayerInputField = allInputText('per-player-input-field');
    const totalPlayersExpenses = playerNumber.length * perPlayerInputField;
    return totalPlayersExpenses;

} 
//per player budget calculate button 
document.getElementById('btn-player-expenses').addEventListener('click', function () {
   const playerExpensesAmount= setText()
    const playerExpensesText = document.getElementById('player-expenses-text');
    playerExpensesText.innerText = playerExpensesAmount;

})
// total calculate button 
document.getElementById('btn-total-calculate').addEventListener('click', function () {
    const managerInputField = allInputText('manager-input-field');
    const coachInputField = allInputText('coach-input-field')
    const playerExpensesAmount = setText();
    const totalCost = playerExpensesAmount + managerInputField + coachInputField;
    const totalCostText = document.getElementById('total-cost')
    totalCostText.innerText = totalCost;
    
})
