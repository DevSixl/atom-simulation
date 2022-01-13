const elements = {
    "None": {
        name: "N/A",
        symbol: "N/A",
        number: 0,
        mass: 0,
        configuration: {},
        family: "null"
    },

    "Hydrogen": {
        name: "Hydrogen",
        symbol: "H",
        number: 1,
        mass: 1.008,
        configuration: {1: ["s1"]},
        family: "r-nonmetal"
    },

    "Helium": {
        name: "Helium",
        symbol: "He",
        number: 2,
        mass: 4.0026,
        configuration: {1: ["s2"]},
        family: "noble"
    },

    "Lithium": {
        name: "Lithium",
        symbol: "Li",
        number: 3,
        mass: 6.94,
        configuration: {1: ["s2"], 2: ["s1"]},
        family: "alkali"
    },

    "Beryllium": {
        name: "Beryllium",
        symbol: "Be",
        number: 4,
        mass: 9.0122,
        configuration: {1: ["s2"], 2: ["s2"]},
        family: "alkaline"
    },

    "Boron": {
        name: "Boron",
        symbol: "B",
        number: 5,
        mass: 10.81,
        configuration: {1: ["s2"], 2: ["s2", "p1"]},
        family: "metalloid"
    },

    "Carbon": {
        name: "Carbon",
        symbol: "C",
        number: 6,
        mass: 12.011,
        configuration: {1: ["s2"], 2: ["s2", "p2"]},
        family: "r-nonmetal"
    },

    "Nitrogen": {
        name: "Nitrogen",
        symbol: "N",
        number: 7,
        mass: 14.007,
        configuration: {1: ["s2"], 2: ["s2", "p3"]},
        family: "r-nonmetal"
    },

    "Oxygen": {
        name: "Oxygen",
        symbol: "O",
        number: 8,
        mass: 15.999,
        configuration: {1: ["s2"], 2: ["s2", "p4"]},
        family: "r-nonmetal"
    },

    "Fluorine": {
        name: "Fluorine",
        symbol: "F",
        number: 9,
        mass: 18.998,
        configuration: {1: ["s2"], 2: ["s2", "p5"]},
        family: "r-nonmetal"
    },

    "Neon": {
        name: "Neon",
        symbol: "Ne",
        number: 10,
        mass: 20.180,
        configuration: {1: ["s2"], 2: ["s2", "p6"]},
        family: "noble"
    },

    "Sodium": {
        name: "Sodium",
        symbol: "Na",
        number: 11,
        mass: 22.990,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s1"]},
        family: "alkali"
    },

    "Magnesium": {
        name: "Magnesium",
        symbol: "Mg",
        number: 12,
        mass: 24.305,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2"]},
        family: "alkaline"
    },

    "Aluminium": {
        name: "Aluminium",
        symbol: "Al",
        number: 13,
        mass: 26.982,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p1"]},
        family: "pt"
    },

    "Silicon": {
        name: "Silicon",
        symbol: "Si",
        number: 14,
        mass: 28.085,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p2"]},
        family: "metalloid"
    },

    "Phosphorus": {
        name: "Phosphorus",
        symbol: "P",
        number: 15,
        mass: 30.974,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p3"]},
        family: "r-nonmetal"
    },

    "Sulfur": {
        name: "Sulfur",
        symbol: "S",
        number: 16,
        mass: 32.06,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p4"]},
        family: "r-nonmetal"
    },

    "Chlorine": {
        name: "Chlorine",
        symbol: "Cl",
        number: 17,
        mass: 35.45,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p5"]},
        family: "r-nonmetal"
    },

    "Argon": {
        name: "Argon",
        symbol: "Ar",
        number: 18,
        mass: 39.948,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6"]},
        family: "noble"
    },

    "Potassium": {
        name: "Potassium",
        symbol: "K",
        number: 19,
        mass: 39.098,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6"], 4: ["s1"]},
        family: "alkali"
    },

    "Calcium": {
        name: "Calcium",
        symbol: "Ca",
        number: 20,
        mass: 40.078,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6"], 4: ["s2"]},
        family: "alkaline"
    },

    "Scandium": {
        name: "Scandium",
        symbol: "Sc",
        number: 21,
        mass: 44.956,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d1"], 4: ["s2"]},
        family: "transition"
    },

    "Titanium": {
        name: "Titanium",
        symbol: "Ti",
        number: 22,
        mass: 47.867,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d2"], 4: ["s2"]},
        family: "transition"
    },

    "Vanadium": {
        name: "Vanadium",
        symbol: "V",
        number: 23,
        mass: 50.942,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d3"], 4: ["s2"]},
        family: "transition"
    },

    "Chromium": {
        name: "Chromium",
        symbol: "Cr",
        number: 24,
        mass: 51.996,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d5"], 4: ["s1"]},
        family: "transition"
    },

    "Manganese": {
        name: "Manganese",
        symbol: "Mn",
        number: 25,
        mass: 54.938,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d5"], 4: ["s2"]},
        family: "transition"
    },

    "Iron": {
        name: "Iron",
        symbol: "Fe",
        number: 26,
        mass: 55.845,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d6"], 4: ["s2"]},
        family: "transition"
    },

    "Cobalt": {
        name: "Cobalt",
        symbol: "Co",
        number: 27,
        mass: 58.933,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d7"], 4: ["s2"]},
        family: "transition"
    },

    "Nickel": {
        name: "Nickel",
        symbol: "Ni",
        number: 28,
        mass: 58.693,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d8"], 4: ["s2"]},
        family: "transition"
    },

    "Copper": {
        name: "Copper",
        symbol: "Cu",
        number: 29,
        mass: 63.546,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s1"]},
        family: "transition"
    },

    "Zinc": {
        name: "Zinc",
        symbol: "Zn",
        number: 30,
        mass: 65.38,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2"]},
        family: "transition"
    },

    "Gallium": {
        name: "Gallium",
        symbol: "Ga",
        number: 31,
        mass: 69.723,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p1"]},
        family: "pt"
    },

    "Germanium": {
        name: "Germanium",
        symbol: "Ge",
        number: 32,
        mass: 72.630,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p2"]},
        family: "metalloid"
    },

    "Arsenic": {
        name: "Arsenic",
        symbol: "As",
        number: 33,
        mass: 74.922,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p3"]},
        family: "metalloid"
    },

    "Selenium": {
        name: "Selenium",
        symbol: "Se",
        number: 34,
        mass: 78.971,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p4"]},
        family: "r-nonmetal"
    },

    "Bromine": {
        name: "Bromine",
        symbol: "Br",
        number: 35,
        mass: 79.904,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p5"]},
        family: "r-nonmetal"
    },

    "Krypton": {
        name: "Krypton",
        symbol: "Kr",
        number: 36,
        mass: 83.798,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6"]},
        family: "noble"
    },

    "Rubidium": {
        name: "Rubidium",
        symbol: "Rb",
        number: 37,
        mass: 85.468,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6"], 5: ["s1"]},
        family: "alkali"
    },

    "Strontium": {
        name: "Strontium",
        symbol: "Sr",
        number: 38,
        mass: 87.62,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6"], 5: ["s2"]},
        family: "alkaline"
    },

    "Yttrium": {
        name: "Yttrium",
        symbol: "Y",
        number: 39,
        mass: 88.906,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d1"], 5: ["s2"]},
        family: "transition"
    },

    "Zirconium": {
        name: "Zirconium",
        symbol: "Zr",
        number: 40,
        mass: 91.224,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d2"], 5: ["s2"]},
        family: "transition"
    },

    "Niobium": {
        name: "Niobium",
        symbol: "Nb",
        number: 41,
        mass: 92.906,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d4"], 5: ["s1"]},
        family: "transition"
    },

    "Molybdenum": {
        name: "Molybdenum",
        symbol: "Mo",
        number: 42,
        mass: 95.95,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d5"], 5: ["s1"]},
        family: "transition"
    },

    "Technetium": {
        name: "Technetium",
        symbol: "Tc",
        number: 43,
        mass: 98,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d5"], 5: ["s2"]},
        family: "transition"
    },

    "Ruthenium": {
        name: "Ruthenium",
        symbol: "Ru",
        number: 44,
        mass: 101.07,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d7"], 5: ["s1"]},
        family: "transition"
    },

    "Rhodium": {
        name: "Rhodium",
        symbol: "Rh",
        number: 45,
        mass: 102.91,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d8"], 5: ["s1"]},
        family: "transition"
    },

    "Palladium": {
        name: "Palladium",
        symbol: "Pd",
        number: 46,
        mass: 106.42,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d10"]},
        family: "transition"
    },

    "Silver": {
        name: "Silver",
        symbol: "Ag",
        number: 47,
        mass: 107.87,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d10"], 5: ["s1"]},
        family: "transition"
    },

    "Cadmium": {
        name: "Cadmium",
        symbol: "Cd",
        number: 48,
        mass: 112.41,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d10"], 5: ["s2"]},
        family: "transition"
    },

    "Indium": {
        name: "Indium",
        symbol: "In",
        number: 49,
        mass: 114.82,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d10"], 5: ["s2", "p1"]},
        family: "pt"
    },

    "Tin": {
        name: "Tin",
        symbol: "Sn",
        number: 50,
        mass: 118.71,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d10"], 5: ["s2", "p2"]},
        family: "pt"
    },

    "Antimony": {
        name: "Antimony",
        symbol: "Sb",
        number: 51,
        mass: 121.76,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d10"], 5: ["s2", "p3"]},
        family: "metalloid"
    },

    "Tellurium": {
        name: "Tellurium",
        symbol: "Te",
        number: 52,
        mass: 127.60,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d10"], 5: ["s2", "p4"]},
        family: "metalloid"
    },

    "Iodine": {
        name: "Iodine",
        symbol: "I",
        number: 53,
        mass: 126.90,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d10"], 5: ["s2", "p5"]},
        family: "r-nonmetal"
    },

    "Xenon": {
        name: "Xenon",
        symbol: "Xe",
        number: 54,
        mass: 131.29,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d10"], 5: ["s2", "p6"]},
        family: "noble"
    },

    "Caesium": {
        name: "Caesium",
        symbol: "Cs",
        number: 55,
        mass: 132.91,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d10"], 5: ["s2", "p6"], 6: ["s1"]},
        family: "alkali"
    },

    "Barium": {
        name: "Barium",
        symbol: "Ba",
        number: 56,
        mass: 137.33,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d10"], 5: ["s2", "p6"], 6: ["s2"]},
        family: "alkaline"
    },

    "Lanthanum": {
        name: "Lanthanum",
        symbol: "La",
        number: 57,
        mass: 138.91,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d10"], 5: ["s2", "p6", "d1"], 6: ["s2"]},
        family: "lanthanide"
    },

    "Cerium": {
        name: "Cerium",
        symbol: "Ce",
        number: 58,
        mass: 140.12,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d10", "f1"], 5: ["s2", "p6", "d1"], 6: ["s2"]},
        family: "lanthanide"
    },

    "Praseodymium": {
        name: "Praseodymium",
        symbol: "Pr",
        number: 59,
        mass: 140.91,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d10", "f3"], 5: ["s2", "p6"], 6: ["s2"]},
        family: "lanthanide"
    },

    "Neodymium": {
        name: "Neodymium",
        symbol: "Nd",
        number: 60,
        mass: 144.24,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d10", "f4"], 5: ["s2", "p6"], 6: ["s2"]},
        family: "lanthanide"
    },

    "Promethium": {
        name: "Promethium",
        symbol: "Pm",
        number: 61,
        mass: 145,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d10", "f5"], 5: ["s2", "p6"], 6: ["s2"]},
        family: "lanthanide"
    },

    "Samarium": {
        name: "Samarium",
        symbol: "Sm",
        number: 62,
        mass: 150.36,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d10", "f6"], 5: ["s2", "p6"], 6: ["s2"]},
        family: "lanthanide"
    },

    "Europium": {
        name: "Europium",
        symbol: "Eu",
        number: 63,
        mass: 151.96,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d10", "f7"], 5: ["s2", "p6"], 6: ["s2"]},
        family: "lanthanide"
    },

    "Gadolinium": {
        name: "Gadolinium",
        symbol: "Gd",
        number: 64,
        mass: 157.25,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d10", "f7"], 5: ["s2", "p6", "d1"], 6: ["s2"]},
        family: "lanthanide"
    },

    "Terbium": {
        name: "Terbium",
        symbol: "Tb",
        number: 65,
        mass: 158.93,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d10", "f9"], 5: ["s2", "p6"], 6: ["s2"]},
        family: "lanthanide"
    },

    "Dysprosium": {
        name: "Dysprosium",
        symbol: "Dy",
        number: 66,
        mass: 162.50,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d10", "f10"], 5: ["s2", "p6"], 6: ["s2"]},
        family: "lanthanide"
    },

    "Holmium": {
        name: "Holmium",
        symbol: "Ho",
        number: 67,
        mass: 164.93,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d10", "f11"], 5: ["s2", "p6"], 6: ["s2"]},
        family: "lanthanide"
    },

    "Erbium": {
        name: "Erbium",
        symbol: "Er",
        number: 68,
        mass: 167.26,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d10", "f12"], 5: ["s2", "p6"], 6: ["s2"]},
        family: "lanthanide"
    },

    "Thulium": {
        name: "Thulium",
        symbol: "Tm",
        number: 69, //nice
        mass: 168.93,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d10", "f13"], 5: ["s2", "p6"], 6: ["s2"]},
        family: "lanthanide"
    },

    "Ytterbium": {
        name: "Ytterbium",
        symbol: "Yb",
        number: 70,
        mass: 173.05,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d10", "f14"], 5: ["s2", "p6"], 6: ["s2"]},
        family: "lanthanide"
    },

    "Lutetium": {
        name: "Lutetium",
        symbol: "Lu",
        number: 71,
        mass: 174.97,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d10", "f14"], 5: ["s2", "p6", "d1"], 6: ["s2"]},
        family: "lanthanide"
    },

    "Hafnium": {
        name: "Hafnium",
        symbol: "Hf",
        number: 72,
        mass: 178.49,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d10", "f14"], 5: ["s2", "p6", "d2"], 6: ["s2"]},
        family: "transition"
    },

    "Tantalum": {
        name: "Tantalum",
        symbol: "Ta",
        number: 73,
        mass: 180.95,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d10", "f14"], 5: ["s2", "p6", "d3"], 6: ["s2"]},
        family: "transition"
    },

    "Tungsten": {
        name: "Tungsten",
        symbol: "W",
        number: 74,
        mass: 183.84,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d10", "f14"], 5: ["s2", "p6", "d4"], 6: ["s2"]},
        family: "transition"
    },

    "Rhenium": {
        name: "Rhenium",
        symbol: "Re",
        number: 75,
        mass: 186.21,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d10", "f14"], 5: ["s2", "p6", "d5"], 6: ["s2"]},
        family: "transition"
    },

    "Osmium": {
        name: "Osmium",
        symbol: "Os",
        number: 76,
        mass: 190.23,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d10", "f14"], 5: ["s2", "p6", "d6"], 6: ["s2"]},
        family: "transition"
    },

    "Iridium": {
        name: "Iridium",
        symbol: "Ir",
        number: 77,
        mass: 192.22,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d10", "f14"], 5: ["s2", "p6", "d7"], 6: ["s2"]},
        family: "transition"
    },

    "Platinum": {
        name: "Platinum",
        symbol: "Pt",
        number: 78,
        mass: 195.08,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d10", "f14"], 5: ["s2", "p6", "d9"], 6: ["s1"]},
        family: "transition"
    },

    "Gold": {
        name: "Gold",
        symbol: "Au",
        number: 79,
        mass: 196.97,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d10", "f14"], 5: ["s2", "p6", "d10"], 6: ["s1"]},
        family: "transition"
    },

    "Mercury": {
        name: "Mercury",
        symbol: "Hg",
        number: 80,
        mass: 200.59,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d10", "f14"], 5: ["s2", "p6", "d10"], 6: ["s2"]},
        family: "transition"
    },

    "Thallium": {
        name: "Thallium",
        symbol: "Tl",
        number: 81,
        mass: 204.38,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d10", "f14"], 5: ["s2", "p6", "d10"], 6: ["s2", "p1"]},
        family: "pt"
    },

    "Lead": {
        name: "Lead",
        symbol: "Pb",
        number: 82,
        mass: 207.2,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d10", "f14"], 5: ["s2", "p6", "d10"], 6: ["s2", "p2"]},
        family: "pt"
    },

    "Bismuth": {
        name: "Bismuth",
        symbol: "Bi",
        number: 83,
        mass: 208.98,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d10", "f14"], 5: ["s2", "p6", "d10"], 6: ["s2", "p3"]},
        family: "pt"
    },

    "Polonium": {
        name: "Polonium",
        symbol: "Po",
        number: 84,
        mass: 209,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d10", "f14"], 5: ["s2", "p6", "d10"], 6: ["s2", "p4"]},
        family: "pt"
    },

    "Astatine": {
        name: "Astatine",
        symbol: "At",
        number: 85,
        mass: 210,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d10", "f14"], 5: ["s2", "p6", "d10"], 6: ["s2", "p5"]},
        family: "metalloid"
    },

    "Radon": {
        name: "Radon",
        symbol: "Rn",
        number: 86,
        mass: 222,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d10", "f14"], 5: ["s2", "p6", "d10"], 6: ["s2", "p6"]},
        family: "noble"
    },

    "Francium": {
        name: "Francium",
        symbol: "Fr",
        number: 87,
        mass: 223,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d10", "f14"], 5: ["s2", "p6", "d10"], 6: ["s2", "p6"], 7: ["s1"]},
        family: "alkali"
    },

    "Radium": {
        name: "Radium",
        symbol: "Ra",
        number: 88,
        mass: 226,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d10", "f14"], 5: ["s2", "p6", "d10"], 6: ["s2", "p6"], 7: ["s2"]},
        family: "alkaline"
    },

    "Actinium": {
        name: "Actinium",
        symbol: "Ac",
        number: 89,
        mass: 227,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d10", "f14"], 5: ["s2", "p6", "d10"], 6: ["s2", "p6", "d1"], 7: ["s2"]},
        family: "actinide"
    },

    "Thorium": {
        name: "Thorium",
        symbol: "Th",
        number: 90,
        mass: 232.04,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d10", "f14"], 5: ["s2", "p6", "d10"], 6: ["s2", "p6", "d2"], 7: ["s2"]},
        family: "actinide"
    },

    "Protactinium": {
        name: "Protactinium",
        symbol: "Pa",
        number: 91,
        mass: 231.04,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d10", "f14"], 5: ["s2", "p6", "d10", "f2"], 6: ["s2", "p6", "d1"], 7: ["s2"]},
        family: "actinide"
    },

    "Uranium": {
        name: "Uranium",
        symbol: "U",
        number: 92,
        mass: 238.03,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d10", "f14"], 5: ["s2", "p6", "d10", "f3"], 6: ["s2", "p6", "d1"], 7: ["s2"]},
        family: "actinide"
    },

    "Neptunium": {
        name: "Neptunium",
        symbol: "Np",
        number: 93,
        mass: 237,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d10", "f14"], 5: ["s2", "p6", "d10", "f4"], 6: ["s2", "p6", "d1"], 7: ["s2"]},
        family: "actinide"
    },

    "Plutonium": {
        name: "Plutonium",
        symbol: "Pu",
        number: 94,
        mass: 244,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d10", "f14"], 5: ["s2", "p6", "d10", "f6"], 6: ["s2", "p6"], 7: ["s2"]},
        family: "actinide"
    },

    "Americium": {
        name: "Americium",
        symbol: "Am",
        number: 95,
        mass: 243,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d10", "f14"], 5: ["s2", "p6", "d10", "f7"], 6: ["s2", "p6"], 7: ["s2"]},
        family: "actinide"
    },

    "Curium": {
        name: "Curium",
        symbol: "Cm",
        number: 96,
        mass: 247,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d10", "f14"], 5: ["s2", "p6", "d10", "f7"], 6: ["s2", "p6", "d1"], 7: ["s2"]},
        family: "actinide"
    },

    "Berkelium": {
        name: "Berkelium",
        symbol: "Bk",
        number: 97,
        mass: 247,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d10", "f14"], 5: ["s2", "p6", "d10", "f9"], 6: ["s2", "p6"], 7: ["s2"]},
        family: "actinide"
    },

    "Californium": {
        name: "Californium",
        symbol: "Cf",
        number: 98,
        mass: 251,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d10", "f14"], 5: ["s2", "p6", "d10", "f10"], 6: ["s2", "p6"], 7: ["s2"]},
        family: "actinide"
    },

    "Einsteinium": {
        name: "Einsteinium",
        symbol: "Es",
        number: 99,
        mass: 252,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d10", "f14"], 5: ["s2", "p6", "d10", "f11"], 6: ["s2", "p6"], 7: ["s2"]},
        family: "actinide"
    },

    "Fermium": {
        name: "Fermium",
        symbol: "Fm",
        number: 100,
        mass: 257,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d10", "f14"], 5: ["s2", "p6", "d10", "f12"], 6: ["s2", "p6"], 7: ["s2"]},
        family: "actinide"
    },

    "Mendelevium": {
        name: "Mendelevium",
        symbol: "Md",
        number: 101,
        mass: 258,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d10", "f14"], 5: ["s2", "p6", "d10", "f13"], 6: ["s2", "p6"], 7: ["s2"]},
        family: "actinide"
    },

    "Nobelium": {
        name: "Nobelium",
        symbol: "No",
        number: 102,
        mass: 259,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d10", "f14"], 5: ["s2", "p6", "d10", "f14"], 6: ["s2", "p6"], 7: ["s2"]},
        family: "actinide"
    },

    "Lawrencium": {
        name: "Lawrencium",
        symbol: "Lr",
        number: 103,
        mass: 266,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d10", "f14"], 5: ["s2", "p6", "d10", "f14"], 6: ["s2", "p6"], 7: ["s2", "p1"]},
        family: "actinide"
    },

    "Rutherfordium": {
        name: "Rutherfordium",
        symbol: "Rf",
        number: 104,
        mass: 267,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d10", "f14"], 5: ["s2", "p6", "d10", "f14"], 6: ["s2", "p6", "d2"], 7: ["s2"]},
        family: "transition"
    },

    "Dubnium": {
        name: "Dubnium",
        symbol: "Db",
        number: 105,
        mass: 268,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d10", "f14"], 5: ["s2", "p6", "d10", "f14"], 6: ["s2", "p6", "d3"], 7: ["s2"]},
        family: "transition"
    },

    "Seaborgium": {
        name: "Seaborgium",
        symbol: "Sg",
        number: 106,
        mass: 269,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d10", "f14"], 5: ["s2", "p6", "d10", "f14"], 6: ["s2", "p6", "d4"], 7: ["s2"]},
        family: "transition"
    },

    "Bohrium": {
        name: "Bohrium",
        symbol: "Bh",
        number: 107,
        mass: 270,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d10", "f14"], 5: ["s2", "p6", "d10", "f14"], 6: ["s2", "p6", "d5"], 7: ["s2"]},
        family: "transition"
    },

    "Hassium": {
        name: "Hassium",
        symbol: "Hs",
        number: 108,
        mass: 277,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d10", "f14"], 5: ["s2", "p6", "d10", "f14"], 6: ["s2", "p6", "d6"], 7: ["s2"]},
        family: "transition"
    },

    "Meitnerium": {
        name: "Meitnerium",
        symbol: "Mt",
        number: 109,
        mass: 278,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d10", "f14"], 5: ["s2", "p6", "d10", "f14"], 6: ["s2", "p6", "d7"], 7: ["s2"]},
        family: "none"
    },

    "Darmstadtium": {
        name: "Darmstadtium",
        symbol: "Ds",
        number: 110,
        mass: 281,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d10", "f14"], 5: ["s2", "p6", "d10", "f14"], 6: ["s2", "p6", "d8"], 7: ["s2"]},
        family: "none"
    },

    "Roentgenium": {
        name: "Roentgenium",
        symbol: "Rg",
        number: 111,
        mass: 282,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d10", "f14"], 5: ["s2", "p6", "d10", "f14"], 6: ["s2", "p6", "d9"], 7: ["s2"]},
        family: "none"
    },

    "Copernicium": {
        name: "Copernicium",
        symbol: "Cn",
        number: 112,
        mass: 285,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d10", "f14"], 5: ["s2", "p6", "d10", "f14"], 6: ["s2", "p6", "d10"], 7: ["s2"]},
        family: "none"
    },

    "Nihonium": {
        name: "Nihonium",
        symbol: "Nh",
        number: 113,
        mass: 286,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d10", "f14"], 5: ["s2", "p6", "d10", "f14"], 6: ["s2", "p6", "d10"], 7: ["s2", "p1"]},
        family: "none"
    },

    "Flerovium": {
        name: "Flerovium",
        symbol: "Fl",
        number: 114,
        mass: 289,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d10", "f14"], 5: ["s2", "p6", "d10", "f14"], 6: ["s2", "p6", "d10"], 7: ["s2", "p2"]},
        family: "none"
    },

    "Moscovium": {
        name: "Moscovium",
        symbol: "Mc",
        number: 115,
        mass: 290,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d10", "f14"], 5: ["s2", "p6", "d10", "f14"], 6: ["s2", "p6", "d10"], 7: ["s2", "p3"]},
        family: "none"
    },

    "Livermorium": {
        name: "Livermorium",
        symbol: "Lv",
        number: 116,
        mass: 293,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d10", "f14"], 5: ["s2", "p6", "d10", "f14"], 6: ["s2", "p6", "d10"], 7: ["s2", "p4"]},
        family: "none"
    },

    "Tennessine": {
        name: "Tennessine",
        symbol: "Ts",
        number: 117,
        mass: 294,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d10", "f14"], 5: ["s2", "p6", "d10", "f14"], 6: ["s2", "p6", "d10"], 7: ["s2", "p5"]},
        family: "none"
    },

    "Oganesson": {
        name: "Oganesson",
        symbol: "Og",
        number: 118,
        mass: 294,
        configuration: {1: ["s2"], 2: ["s2", "p6"], 3: ["s2", "p6", "d10"], 4: ["s2", "p6", "d10", "f14"], 5: ["s2", "p6", "d10", "f14"], 6: ["s2", "p6", "d10"], 7: ["s2", "p6"]},
        family: "none"
    }
}; //👍

const groups = {
    1: [elements.Hydrogen, elements.Lithium, elements.Sodium, elements.Potassium, elements.Rubidium, elements.Caesium, elements.Francium],
    2: [elements.Beryllium, elements.Magnesium, elements.Calcium, elements.Strontium, elements.Barium, elements.Radium],
    3: [elements.Scandium, elements.Yttrium, elements.None, elements.None],
    4: [elements.Titanium, elements.Zirconium, elements.Hafnium, elements.Rutherfordium],
    5: [elements.Vanadium, elements.Niobium, elements.Tantalum, elements.Dubnium],
    6: [elements.Chromium, elements.Molybdenum, elements.Tungsten, elements.Seaborgium],
    7: [elements.Manganese, elements.Technetium, elements.Rhenium, elements.Bohrium],
    8: [elements.Iron, elements.Ruthenium, elements.Osmium, elements.Hassium],
    9: [elements.Cobalt, elements.Rhodium, elements.Iridium, elements.Meitnerium],
    10: [elements.Nickel, elements.Palladium, elements.Platinum, elements.Darmstadtium],
    11: [elements.Copper, elements.Silver, elements.Gold, elements.Roentgenium],
    12: [elements.Zinc, elements.Cadmium, elements.Mercury, elements.Copernicium],
    13: [elements.Boron, elements.Aluminium, elements.Gallium, elements.Indium, elements.Thallium, elements.Nihonium],
    14: [elements.Carbon, elements.Silicon, elements.Germanium, elements.Tin, elements.Lead, elements.Flerovium],
    15: [elements.Nitrogen, elements.Phosphorus, elements.Arsenic, elements.Antimony, elements.Bismuth, elements.Moscovium],
    16: [elements.Oxygen, elements.Sulfur, elements.Selenium, elements.Tellurium, elements.Polonium, elements.Livermorium],
    17: [elements.Fluorine, elements.Chlorine, elements.Bromine, elements.Iodine, elements.Astatine, elements.Tennessine],
    18: [elements.Helium, elements.Neon, elements.Argon, elements.Krypton, elements.Xenon, elements.Radon, elements.Oganesson]
}

const iTransitions = {
    lanthanides: [elements.Lanthanum, elements.Cerium, elements.Praseodymium, elements.Neodymium, elements.Promethium, elements.Samarium, elements.Europium, elements.Gadolinium, elements.Terbium, elements.Dysprosium, elements.Holmium, elements.Erbium, elements.Thulium, elements.Ytterbium, elements.Lutetium],
    actinides: [elements.Actinium, elements.Thorium, elements.Protactinium, elements.Uranium, elements.Neptunium, elements.Plutonium, elements.Americium, elements.Curium, elements.Berkelium, elements.Californium, elements.Einsteinium, elements.Fermium, elements.Mendelevium, elements.Nobelium, elements.Lawrencium]
}