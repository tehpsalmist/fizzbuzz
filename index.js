const fizz = function () {
	console.log('fizz')
}
const buzz = function () {
	console.log('buzz')
}
const fizzBuzz = function () {
	console.log('fizz buzz')
}
let num = 0
while (num < 101) {
	num % 5 === 0 && num % 3 === 0 ? fizzBuzz() : num % 3 === 0 ? fizz() : num % 5 === 0 ? buzz() : console.log(num)
	num++
}
