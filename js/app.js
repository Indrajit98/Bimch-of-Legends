const playerArr = []
// all select player name button 
function btnPlayerSelect(element) {
    const playerName = element.parentNode.childNodes[1].innerText
    const name = {
        playerName: playerName,
    }
    if (playerArr.length == 5) {
        return alert('You can select a maximum of 5 players ')
    }
    else {
        playerArr.push(name);
    }
    playerSelectedList();

    // button disable
    // element.disabled = true
    element.setAttribute('disabled','')
    element.style.backgroundColor = '#A2A9AF';

}
// player name setup
const selectName = document.getElementById('select-name')
selectName.textContent = ''
function playerSelectedList() {
    const ol = document.createElement('li')
    for (let i = 0; i < playerArr.length; i++) {
        ol.innerText = `${i + 1}.  ${playerArr[i].playerName}`
    }
    selectName.appendChild(ol).innerText
    ol.style.paddingBottom= '5px';
    selectName.style.fontSize='18px'
    selectName.style.fontFamily='manrope'
    const totalPlayerNumber = document.getElementById('total-players')
    totalPlayerNumber.innerHTML = playerArr.length;

}
