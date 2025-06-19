// Game Info
setGameInfo({
    name: "GrindCraft Spanatos Edition",                         // The name of your game!
    version: "0.1",                                     // The current version of your game!
    icon: "images/tabPicture.png",                    // Link or path to an icon image for your game!
    ID: "spanatos",                             // Your game's ID! Should be unique for every game!
});

// Resources

addResources({                                          // Function for adding all the resources (items/tools/buildings) that are used in your game!
    stick: {
        image: "images/stick.png",
    },
    grass: {
        image: "images/grass.png",
    },
    stone: {
        image: "images/stone.png",
    },
    twine: {
        image: "images/twine.png",
    },
    basket: {
        image: "images/basket.png",
    },
});

// Areas

addArea("c",                                            // Function for adding areas to your game
{
    name: "The Ancient Era",
    image: "images/areas/ancientEra.png",
    unlocked: true,
    updateWhileUnactive: true,

    grinds: [
        {
            name: "surface",
            unlocked: true,                     // List of items that will auto-grind this grind
            background: "images/grinds/surface.png",
            resources: [
                {
                    id: "stick",
                    time: [["basket", 0.3], ["", 0.5]],
                    probability: 30,
                },
                {
                    id: "grass",
                    time: [["", 0.6]],
                    probability: 40,
                },
                {
                    id: "stone",
                    time: [["basket", 0.5], ["", 0.7]],
                    probability: 30,
                },
            ]
        },
    ],

    crafts: [
        {
            name: "stick",
            desc: "The foundation of civilization",
            type: "display",
            cost: [["stick", 0]],
        },
        {
            name: "grass",
            desc: "Used to get twine and seeds",
            type: "display",
            cost: [["grass", 0]],
        },
        {
            name: "stone",
            desc: "Can be a weapon in a bad situation",
            type: "display",
            cost: [["stone", 0]],

        },
        {
            name: "twine",
            desc: "Used to make Rope and Baskets",
            type: "craft",
            amount: 2,
            cost: [["grass", 1]],
        },
        {
            name: "basket",
            desc: "Speeds up gathering of surface resources",
            cost: [["twine", 10]],
        },
    ],

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