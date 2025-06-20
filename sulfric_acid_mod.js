elements.sulfuric_acid = {
    color: "#b0e0e6",
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
        "plant": { elem1: null, elem2: "sugar", chance: 0.5 },
        "sugar": { elem1: null, elem2: "carbon", chance: 0.3 },
        "metal": { elem1: "salt", elem2: "hydrogen", chance: 0.7 },
        "water": {
            elem1: "steam",
            elem2: "steam",
            chance: 0.9,
            temp1: 300,
            temp2: 300
        }
    }
};

elements.acid_gas = {
    color: "#a0e0ff",
    behavior: behaviors.GAS,
    category: "gases",
    state: "gas",
    hidden: true,
    density: 1.8,
    tempLow: 337,
    stateLow: "sulfuric_acid",
    desc: "Vaporized acid. Can be dangerous if inhaled."
};
