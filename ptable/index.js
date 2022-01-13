function createPtable(size) {
    var table = document.body.appendChild(document.createElement("div"));
    table.id = "ptbl";
    for (const group in groups) {
        const grp = table.appendChild(document.createElement("div"));
        grp.className = "group";

        groups[group].forEach(e => {
            let elem = grp.appendChild(document.createElement("div"));
            elem.className = `element ${e.family}`;
            elem.style.width = `${size}vw`;
            elem.style.height = `${size}vw`;
            elem.setAttribute("a-number", e.number);
            elem.setAttribute("name", e.name);
            elem.setAttribute("a-mass", e.mass);
            elem.setAttribute("symbol", e.symbol);

            elem.innerHTML = `<b style="font-size:calc(${size}vw / 2.5)">${e.symbol}</b><b style="font-size:calc(${size}vw / 7)">${e.name}</b><b style="position:absolute;top:0;font-size:calc(${size}vw / 5)">${e.number}</b><b style="position:absolute;bottom:0;font-size:calc(${size}vw / 6.5)">${e.mass}</b>`;
        });
    }


    for (const period in iTransitions) {
        const row = table.appendChild(document.createElement("div"));
        row.className = period;

        iTransitions[period].forEach(e => {
            let elem = row.appendChild(document.createElement("div"));
            elem.className = `element ${e.family}`;
            elem.style.width = `${size}vw`;
            elem.style.height = `${size}vw`;
            elem.setAttribute("a-number", e.number);
            elem.setAttribute("name", e.name);
            elem.setAttribute("a-mass", e.mass);
            elem.setAttribute("symbol", e.symbol);

            elem.innerHTML = `<b style="font-size:calc(${size}vw / 2.5)">${e.symbol}</b><b style="font-size:calc(${size}vw / 7)">${e.name}</b><b style="position:absolute;top:0;font-size:calc(${size}vw / 5)">${e.number}</b><b style="position:absolute;bottom:0;font-size:calc(${size}vw / 6.5)">${e.mass}</b>`;
        });
    }
    document.querySelector(".lanthanides").style.paddingTop = `${size}vw`
    return table;
}

function getAllPElements() {
    return document.querySelectorAll("div.element");
}

function getPElementByNumber(number) {
    if (number < 0 || number > 118) throw Error("Index out of bounds of elements.");

    return document.querySelector(`[a-number="${number}"`);
}

function getPElementByName(name) {
    if (!document.querySelector(`[name="${name}"]`)) throw Error("Invalid element name.");

    return document.querySelector(`[name="${name}"]`);
}

function getPElementsByMass(mass) {
    if (!document.querySelector(`[a-mass="${mass}"]`)) throw Error("Invalid mass number.");

    return document.querySelectorAll(`[a-mass="${mass}"]`);
}

function getPElementBySymbol(symbol) {
    if (!document.querySelector(`[symbol="${symbol}"]`)) throw Error("Invalid element symbol.");

    return document.querySelector(`[symbol="${symbol}"]`);
}

function getPElementsByFamily(family) {
    if (document.querySelectorAll(`.element.${family}`).length == 0) throw Error("Invalid element family.");

    return document.querySelectorAll(`.element.${family}`);
}