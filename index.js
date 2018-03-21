const fizz = function () {
	console.log('fizz')
}
const buzz = function () {
	console.log('buzz')
}
const fizzBuzz = function () {
	console.log('fizz buzz')
}

const printFizzBuzz = function () {
	let num = 0
	while (num < 101) {
		let fizzyNum = num % 3
		let buzzyNum = num % 5
		let bothyNum = fizzyNum + buzzyNum

		bothyNum === 0 ? fizzBuzz() : fizzyNum === 0 ? fizz() : buzzyNum === 0 ? buzz() : console.log(num)
		num++
	}
}
printFizzBuzz()