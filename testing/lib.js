module.exports.absolute = function (num) {
	return num >= 0 ? num : -num;
} 


module.exports.greet = function (name) {
	return `Welcome ${name}!`;
}

module.exports.getCurrencies = function () {
	return ['USD','INR','EUR'];
}

module.exports.getProduct = function (id) {
	return {id, name:'Dell E1775',price: 10};
}

module.exports.register = function (username) {
	if (!username)
		throw new Error('username is 
	return {id:10, username};
}

module.exports.fizzbuzz = function (num) {
	if (typeof num !== 'number')
		throw new Error('enter valid number');
	
	if ((num % 3 === 0) && (num % 5 === 0))
		return 'FizzBuzz';

	else if (num % 3 === 0)
		return 'Fizz';
	else if (num % 5 === 0)
		return 'Buzz';
	else 
		return num;
}
















