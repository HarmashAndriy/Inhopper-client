const descriptionElem = document.getElementById('desc')
const generalElem = document.getElementById('general_info')
const requirements = document.getElementById('requirements')
const title = document.getElementById('title')

const getGame = async () => {
    let params = (new URL(document.location)).searchParams
    let id = params.get('id')

    let res = await fetch('https://inhopper-server.vercel.app/api/games/' + id)
    let game = await res.json()
    console.log(game)
    descriptionElem.innerHTML = `
        <img src="${game.image}" alt="">
        <div class="game_info">
            <h1>${game.name}</h1>
            <h3>${game.jenre}</h3>
        </div>
        <p>${game.description}</p>
        <div class="purchase">
            <span>
                <h2 class="game_price">${game.price}</h2>
                <h3 class="disc">${game.discount}%</h3>
            </span>
            <a href="${game.torrent}"><button class="buy">BUY</button></a>
        </div>
    `
    generalElem.innerHTML = `
        <p>Year</p><span>${game.year}</span>
        <p>Jenre</p><span>${game.jenre}</span>
        <p>Company</p><span>${game.company}</span>
        <p>Language</p><span>${game.language}</span>
        <p>Drive</p><span>${game.drive}</span>
    `
    requirements.innerHTML = `
        <h3>Minimal system requirements</h3>
                    <div class="grid_box">
                        <p>OS</p><span>${game.min_os}</span>
                        <p>Processor</p><span>${game.min_processor}</span>
                        <p>RAM</p><span>${game.min_ram}</span>
                        <p>Videocard</p><span>${game.min_videocard}</span>
                    </div>
                    <h3>Optimal system requirements</h3>
                    <div class="grid_box">
                        <p>OS</p><span>${game.os}</span>
                        <p>Processor</p><span>${game.processor}</span>
                        <p>RAM</p><span>${game.ram}</span>
                        <p>Videocard</p><span>${game.videocard}</span>
                    </div>
    `
    title.innerHTML = `
        ${game.name}
    `
}
getGame()