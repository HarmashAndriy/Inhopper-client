const tabs = document.querySelectorAll('.tab')
const gamesElem = document.getElementById('cards')

let activeTab = tabs[0]
activeTab.classList.toggle('active')
for(let tab of tabs){
    console.log(tab)
    tab.addEventListener("click", (event)=>{
        activeTab.classList.remove('active')
        activeTab = event.target
        activeTab.classList.add('active')
    })
}

const adding = async () => {
    const res = await fetch('http://localhost:8000/api/games')
    const games = await res.json()
    let contentGamesElem = ''
    for(let game of games){
        contentGamesElem += `
            <div class="card">
                <a href="game.html?id=${game._id}">
                    <div class="box_img">
                        <img src="${game.image}" alt="">
                        <div class="box_shadow"></div>
                        <div class="price">${game.price}</div>
                    </div>
                    <div class="card_info">
                        <h1 class="name">${game.name}</h1>
                        <h2 class="jenre">${game.jenre}</h2>
                    </div>
                    <div class="box_desc">
                        <div class="description">
                            <p>${game.description}</p>
                        </div>
                    </div>
                </a>
            </div>
        `
    }
    gamesElem.innerHTML = contentGamesElem
}
adding();













// let game = {
//     name: 'resident evil 8',
//     jenre: 'action',
//     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam natus dicta magni explicabo ex temporibus qui iure expedita voluptate corrupti. Ad reprehenderit odio numquam tenetur iste adipisci autem qui suscipit voluptatum accusantium, quia explicabo quis quod similique veritatis nemo pariatur voluptatibus ea harum ratione rerum deserunt nisi officiis cum. Asperiores.',
//     price: 40,
//     discount: 13,
//     year: 2019,
//     company: 'EA', 
//     language: 'english',
//     min_os: 'Windows 8.1',
//     min_processor: 'intel core 2 Q6600',
//     min_ram: 4,
//     min_videocard: 'NVIDIA 9800 GT',
//     os: 'Windows 8.1',
//     processor: 'Intel Core i5 3470',
//     ram: 8,
//     videocard: 'NVIDIA GTX 660',
//     drive: 72,
//     image: ''
// }