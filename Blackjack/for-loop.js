let sentence = ["Hello", "my", "name", "is", "Maurri"]
let greetingEl = document.getElementById("greeting-el")

for(i=0;i<sentence.length;i++)
{
greetingEl.textContent +=" " + sentence[i]

}