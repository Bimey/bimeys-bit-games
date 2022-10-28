const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log("welcome to terminal quest!")
console.log("You on the outskrirts of a village")
console.log("south of you is a strange abandon house")
console.log("north of you is a forest")
console.log("south of you is riverStreet")
console.log("east leads to a clear dead end")

let gameState = {
    currentLocation:  "start",
    pastLocations: []
}

let map = {
    start : {
        description : function () {console.log("south of you is a strange abandon house. north of you is a forest. south of you is riverStreet. east leads to a clear dead end")},
        commands : {
            search : function () {console.log("You don't find anything unusaul")}
        },
        portals: {
            east : "RiverStreet",
            west : "DeadEnd",
            north : "Forest2",
            south : "AbandonedHouse"
        }
    },
    DeadEnd : {
        description : function () {console.log("You're surrounded in walls. The only way out is back east")},
        commands : {
            search : function () {console.log("One of the bricks is loose! You pull it out, and collect the 10 hidden gold peices")}
        },
        portals: {
            east : "start",
        }
    },
    RiverStreet : {
        description : function () {console.log("north is the forest. south is KingStreet. west is to the start. east is the gambling house")},
        commands : {
            search : function () {console.log("You don't find anything unusaul")}
        },
        portals: {
            east : "GamblingHouse",
            west : "start",
            north : "Forest3",
            south : "KingStreet"
        }
    },
    Forest2 : {
        description : function () {console.log("north lies a large river. south is the start. east and west both lead to more woods")},
        commands : {
            search : function () {console.log("Just ordinary woods nothing unusaul")},
            dig : function () {console.log("You dig a barren hole in the dirt")}
        },
        portals: {
            east : "forest1",
            west : "forest3",
            north : "river2",
            south : "start"
        }
    }
}

function evaluateCommand(command){
    let room = map[gameState.currentLocation]
    if ( Object.keys(room.commands).includes(command) ){
        room.commands[command].call()
    } else if ( command.includes("move")){
        let direction = command.slice(5,)
        if ( Object.keys(room.portals).includes(direction) ) {
            console.log(`move ${direction}`)
            gameState.pastLocations.push(gameState.currentLocation)
            move(room.portals[direction])
        } else {
            console.log(`Unrecognized direction, ${direction}`)
        }
    } else {
        console.log(`Command not recognized, ${command}`)
    }
}

function move(room) {
    gameState.currentLocation = room
    console.log(gameState.currentLocation)
    console.log(gameState.pastLocations)
    map[room].description.call()
}

//evaluateCommand("move east")

rl.on("line", (line) => {
    if (line === "q") {
        rl.close()
    } else {
        evaluateCommand(line)
    }
})
