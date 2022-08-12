const input = document.querySelector("input")
const filmsCard = document.querySelectorAll(".films__card")

input.addEventListener("keyup", event => {
	const wordInput = event.target.value.toLowerCase()

	filmsCard.forEach(item =>{
		item
			.querySelector("a")
			.textContent
			.toLowerCase()
			.includes(wordInput)? (item.style.display="block"): (item.style.display="none")
	})
})

// console.log("======")


									// forEach() map() filter() reduce()
let mul = [23, 3, 9, 2, 1, 8]
let items = ["item1", "item2", "item3"]

							//forEach
mul.forEach(item =>{
	console.log(item*2)
})
items.forEach((item, index) =>{
	console.log(`${index}: New${item}`)
})

//bad example 
let resultArr = []
mul.forEach(item =>{
	resultArr.push(item*2)
})
console.log(resultArr)

							//filter
//1
let mulFilt = mul.filter(function(item){
	return item%2 === 0
})
console.log(mulFilt)
//2

let resIsBigTen = mul.filter(isBigTen)
console.log(resIsBigTen)

function isBigTen (value){
	return value > 10
}
//filter()
function isBigEnough (value){
	return value >= 10
}
let filtered = [12, 5,0,1, 130]
let resuult = filtered.filter(isBigEnough)
console.log(resuult)
//
let filter = [12, 5,0,1, 130]
let resS = filter.filter(function(item){
	return item > 10
})
console.log(resS)

const cities = [
	{name: 'London', population: 12506468},
	{name: 'Sainta Monika', population: 5351935},
	{name: 'Asi', population: 1612833},
	{name: 'Bangladesh', population: 482443},
	{name: 'Belarus', population: 336726}
];

const millionPlusCilies = cities.filter(item => 
	item.population > 1000000
)
console.log(millionPlusCilies)

//
cities.filter(function(item){
	return item.population < 1000000
}).sort(function(a, b){
	return b.population - a.population
}).map(function (item){
	console.log(item.name + ":" + item.population)
})
console.log("============")
//
cities.filter(item => item.population < 500000)
.sort((a,b) => (a.population - b.population))
.map(item => console.log(item.name + ":" +item.population))

							//map()
//1
let resMul = mul.map(item =>{
	console.log(item/2)
})

//2
let multiplyByTwo =(item)=> item*1000
let resTwoTwo = mul.map(multiplyByTwo)
console.log(resTwoTwo)

console.log("======")

							//reduce()
//1
let nUm = [23, 3, 9, 2, 1, 8]
let frU = ["banana", "apple", "orange", "banana", "banana", "orange"]

let resRed = nUm.reduce((accum, item)=>{
	return accum+ item
})
console.log(resRed)

//2 
console.log("======")
let fruits = frU.reduce((accum, elem)=>{
	accum[elem] = 1
	return accum
},{})
console.log(fruits)

//3 cout the fruits
let fruitsRes = frU.reduce((accum, elem)=>{
	if(accum[elem]){
		accum[elem] +=1
	}
	else{
		accum[elem]=1
	}
	return accum
},{})
console.log(fruitsRes)

									//SORT

const result = item =>
	item
		.split(" ")
		.sort((a,b) => a.length - b.length)
console.log(result("the smalest word in sentence"))
//
let arr = [
	{name: "Ala", age:29},
	{name: "Jana", age:19},
	{name: "Mila", age:4},
	{name: "Nata", age:42},
]
arr.sort((a,b)=> a.age - b.age)
console.log(arr)
//
let numbers =[3,78,1,89,3]
numbers.sort()
console.log(numbers)
//
let TT = [18, 4, 2, 5, 1]
TT.sort((a, b) => a-b)
console.log(TT)
//
let c = ["b", "J", "A", "y", "D", "c"]
c.sort()
console.log(c)
//
let sortTwo = ["b", "J", "A", "y", "D", "c"]
sortTwo.sort((a,b)=> a.toLowerCase() > b.toLowerCase()? 1: -1)
console.log(sortTwo)
//

// let x = letter =>
// 	letter
// 		.toString()
// 		.toLowerCase()
// 		.split("")
// 		.sort()

// console.log(x(["b", "J", "A", "y", "D", "c"]))
// error!!!
//[',', ',', ',', ',', ',', 'a', 'b', 'c', 'd', 'j', 'y']
					//Here it is
let x = letter =>
	letter
		.sort((a, b)=> a.toLowerCase()> b.toLowerCase()? 1: -1)

console.log(x(["b", "J", "A", "y", "D", "c"]))
//
console.log("============")

let y = ["b", "J", "A", "y", "D", "c"]
let yy = y.toString().toUpperCase().split("").sort()

console.log(yy)

console.log("============")

									//initials
let toInitials = item =>
	item
		.toUpperCase()
		.split(" ")
		.map(item =>`${item.slice(0, 1)}.`)
		.join(" ")
		
console.log(toInitials("Natallia krupnik"))

									//reduce() ruft die Callback für alle Elemente in einem Arr. auf, mit dem Ziel, den Arr-Inhalt auf einen einzigen Wert zu reduzieren.

let sumReduce = item =>
		Math.abs(item)
		.toString()
		.split("")
		.reduce((accum, sum)=> Number(accum) + Number(sum),0)
console.log(sumReduce(99))				

let sumReduceTwo = number =>
	Math.abs(number)
	.toString()
	.split("")
	.reduce((accum, sum)=> Number(accum) + Number(sum), 0)
console.log(sumReduceTwo(-999))	

									//find min and max

let minMax = number=>
	[Math.min(...number), Math.max(...number)]
console.log(minMax([2,200,78,95,0,5,1]))

									//"AbCd" => "A-Bb-Ccc-Dddd"

let accum = string=>
	string
		.split("")								
		.map((item, index)=>`${item.toUpperCase()}${item.repeat(index)}`).join("-")
console.log(accum("AbCd"))

console.log("=======")
									//return index capital letters
function capitals(word){
	let res = [];
	word.split("").forEach (function(letter, index){
		if(letter === letter.toUpperCase()){
			res.push(index)
		}
	})
	return res
}
console.log(capitals("CodEWaRs"))
//
const capiTals =(word)=>
	word
		.split("")
		.reduce((accum, item, index)=>{
			if (item === item.toUpperCase()){
				accum.push(index)
			}
			return accum
		}, [])

console.log(capiTals("CodEWaRs"))

console.log("=======")

									//Prototype __proto__
let animal ={
	jumping: true,
	eiting: false,
	walk(){
		alert("HI, i am walking")
	}
}

let hase={
	sleeping: true,
	__proto__:animal
}

let hors={
	__proto__:hase
}
console.log(hors.sleeping)

console.log("=======")

function Auto (brand, price, gas, disel){
	this.brand = brand
	this.price = price
	this.gas = gas
	this.disel = disel
}

Auto.prototype.drive = function(){
	if(this.gas > 0){
		this.gas = this.gas - 20
		return this.gas
	} else{
		console.log("no gas")
	}
}
Auto.prototype.info = function(){
	return `Price ${this.brand} = ${this.price}`
}

const bmw = new Auto("bmw", 10000, false,100)

console.log(bmw)//Auto {brand: 'bmw', price: 10000, gas: false, disel: 100}
console.log(bmw.info())//Price bmw = 10000

console.log("=======")


let aA = {
	name: "papa",
	age: 42,
	love: "I love Mila",
	show: function(){
		console.log(this.love)
	}
}
console.log(aA)
let bB= {
	__proto__:aA,
	cook:true
}
console.log(bB)
bB.age = 40
bB.name ="mama"
console.log(bB)
bB.show()

let cC ={
	__proto__:bB,
	sister: "I study"
}

console.log(cC)
cC.name = "sister jana"
console.log(cC.age)
cC.age = 16
console.log(cC.age)


console.log("=======")

let containerForButton = document.querySelector("#button")

class Button {
	constructor(width, heigth, background, value){
		this.width = width
		this.heigth = heigth
		this.background = background
		this.value = value
		
	}
	render(){
		return "Hi!!!"
	}
	
}

class ModernButton extends Button{
	constructor (width, heigth, background, value, name, borderRadius){
		super(width, heigth, background, value, name)
		this.borderRadius = 0
	}	
}

let blueButton = new ModernButton(200, 400, "red", "click here", 0)
console.log(blueButton.render())

console.log("=======")
class DoD {
	constructor(){
		//this._name = name 
	}
	// setNameOnthisClass(name){
	// 	this._name = name.trim().toUpperCase()
	// }
	set name(name){
		this._name = name.trim().toUpperCase()
	}
}

const stud = new DoD();
// stud.setNameOnthisClass("			natallia")

stud.name = "			Natallia"
console.log(stud)


console.log("=======")
class UserY {
	constructor(name){
		this.name = name
	}

	static getRole(){
		return "Admin"
	}
}

// const user = new UserY()
// user.name = "Natallia"
// console.log(user.getRole())
// console.log(user)

//static method

console.log(UserY.getRole())