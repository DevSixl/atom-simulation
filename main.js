let rotate;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

window.onload = start();

function resize() {
    document.querySelector("#model").reset();
}

function changeElement(element) {
    document.querySelector("#element").remove();
    createElement(elements[element.getAttribute("name")]);
    let elem = element.cloneNode(true);
    elem.id = "element";
    elem.onclick = info;
    document.body.appendChild(elem);
}

function toggleRotation() {
    let nucleus = document.querySelector("#nucleus");
    rotate = !rotate;
    if (rotate) {
        Array.from(document.querySelectorAll(".rotate")).forEach(e => {
            e.style.animationPlayState = "running";
        })
        nucleus.style.backgroundColor = "rgba(0, 255, 0, 0.274)";
        nucleus.classList.remove("pause");
    } 
    else {
        Array.from(document.querySelectorAll(".rotate")).forEach(r => {
            r.style.animationPlayState = "paused";
        })

        nucleus.style.backgroundColor = "rgb(206, 206, 206)";
        nucleus.classList.add("pause");
    }
}

function start() {
    let nep = document.querySelector("#nep");
    
    const table = createPtable(2.3);
    table.appendChild(nep);
    Array.from(getAllPElements()).forEach(e => {
        if (e.getAttribute("name") == "N/A") return;
        if (e.getAttribute("name") == "Neptunium") {
            e.nepClicks = 0;
            e.onclick = async () => {
                changeElement(e);
                e.nepClicks++;

                if(e.nepClicks == 5) {
                    nep.style.opacity = 1;
                    setTimeout(() => {
                        nep.style.opacity = 0;
                    }, 300);
                    e.nepClicks = 0;
                }
            }
            return;
        }
        e.onclick = () => {
            changeElement(e);
            getPElementByName("Neptunium").nepClicks = 0;
        }
    })

    createElement(elements.Hydrogen);
    let elem = getPElementByName("Hydrogen").cloneNode(true);
    elem.id = "element";
    elem.onclick = info;
    document.body.appendChild(elem);

    rotate = false;
    toggleRotation();
}

function createElement(element) {
    document.querySelector("#model").reset = () => {createElement(element)};
    var atom = {
        protons: 0,
        neutrons: 0,
        electrons: 0
    };

    Array.from(document.getElementsByClassName("shell")).forEach(shell => {
        shell.remove();
    });

    Array.from(document.getElementsByClassName("electron")).forEach(elec => {
        if(!elec.classList.contains("keep")) elec.remove();
    });

    document.getElementById("nucleus").innerHTML = element.symbol;

    atom.protons = element.number;
    atom.electrons = element.number;
    atom.neutrons = Math.round(element.mass) - element.number;

    document.querySelector("#info-a").innerHTML = `<label for="a-number">Protons/Electrons: <input type="number" id="a-number" name="a-number" min="1" max="118"></label><br>Neutrons: ${atom.neutrons}<br>Shells: ${Object.keys(element.configuration).length}`;
    const elemFinder = document.querySelector("#a-number");
    elemFinder.value = atom.protons;
    elemFinder.addEventListener("change", () => {
        if(elemFinder.value > 0 && elemFinder.value <= 118) {
            document.querySelector("#element").remove();
            let elem = getPElementByNumber(elemFinder.value).cloneNode(true);
            elem.id = "element";
            elem.onclick = info;
            document.body.appendChild(elem);
            createElement(elements[getPElementByNumber(elemFinder.value).getAttribute("name")]);
        }
    })

    let shellMultiplier = 2;

    Object.keys(element.configuration).forEach(e => {
        var shellSize = document.body.clientWidth / 12 * shellMultiplier;
        let shell = document.createElement("div");
        shell.className = "shell rotate";
        if(!rotate) shell.style.animationPlayState = "paused";
        shell.style.width = `${shellSize}px`;
        shell.style.height = `${shellSize}px`;
        document.getElementById("model").appendChild(shell);
        let amount = 0;
        let rotateAmount;

        element.configuration[e].forEach(s => {
            amount += Number.parseInt(s.substring(1));
        })
        rotateAmount = 360 / amount;

        element.configuration[e].forEach(subshell => {
            const type = subshell.substring(0, 1);

            for (i = 0; i < Number.parseInt(subshell.substring(1)); i++) {
                let electron = document.createElement("div");
                electron.className = `electron ${type}`;
                electron.style.transformOrigin = `50% ${shellSize / 2}px`;
                electron.style.transform = `rotate(${rotateAmount}deg)`;
    
                shell.appendChild(electron);
                rotateAmount += 360 / amount;
            }
        })

        shellMultiplier += 4 / 8;
    });
}

async function info() {
    window.open(`https://pubchem.ncbi.nlm.nih.gov/element/${this.getAttribute("a-number")}`, "_blank");
}

function keyDown(event) {
    const picker = document.querySelector("#a-number");
    switch(event.code) {
        case "Space":
            toggleRotation();
            break;
        
        case "ArrowLeft":
        case "ArrowDown":
            if(Number.parseInt(picker.value) === 1) break;
            picker.value = Number.parseInt(picker.value) - 1;
            createElement(elements[getPElementByNumber(Number.parseInt(picker.value)).getAttribute("name")]);
            changeElement(getPElementByNumber(Number.parseInt(picker.value)));
            break;

        case "ArrowRight":
        case "ArrowUp":
            if(Number.parseInt(picker.value) === 118) break;
            picker.value = Number.parseInt(picker.value) + 1;
            createElement(elements[getPElementByNumber(Number.parseInt(picker.value)).getAttribute("name")]);
            changeElement(getPElementByNumber(Number.parseInt(picker.value)));
            break;
    }
}