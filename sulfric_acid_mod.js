// Sulfuric Acid Element Mod for Sandboxels

elements.sulfuric_acid = {
    color: "#b0e0e6", // pale blue liquid
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    density: 1840,
    tempHigh: 337,
    stateHigh: "acid_gas",
    tempLow: -10,
    hidden: false,
    desc: "A strong corrosive acid that reacts violently with water and metals.",

    reactions: {
        // Burns organic materials
        "sugar": { elem1: null, elem2: "carbon", chance: 0.3 },

        // Reacts with metals
        "metal": { elem1: "salt", elem2: "hydrogen", chance: 0.7 },

        // Violent reaction with water (exothermic)
        "water": {
            elem1: "steam",
            elem2: "steam",
            chance: 0.9,
            temp1: 300,
            temp2: 300
        }
    }
};

// Optional: Acid Gas when heated
elements.acid_gas = {
    color: "#a0e0ff",
    behavior: behaviors.GAS,
    category: "gases",
    state: "gas",
    hidden: true,
    density: 1.8,
    tempLow: 337,
    stateLow: "sulfuric_acid",
    desc: "Vaporized acid. May cause burns or reactions in air."
};
