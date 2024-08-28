let character1 = prompt('Defina o nome de um personagem.')
let character2 = prompt('Defina o nome de outro personagem.')
let attack = parseInt(prompt(`Quanto vale o poder de ataque do ${character1}?`))
let life = parseInt(prompt(`Quantos pontos de vida tem o ${character2}? `))
let defense = parseInt(prompt(`Quantos pontos de defesa tem o ${character2}?`))
let shield = prompt(`${character2} tem um escudo?`)
let damage = 0

if (attack > defense) {
    if (shield === 'não') {
        damage = attack - defense 
        life -= damage
        alert(`${character1} atacou. ${character2} sofreu ${damage} de dano e não possui escudo. Sua vida agora é ${life}.`)
    } else if (shield === 'sim') {
        damage = (attack - defense) / 2
        life -= damage
        alert(`${character1} atacou. ${character2} sofreu ${damage} de dano e possui um escudo. Sua vida agora é ${life}.`)
    }
} else {
    alert(`${character1} atacou, mas não afetou ${character2}. Nenhum dano causado!`)
}