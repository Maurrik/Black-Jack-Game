let person = {
	name: "Maurri",
	age: 32,
	country: "Ivory Coast"
}

function logData()
{
	console.log(person.name + " is " + person.age + " years old and lives in " + person.country)
}

console.log(logData())


let age = 15

if (age<6)
	{
	console.log("free")
	} else if(age>=6 && age<=17)
		{
			console.log("child discount")
		} else if(age>=18 && age<=26)
			{
				console.log("student discount")
			} else if (age>=27 && age<=66)
				{
					console.log("full price")
				} else
					{
						console.log("senior citizen discount")
					}

let largeCountries = ["China","India","USA","Indonesia","Pakistan"]
console.log("The 5 largest countries in the world: ")
for(i=0;i<largeCountries.length;i++)
{
	console.log(largeCountries[i])
}


let largeCountry = ["Tuvalu","India","USA","Monaco"]
let newPakistan = "Pakistan"
let newChina = "China"

largeCountry.pop(3)
largeCountry.push(newPakistan)
console.log(largeCountry)
largeCountry.shift(0)
largeCountry.unshift(newChina)
console.log(largeCountry)


function sortFruit(){

let fruit = ["apple","orange","apple","apple","orange"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

for(i=0;i<fruit.length;i++)
{
	if (fruit[i]==="apple")
	{
		appleShelf.textContent+= " " + "apple"
	}
	else (orangeShelf.textContent+=" " + "orange")
}

}

sortFruit()


