let num = 0
while (num < 101) {
	num % 5 === 0 && num % 3 === 0 ? console.log('fizz buzz') : num % 3 === 0 ? console.log('fizz') : num % 5 === 0 ? console.log('buzz') : console.log(num)
	num++
}