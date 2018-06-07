// fetch('http://webtest.multiverseworks.com/triple-triad/game/cards?x=2&y=1&card=3').then(resp => resp.json(resp)).then(json => console.log(json));

function getSetup() {
    fetch('http://webtest.multiverseworks.com/triple-triad/game/setup', {
        header: {'Content-Type': 'application/x-www-form-urlencoded'},
        body: "code=4817309482740283402"
    })
    .then(resp => resp.json())
    .then(json => console.log(json))
}

function getCards() {
    fetch('http://webtest.multiverseworks.com/triple-triad/game/cards', {
        header: {'Content-Type': 'application/x-www-form-urlencoded'},
    })
    .then(resp => resp.json())
    .then(json => console.log(json))
    .catch(error => console.error('Error:', error))
}

function getBoard(){
    fetch('http://webtest.multiverseworks.com/triple-triad/game/board', {
        header: {'Content-Type': 'application/x-www-form-urlencoded'},
    })
    .then(resp => resp.json())
    .then(json => console.log(json))
    .catch(error => console.error('Error:', error))
}

function tossCoin(){
    fetch('http://webtest.multiverseworks.com/triple-triad/game/toss-coin', {
        header: {'Content-Type': 'application/x-www-form-urlencoded'},
    })
    .then(resp => resp.json())
    .then(json => console.log(json))
    .catch(error => console.error('Error:', error))
}

function doCpu(){
    fetch('http://webtest.multiverseworks.com/triple-triad/game/do-cpu', {
        header: {'Content-Type': 'application/x-www-form-urlencoded'},
    })
    .then(resp => resp.json())
    .then(json => console.log(json))
    .catch(error => console.error('Error:', error))
}

var data = {x: "1", y: "2"}

function doPlayer(){
    fetch('http://webtest.multiverseworks.com/triple-triad/game/do-player', {
        method: 'POST',
        body: JSON.stringify(data),
        header: {'Content-Type': 'application/x-www-form-urlencoded'},
    })
    .then(resp => resp.json())
    .then(json => console.log(data))
    .catch(error => console.error('Error:', error))
}

getSetup();
getCards();
getBoard();
tossCoin();
doCpu();
doPlayer();
