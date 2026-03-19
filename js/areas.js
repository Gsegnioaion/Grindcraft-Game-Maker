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
    rope: {
        image: "images/rope.png",
    },
    shovel: {
        image: "images/shovel.png",
    },
    dirt: {
        image: "images/dirt.png",
    },
    axe: {
        image: "images/axe.png",
    },
    gravel: {
        image: "images/gravel.png",
    },
    bone: {
        image: "images/bone.png",
    },
    "oak log": {
        image: "images/oaklog.png",
    },
    bark: {
        image: "images/bark.png",
    },
    mushroom: {
        image: "images/mushroom.png",
    },
    flint: {
        image: "images/flint.png",
    },
    grindstone: {
        image: "images/grindstone.png",
    },
    bowl: {
        image: "images/bowl.png",
    },
    water: {
        image: "images/water.png",
    },
    leaves: {
        image: "images/leaves.png",
    },
    "dry clay": {
        image: "images/dryclay.png",
    },
    "sugar cane": {
        image: "images/sugarcane.png",
    },
    "moist clay": {
        image: "images/moistclay.png",
    },
    "dirt hut": {
        image: "images/dirthut.png",
    },
    seeds: {
        image: "images/seeds.png",
    },
    plot: {
        image: "images/plot.png",
    },
    villager: {
        image: "images/villager.png",
    },
    gatherer: {
        image: "images/gatherer.png",
    },
    "fire starter": {
        image: "images/firestarter.png",
    },
    "simple fire": {
        image: "images/simplefire.png",
    },
    "forester": {
        image: "images/forester.png",
    },
    "grindstone villager": {
        image: "images/grindstonevillager.png",
    },
    "flint shard": {
        image: "images/flintshard.png",
    },
    "spear": {
        image: "images/spear.png",
    },
    "leather": {
        image: "images/leather.png",
    },
    "toughened leather": {
        image: "images/toughenedleather.png",
    },
    "leather worker": {
        image: "images/leatherworker.png",
    },
    "toughened rope": {
        image: "images/toughenedrope.png",
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
            auto: ["gatherer"],
            background: "images/grinds/surface.png",
            resources: [
                {
                    id: "stick",
                    time: [["basket", 0.3], ["", 0.5]],
                    probability: 15,
                },
                {
                    id: "grass",
                    time: [["", 0.6]],
                    probability: 15,
                },
                {
                    id: "stone",
                    time: [["basket", 0.5], ["", 0.7]],
                    probability: 15,
                },
                {
                    id: "dirt",
                    time: [["shovel", 0.6]],
                    probability: 25,
                },
                {
                    id: "gravel",
                    time: [["shovel", 0.7]],
                    probability: 15,
                },
                {
                    id: "bone",
                    time: [["shovel", 0.9]],
                    probability: 15,
                },
            ]
        },
        {
            name: "forest",
            unlocked: false,
            auto: ["forester"],
            background: "images/grinds/forest.png",
            resources: [
                {
                    id: "oak log",
                    time: [["axe", 0.8]],
                    probability: 60,
                },
                {
                    id: "bark",
                    time: [["axe", 0.6]],
                    probability: 40,
                },
            ]
        },
        {
            name: "river",
            unlocked: false,
            background: "images/grinds/river.png",
            resources: [
                {
                    id: "water",
                    time: [["bowl", 1]],
                    probability: 40,
                },
                {
                    id: "leaves",
                    time: [["bowl", 0.5]],
                    probability: 20,
                },
                {
                    id: "dry clay",
                    time: [["bowl", 1.2]],
                    probability: 20,
                },
                {
                    id: "sugar cane",
                    time: [["bowl", 1.1]],
                    probability: 20, 
                },
            ]
        },
        {
            name: "hunting",
            unlocked: false,
            resources: [
                {
                    id: "leather",
                    time: [["spear", 1]],
                    probability: 100,
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
            name: "seeds",
            desc: "Grows wheat",
            cost: [["grass", 1]],
        },
        {
            name: "basket",
            desc: "Speeds up gathering of surface resources",
            cost: [["twine", 10]],
        },
        {
            name: "rope",
            desc: "condensed and braided twine, stronger than before",
            cost: [["twine", 10]],
        },
        {
            name: "shovel",
            desc: "Unlocks the ruins",
            cost: [["stick", 2], ["stone", 3], ["rope", 1]],
        },
        {
            name: "axe",
            desc: "A powerful to cut down wood, unlocks FOREST",
            cost: [["stick", 2], ["rope", 2], ["stone", 4]],
            unlockGrinds: "forest",
        },
        {
            name: "bowl",
            desc: "unlocks river grind",
            cost: [["bark", 3]],
            unlockGrinds: "river",
        },
        {
            name: "dirt",
            desc: "A pile of dirt",
            type: "display",
            cost: [["dirt", 0]],
        },
        {
            name: "gravel",
            desc: "A pile of small rocks",
            type: "display",
            cost: [["gravel", 0]],
        },
        {
            name: "bone",
            desc: "A remnant of something once alive",
            type: "display",
            cost: [["bone", 0]],
        },
        {
            name: "oak log",
            desc: "A part of something greater",
            type: "display",
            cost: [["oak log", 0]],
        },
        {
            name: "bark",
            desc: "Tree skin",
            type: "display",
            cost: [["bark", 0]],
        },
        {
            name: "mushroom",
            desc: "A small mushroom from the forest floor",
            type: "display",
            cost: [["mushroom", 0]],
        },
        {
            name: "water",
            desc: "Literally just water",
            type: "display",
            cost: [["water", 0]],
        },
        {
            name: "leaves",
            desc: "A handful of fresh leaves from a nearby tree",
            type: "display",
            cost: [["leaves", 0]],
        },
        {
            name: "dry clay",
            desc: "Wet clay except its dried",
            type: "display",
            cost: [["dry clay", 0]],
        },
        {
            name: "sugar cane",
            desc: "A cane that contains sugar",
            type: "display",
            cost: [["sugar cane", 0]],
        },
        {
            name: "moist clay",
            desc: "Primitive Glue",
            cost: [["water", 1], ["dry clay", 1]],
        },
        {
            name: "flint",
            desc: "A small shard of something buried in gravel",
            cost: [["gravel", 3]],
        },
        {
            name: "grindstone",
            desc: "Used to sharpen things",
            cost: [["flint", 2], ["oak log", 1], ["stone", 5], ["stick", 5]],
        },
        {
            name: "plot",
            desc: "A plot of farmland growing wheat",
            cost: [["dirt", 8], ["water", 1], ["seeds", 8]],
        },
        {
            name: "dirt hut",
            desc: "A basic shelter that attracts the primitive species",
            cost: [["dirt", 20], ["moist clay", 2]],
        },
        {
            name: "villager",
            desc: "A simple minded villager. Can be given a job",
            cost: [["dirt hut", 1], ["plot", 1]],
        },
        {
            name: "gatherer", 
            desc: "automates surface grind",
            cost: [["villager", 1], ["basket", 1]],
        },
        {
            name: "fire starter",
            desc: "used to start a fire",
            cost: [["rope", 1], ["leaves", 10]],
        },
        {
            name: "simple fire",
            desc: "A fire. Very useful",
            cost: [["fire starter", 1], ["stone", 20], ["stick", 10]],
        },
        {
            name: "grindstone villager",
            desc: "allows you to make flint shards",
            cost: [["villager", 1], ["grindstone", 1]],
        },
        {
            name: "flint shard",
            desc: "used to make bone tools",
            cost: [["grindstone villager", 0], ["flint", 1]],
            amount: 2,
        },
        {
            name: "spear",
            desc: "unlocks hunting grind",
            unlockGrinds: "hunting",
            cost: [["stick", 6], ["stone", 6], ["rope", 4], ["oak log", 1], ["moist clay", 1]],
        }, 
        {
            name: "leather",
            desc: "very nice",
            cost: [["leather", 0]],
            type: "display",
        },
        {
            name: "toughened leather",
            desc: "used to make toughened rope",
            cost: [["leather", 1], ["simple fire", 0]],
        },
        {
            name: "leather worker",
            desc: "can work with leather",
            cost: [["toughened leather", 5], ["villager", 1]],
        },
        {
            name: "toughened rope",
            desc: "used to make bone tools",
            cost: [["toughened leather", 2], ["leather worker", 0]],
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