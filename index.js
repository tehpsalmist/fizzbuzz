const fizz = function() {
	console.log('fizz')
}
const buzz = function() {
	console.log('buzz')
}
const fizzBuzz = function() {
	console.log('fizz buzz')
}

const printFizzBuzz = function() {
	let num = 0
	while (num < 101) {
		let fizzyNum = num % 3
		let buzzyNum = num % 5
		let bothyNum = fizzyNum + buzzyNum

		if (bothyNum === 0) {
			fizzBuzz()
		} else if ( fizzyNum === 0) {
			fizz()
		} else if (buzzyNum === 0) {
			buzz()
		} else {
			console.log(num)
		}
		num++
	}
}
printFizzBuzz()