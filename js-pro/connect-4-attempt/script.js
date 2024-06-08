class Tile {
  constructor(x, y) {
    this.x = x
    this.y = y
    this.class = ['tile', `row-${x + 1}`, `col-${y + 1}`, 'empty']
  }
}

let row = []

let players = ['red', 'yellow']
let currentPlayer = players[0]

for (let i = 0; i < 6; i++) {
  for (let j = 0; j < 7; j++) {
    let tile = new Tile(i, j)
    row.push(tile)
  }
}

const board = document.querySelector('.board')

row.forEach(tile => {
  let div = document.createElement('div')
  div.className = tile.class.join(' ')
  board.appendChild(div)
})

const tiles = document.querySelectorAll('.tile')

tiles.forEach(tile => {
  let targetClass = `${tile.classList[2]}`
  let targetCol = Array.from(tiles).filter(tile =>
    tile.classList.contains(targetClass)
  )

  tile.addEventListener('mouseover', () => {
    tiles.forEach(tile => {
      if (tile.classList.contains(targetClass)) {
        tile.classList.add('hover')
      }
    })
  })
  tile.addEventListener('mouseout', () => {
    tiles.forEach(tile => {
      tile.classList.remove('hover')
    })
  })

  tile.addEventListener('click', () => {
    if (targetCol.length === 0) return
    let tileToFill = targetCol.pop()
    tileToFill.classList.remove('empty')
    tileToFill.classList.add(currentPlayer, 'filled')
    currentPlayer = currentPlayer === players[0] ? players[1] : players[0]
  })
})
