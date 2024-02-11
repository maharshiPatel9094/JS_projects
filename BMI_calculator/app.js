// selecting the form
const form = document.querySelector("form")

// stopping the default behaviour of form
form.addEventListener("submit",(event)=>{
event.preventDefault();

// selecting height and weight 
// parseInt converts the string value to the numeric value 
const height = parseInt(document.querySelector("#height").value)
const weight = parseInt(document.querySelector("#weight").value)

// selecting results
const results = document.querySelector("#results")

if(height === "" || isNaN(height) || height <= 0){
    results.innerHTML = `Please Give a Valid Input ${height}`
}
else if(weight === "" || isNaN(weight) || weight <= 0){
    results.innerHTML = `Please Give a Valid Input ${weight}`
}
else{
    const bmi = (weight / ((height * height)/10000)).toFixed(2)
// show the results
results.innerHTML = `<span>${bmi}</span>`
}
});