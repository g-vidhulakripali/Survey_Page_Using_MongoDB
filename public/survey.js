document.getElementById("surveyForm").addEventListener("submit", async function(e){

e.preventDefault();

const formData = new FormData(this);

function getCheckboxValues(name){
return Array.from(document.querySelectorAll(`input[name="${name}"]:checked`)).map(el=>el.value);
}

const data = {

age:formData.get("age"),
occupation:formData.get("occupation"),
travelFrequency:formData.get("travelFrequency"),

transport:formData.get("transport"),
escooterUsed:formData.get("escooterUsed"),
escooterInterest:formData.get("escooterInterest"),
escooterReason:formData.get("escooterReason"),
escooterPrice:formData.get("escooterPrice"),
escooterConcerns:getCheckboxValues("escooterConcerns"),

foodOrder:formData.get("foodOrder"),
platforms:getCheckboxValues("platforms"),
foodType:formData.get("foodType"),
deliveryFee:formData.get("deliveryFee"),
foodPriority:formData.get("foodPriority"),

juiceFrequency:formData.get("juiceFrequency"),
juicePlace:formData.get("juicePlace"),
coldPressed:formData.get("coldPressed"),
juiceType:formData.get("juiceType"),
juicePrice:formData.get("juicePrice"),
juiceFactors:getCheckboxValues("juiceFactors"),

services:getCheckboxValues("services"),
healthyOptions:formData.get("healthyOptions"),

feedback:formData.get("feedback")

};

await fetch("/api/response",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify(data)
});

alert("Thank you! Your response has been recorded.");

});