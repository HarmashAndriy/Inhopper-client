const inputs = document.querySelectorAll('.input')
const button = document.getElementById('add_game')


button.addEventListener('click', () => {
    let newGame = {}
    for (input of inputs){
        newGame = {...newGame, [input.name]:input.value}
    }
    console.log(newGame)
    fetch('http://localhost:8000/api/games', {
        method: 'post',
        body: JSON.stringify(newGame),
        headers: {
            'content-type': 'application/json'
        }
    })
})
