function changeTab(evt, tab){
	let i, tabContent, tabButton;

	document.getElementById("active").click();

	tabContent = document.getElementsByClassName("tab-content");
	for(i = 0; i < tabContent.length; i++){
		tabContent[i].style.display = "none";
	}

	tabButton = document.getElementsByClassName("tab-btn");
	for(i = 0; i < tabButton.length; i++){
		tabButton[i].className = tabButton[i].className.replace(" active", "");
	}

	document.getElementById(tab).style.display = "block";
	evt.currentTarget.className += " active";
}

// For Length

const millimeterEl = document.querySelector("#millimeter");
const centimeterEl = document.querySelector("#centimeter");
const meterEl = document.querySelector("#meter");
const kilometerEl = document.querySelector("#kilometer");

function millimeter(value) {
	centimeterEl.value = value / 10;
	meterEl.value = value / 1000;
	kilometerEl.value = value / 1000000;
}

function centimeter(value) {
	millimeterEl.value = value * 10;
	meterEl.value = value / 100;
	kilometerEl.value = value / 100000;
}

function meter(value) {
	millimeterEl.value = value * 1000;
	centimeterEl.value = value * 100;
	kilometerEl.value = value / 1000;
}

function kilometer(value) {
	millimeterEl.value = value * 1000000;
	centimeterEl.value = value * 10000;
	meterEl.value = value * 1000;
}

// For Temperature

const celsiusEl = document.querySelector("#celsius");
const fahrenheitEl = document.querySelector("#fahrenheit");
const kelvinEl = document.querySelector("#kelvin");

function celsius(value) {
	fahrenheitEl.value = (value * 9) / 5 + 32;
	kelvinEl.value = value + 273.15;
}

function fahrenheit(value) {
	celsiusEl.value = ((value - 32) * 5) / 9;
	kelvinEl.value = ((value + 459.67) * 5) / 9;
}

function kelvin(value) {
	celsiusEl.value = value - 273.15;
	fahrenheitEl.value = (value * 9) / 5 - 459.67;
}

// For Weight

const kilogramEl = document.querySelector("#kilogram");
const gramEl = document.querySelector("#gram");
const milligramEl = document.querySelector("#milligram");
const poundEl = document.querySelector("#pound");

function kilogram(value) {
	gramEl.value = value * 1000;
	milligramEl.value = value * 1000000;
	poundEl.value = value * 2.20462;
}

function gram(value) {
	kilogramEl.value = value / 1000;
	milligramEl.value = value * 1000;
	poundEl.value = value / 454;
}

function milligram(value) {
	kilogramEl.value = value / 1000000;
	gramEl.value = value / 1000;
	poundEl.value = value / 453592;
}

function pound(value) {
	kilogramEl.value = value / 2.20462;
	gramEl.value = value * 454;
	milligramEl.value = value * 453592;
}
