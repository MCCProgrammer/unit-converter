const p1 = document.getElementById("p1")
const p2 = document.getElementById("p2")
const p3 = document.getElementById("p3")
const inputField = document.getElementById("inputField")

function showResults(){
    let num = inputField.value
    p1.textContent = `${num} meters = ${(num*3.2808399).toFixed(3)} feet | ${num} feet = ${(num/3.2808399).toFixed(3)} meters`
    p2.textContent = `${num} liters = ${(num*0.264172052).toFixed(3)} gallons | ${num} gallons = ${(num/0.264172052).toFixed(3)} liters`
    p3.textContent = `${num} kilos = ${(num*2.20462262).toFixed(3)} pounds | ${num} pounds = ${(num/2.20462262).toFixed(3)} kilos`
    inputField.value=0
}