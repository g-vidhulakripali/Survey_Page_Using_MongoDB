document.getElementById("surveyForm").addEventListener("submit", async function(e){

e.preventDefault();

const formData = new FormData(this);

let services = [];

document.querySelectorAll("input[name='services']:checked")
.forEach(el => services.push(el.value));

const data = {
  age: formData.get("age"),
  occupation: formData.get("occupation"),
  travelFrequency: formData.get("travelFrequency"),
  transport: formData.get("transport"),
  escooterUsed: formData.get("escooterUsed"),
  escooterInterest: formData.get("escooterInterest"),
  foodOrder: formData.get("foodOrder"),
  platform: formData.get("platform"),
  deliveryFee: formData.get("deliveryFee"),
  juiceFrequency: formData.get("juiceFrequency"),
  juiceType: formData.get("juiceType"),
  juicePrice: formData.get("juicePrice"),
  services: services,
  feedback: formData.get("feedback")
};

await fetch("/api/response",{
method:"POST",
headers:{ "Content-Type":"application/json" },
body:JSON.stringify(data)
});

alert("Survey submitted. Thank you!");

});