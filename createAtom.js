//Function that handles the creation of the atom
function createAtom(element, pairs) {
    document.querySelector("#model").reset = () => {createAtom(element)};
    var atom = {
        protons: 0,
        neutrons: 0,
        electrons: {s:0,p:0,d:0,f:0,all:0},
        valence: 0,
        shells: 0
    };

    Array.from(document.getElementsByClassName("shell")).forEach(shell => {
        shell.remove();
    });

    Array.from(document.getElementsByClassName("electron")).forEach(elec => {
        if(!elec.classList.contains("keep")) elec.remove();
    });

    document.getElementById("nucleus").innerHTML = element.symbol;

    atom.protons = element.number;
    atom.neutrons = Math.round(element.mass) - element.number;
    atom.shells = Object.keys(element.configuration).length;
    element.configuration[Object.keys(element.configuration)[Object.keys(element.configuration).length - 1]].forEach(e => {
        atom.valence += Number.parseInt(e.substring(1));
    })

    document.querySelector("#info-a").innerHTML = `<label for="a-number">Protons/Electrons: <input type="number" id="a-number" name="a-number" min="1" max="118"></label><br>Neutrons: ${atom.neutrons}<br>Shells: ${atom.shells}<br>Valence: ${atom.valence}`;
    const elemFinder = document.querySelector("#a-number");
    elemFinder.value = atom.protons;
    elemFinder.addEventListener("change", () => {
        if(elemFinder.value > 0 && elemFinder.value <= 118) {
            document.querySelector("#element").remove();
            let elem = getPElementByNumber(elemFinder.value).cloneNode(true);
            elem.id = "element";
            elem.onclick = info;
            document.body.appendChild(elem);
            createAtom(elements[getPElementByNumber(elemFinder.value).getAttribute("name")]);
        }
    })

    let shellMultiplier = 2;
    let index = Object.keys(element.configuration).length;

    Object.keys(element.configuration).forEach(e => {
        var shellSize = document.body.clientWidth / 12 * shellMultiplier;
        let shell = document.createElement("div");
        shell.className = "shell rotate";
        shell.electrons = {s:0,p:0,d:0,f:0,all:0};
        shell.level = index;
        if(!rotate) shell.style.animationPlayState = "paused";
        shell.style.zIndex = index;
        index--;
        shell.style.width = `${shellSize}px`;
        shell.style.height = `${shellSize}px`;
        document.getElementById("model").appendChild(shell);

        let amount = 0;
        let rotateAmount;

        element.configuration[e].forEach(s => {
            amount += Number.parseInt(s.substring(1));
            shell.electrons[s.substring(0, 1)] += Number.parseInt(s.substring(1));
            shell.electrons["all"] += Number.parseInt(s.substring(1));
            atom.electrons[s.substring(0, 1)] += Number.parseInt(s.substring(1));
            atom.electrons["all"] += Number.parseInt(s.substring(1));
        })

        shell.onmouseenter = () => {
            document.querySelectorAll(".shell").forEach(element => {
                if(shell == element) return;
                element.style.opacity = .5;
            })
            Object.keys(shell.electrons).forEach(key => {
                if(key == "all") {
                    document.querySelector(`.demo-a > .electron.${key} > b`).innerHTML = `${shell.electrons[key]}<sup>-</sup>`;
                    return;
                }
                document.querySelector(`.demo-a > .electron.${key} > b`).innerHTML = `${shell.electrons[key]}<sup>${key}</sup>`;
            })
            document.querySelector(".demo-a").style.transform = "scale(1.15)";
        }

        shell.onmouseleave = () => {
            document.querySelectorAll(".shell").forEach(shell => {
                shell.style.opacity = 1;
                Object.keys(atom.electrons).forEach(key => {
                    if(key == "all") {
                        document.querySelector(`.demo-a > .electron.${key} > b`).innerHTML = `${atom.electrons[key]}<sup>-</sup>`;
                        return;
                    }
                    document.querySelector(`.demo-a > .electron.${key} > b`).innerHTML = `${atom.electrons[key]}<sup>${key}</sup>`;
                })
            })
            document.querySelector(".demo-a").style.transform = "scale(1)";
        }

        rotateAmount = 360 / amount;
        let offsetY = (amount > 1) ? .6 : -.6;

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
    Object.keys(atom.electrons).forEach(type => {
        if(type == "all") {
            document.querySelector(`.demo-a > .electron.${type} > b`).innerHTML = `${atom.electrons[type]}<sup>-</sup>`;
            return;
        }
        document.querySelector(`.demo-a > .electron.${type} > b`).innerHTML = `${atom.electrons[type]}<sup>${type}</sup>`;
    })
    document.querySelector(".demo-b > .proton b").innerHTML = `(Protons)&nbsp;${atom.protons}<sup>+</sup>`;
    document.querySelector(".demo-b > .neutron b").innerHTML = `(Neutrons)&nbsp;${atom.neutrons}<sup>o</sup>`;
}