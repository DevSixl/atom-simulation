//Rotation boolean for rotation toggling
let rotate;
let pairs = true;

//Handle page resizing so that atom doesn't lose proportions
function resize() {
    //Resets atom to scale when page is resized
    document.querySelector("#model").reset();
}

//Changes the currently selected element
//args 'element' represents the node of the periodic element selected
function changeElement(element, pairs) {
    document.querySelector("#element").remove();
    createAtom(elements[element.getAttribute("name")], pairs);
    let elem = element.cloneNode(true);
    elem.id = "element";
    //elem.onclick = info;

    document.body.appendChild(elem);
}

//Toggles the rotation of the atom
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

//Function that runs when webpage is loaded
window.onload = () => {
    //Easter egg, shhhhh
    let secret = document.querySelector("#secret");
    
    const table = createPtable(2.3);
    table.appendChild(secret);
    getAllPElements().forEach(e => {
        e.clicks = 0;

        switch(e.getAttribute("name")) {
            case "N/A": break;

            case "Neptunium":
                e.classList.add("secret");
                e.onclick = async () => {
                    changeElement(e, pairs);
                    secret.innerHTML = "Hi Nep!";
                    secret.style.color = "black";
                    e.clicks++;
    
                    if(e.clicks == 5) {
                        secret.style.opacity = 1;
                        setTimeout(() => {
                            secret.style.opacity = 0;
                        }, 300);
                        e.clicks = 0;
                    }
                }
                break;

            case "Thulium":
                e.classList.add("secret");
                e.onclick = async () => {
                    changeElement(e, pairs);
                    secret.innerHTML = "nice";
                    secret.style.color = "black";
                    e.clicks++;
    
                    if(e.clicks == 5) {
                        secret.style.opacity = 1;
                        setTimeout(() => {
                            secret.style.opacity = 0;
                        }, 300);
                        e.clicks = 0;
                    }
                }
                break;

            case "Dysprosium":
                e.classList.add("secret");
                e.onclick = async () => {
                    changeElement(e, pairs);
                    e.clicks++;

                    if(e.clicks == 6) {
                        secret.innerHTML = "...";
                        secret.style.color = "red";
                        document.querySelectorAll(".shell").forEach(shell => {
                            shell.style.boxShadow = "0 0 0 .2vw red";
                        })
                        document.querySelectorAll("#model > .shell > .electron").forEach(electron => {
                            electron.style.backgroundColor = "red";
                        })
                        secret.style.opacity = 1;
                        setTimeout(() => {
                            secret.style.opacity = 0;
                        }, 300);
                        e.clicks = 0;
                    }
                }
                break;

            default:
                e.onclick = () => {
                    changeElement(e, pairs);
                    document.querySelectorAll(".secret").forEach(secret => {secret.clicks = 0});
                }
                break;
        }
    })

    createAtom(elements.Hydrogen);
    let elem = getPElementByName("Hydrogen").cloneNode(true);
    elem.id = "element";
    elem.onclick = info;
    document.body.appendChild(elem);

    document.querySelectorAll(".demo-a > .electron").forEach(e => {
        if(e.classList.contains("all")) return;
        e.addEventListener("mouseover", () => {
            document.querySelectorAll("#model > .shell > .electron").forEach(node => {
                node.bg = () => {   
                    switch(node.classList[1]){
                        case "s": return "cyan";
                        case "p": return "lime";
                        case "d": return "red";
                        case "f": return "blue";
                    }
                }
                node.style.background = window.getComputedStyle(e, null).background;
                //node.style.animation = window.getComputedStyle(e, null).animation;
            })
        })

        e.addEventListener("mouseout", () => {
            document.querySelectorAll("#model > .shell > .electron").forEach(node => {
                node.style.background = node.bg();
                //node.style.animation = "";
            })
        })
    })

    rotate = false;
    toggleRotation();
}

//Function that opens tab with info on the element
async function info() {
    window.open(`https://pubchem.ncbi.nlm.nih.gov/element/${this.getAttribute("a-number")}`, "_blank");
}

//Function that handles key presses
function keyDown(event) {
    const picker = document.querySelector("#a-number");
    const secret = document.querySelector("#secret");
    switch(event.code) {
        case "Space":
            toggleRotation();
            break;
        
        case "ArrowLeft":
        case "ArrowDown":
            if(Number.parseInt(picker.value) === 1) break;
            picker.value = Number.parseInt(picker.value) - 1;
            changeElement(getPElementByNumber(Number.parseInt(picker.value)), pairs);
            break;

        case "ArrowRight":
        case "ArrowUp":
            if(Number.parseInt(picker.value) === 118) break;
            picker.value = Number.parseInt(picker.value) + 1;
            changeElement(getPElementByNumber(Number.parseInt(picker.value)), pairs);
            break;

        case "KeyR":
            document.querySelector("#model").reset();
            break;

        case "Enter":
            switch(picker.value) {
                case "727":
                    secret.innerHTML = "WYSI";
                    secret.style.opacity = 1;
                    setTimeout(() => {
                        secret.style.opacity = 0;
                    }, 300);
                    break;
            }
            break;
    }
}