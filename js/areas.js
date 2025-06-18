// Game Info
setGameInfo({
    name: "Grindcraft Spanatos Edition",                         // The name of your game!
    version: "0.1",                                     // The current version of your game!
    icon: "images/tabPicture.png",                    // Link or path to an icon image for your game!
    ID: "Save1",                             // Your game's ID! Should be unique for every game!
});

// Resources

addResources({                                          // Function for adding all the resources (items/tools/buildings) that are used in your game!
    dirt: {
        image: "images/dirt.png",
    },
    stick: {
        image: "images/stick.png",
    },
    planks: {
        image: "images/planks.png",
    },
    door: {
        image: "images/door.png",
    },
    "crafting table": {
        image: "images/craftingTable.png",
    },
    "dirt hut": {
        image: "images/dirtHut.png",
    },
});

// Areas

addArea("c",                                            // Function for adding areas to your game
{
    name: "The Ancient Era",
    image: "images/areas/ancientEra.png",
    unlocked: true,
    updateWhileUnactive: false,

    grinds: [
        {
            name: "surface",
            unlocked: true,
            auto: ["Gatherer"],                         // List of items that will auto-grind this grind
            background: "images/grinds/overworld.png",
            
        },
    ],

    crafts:

    update(diff) {                                      // diff is the time in milliseconds since last time the update function was runned
        
    },
}
);

// Function that will be runned when the website is loaded
function onLoad(oldVersion) {
    // If the game version in the player's save is not the same as the current game version:
    if (oldVersion !== player.gameInfo.version) {
        // Write it to the console
        console.log(oldVersion);
    }
}