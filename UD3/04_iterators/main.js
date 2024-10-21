var pilots = [
  {
    id: 2,
    name: "Wedge Antilles",
    faction: "Rebels",
    years: 10
  },
  {
    id: 8,
    name: "Ciena Ree",
    faction: "Empire",
    years: 20
  },
  {
    id: 40,
    name: "Iden Versio",
    faction: "Empire",
    years: 30
  },
  {
    id: 66,
    name: "Thane Kyrell",
    faction: "Rebels",
    years: 35
  }
];

function iterateSimple() {
  for(let i = 0; i<pilots.length; i++) {
    console.log(pilots[i])
  }
}

function iterateForEach() {
  pilots.forEach(pilot => {
    console.log(pilot)
  })
}

function mapIds() {
  return pilots.map((pilot) => pilot.id)
}

function rebels() {
  pilots.filter(pilot => {
    if (pilot.faction === 'Rebels') {
      console.log(pilot)
    }
  })
}

function totalFaction(faction) {
  return pilots.filter((pilot) => pilot.faction === faction).length
}

function avgYears(faction) {
  let selectedFaction = pilots.filter((pilot) => pilot.faction === faction)
  let suma = 0

  selectedFaction.forEach(pilot => {
     suma += pilot.years;
  })

  return suma / selectedFaction.length;
}

console.log('For normal')
iterateSimple()
console.log('Foreach')
iterateForEach()
let arrayIds = mapIds() 
console.log(arrayIds)

console.log('Filter')
rebels()

let rebeldes = totalFaction('Rebels')
console.log(rebeldes)
let empire = totalFaction('Empire')
let avgYearsEmpire = avgYears('Empire')
console.log(avgYearsEmpire)
let avgYearsRebels = avgYears('Rebels')
console.log(avgYearsRebels)
