let sliderEinzahlung = document.getElementById("sliderEinzahlung")
let inputEinzahlung = document.getElementById("inputEinzahlung")
let sliderSparbetrag = document.getElementById("sliderSparbetrag")
let inputSparbetrag = document.getElementById("inputSparbetrag")
let daxButton = document.getElementById("daxButton")
let worldButton = document.getElementById("worldButton")
let spButton = document.getElementById("spButton")
let individuellButton = document.getElementById("individuellButton")
let inputWertentwicklung = document.getElementById("inputWertentwicklung")
let inputDauer = document.getElementById("inputDauer")
let slideDauer = document.getElementById("slideDauer")

// Verbindung Einzahlung
sliderEinzahlung.addEventListener("change", e => {
   inputEinzahlung.value = sliderEinzahlung.value;
   berechnen();
})
inputEinzahlung.addEventListener("change", e => {
   sliderEinzahlung.value = inputEinzahlung.value;
   berechnen();
})

// Verbindung Sparbetrag
sliderSparbetrag.addEventListener("change", e => {
   inputSparbetrag.value = sliderSparbetrag.value;
   berechnen();
})
inputSparbetrag.addEventListener("change", e => {
   sliderSparbetrag.value = inputSparbetrag.value;
   berechnen();
})

// Verbindung Index
daxButton.addEventListener("click", e => {
   inputWertentwicklung.value = daxButton.value;
   berechnen();
})
worldButton.addEventListener("click", e => {
   inputWertentwicklung.value = worldButton.value;
   berechnen();
})
spButton.addEventListener("click", e => {
   inputWertentwicklung.value = spButton.value;
   berechnen();
})
inputWertentwicklung.addEventListener("click", e => {
   individuellButton.checked = true;
   berechnen();
})

// Verbindung Einzahlung
sliderDauer.addEventListener("change", e => {
   inputDauer.value = sliderDauer.value;
   berechnen();
})
inputDauer.addEventListener("change", e => {
   sliderDauer.value = inputDauer.value;
   berechnen();
})

function berechnen() {
   let jahre = inputDauer.value
   let sparrate = inputSparbetrag.value
   let einmalzahlung = inputEinzahlung.value
   let zinssatz = 1 + inputWertentwicklung.value / 100

   gesamtsparleistung = einmalzahlung * (zinssatz ** jahre) + sparrate * Math.pow(zinssatz, 1 / 12) * ((zinssatz ** jahre - 1) / (Math.pow(zinssatz, 1 / 12) - 1))


}