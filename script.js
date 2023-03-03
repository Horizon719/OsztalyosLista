window.addEventListener("load", init);

function init(){
    const list = [
        { nev: "Peti", mondat: "A kedd!" },
        { nev: "Gergo", mondat: "A kedd masodszor!", szemszin: "Kek/Zold", kor: 23 },
        { nev: "Niki", mondat: "Délelőtt kint játszottam a kutyussal" },
        { nev: "Asztrik", mondat: "Kedden, mert ott nem történt semmi." },
        { nev: "GergőT", mondat: "Kedd a legjóbb nap." },
        { nev: "Sanyi", mondat: "Tegnap sikerült időben megoldani a java feladatot.",},
        { nev: "Márton", mondat: "Nem volt angol hétfőn" },
        { nev: "Dominik", mondat: "Kedd, mert a szölőben a kistraktorral tevékenykedtem.",},
        { nev: "Marci", mondat: "Ha gyenge vagy akkor legalább ne sírj" },
        { nev: "Bence", mondat: "Pillanat türelmet kérek javítom a mikrofont." },
    ];

    ciklus(list);
    
}

function ciklus(list){
    let tart = document.querySelector('article');
    for(let i = 0; i < list.length; i++) {
        const div = document.createElement('div');
        const h2 = document.createElement('h2');
        const p = document.createElement('p');
        tart.appendChild(div);
        div.appendChild(h2);
        div.appendChild(p);
        h2.appendChild(document.createTextNode(list[i].nev));
        p.appendChild(document.createTextNode(list[i].mondat));
    }
}