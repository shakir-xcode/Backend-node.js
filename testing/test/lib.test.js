const lib = require('../lib');

/*
describe('absolute - ', () => {

it('should return a positive number if the number is positive', () => {
	expect(lib.absolute(1)).toBe(1);
})

it('should return a positive number if the number is negative', () => {
	expect(lib.absolute(-1)).toBe(1);
})

it('should return zero if the number is zero', () => {
	expect(lib.absolute(0)).toBe(0);
})

})

describe('greet', () => {
	it('should return welcome shakir', () => {
		const result = lib.greet('shakir');
		expect(result).toMatch(/shakir/);
		expect(result).toContain('shakir');
		
	})
})

describe('getCurrency', () => {
	it('should return supported currencies', () => {
		const result = lib.getCurrencies();

		// Too General
		expect(result).toBeDefined();
		expect(result).not.toBeNull();

		// Too Specific
		expect(result[0]).toBe('USD')		
		expect(result[1]).toBe('INR')
		expect(result[2]).toBe('EUR')
		expect(result.length).toBe(3);		
		
		//Proper Way
		expect(result).toContain('USD')		
		expect(result).toContain('INR')
		expect(result).toContain('EUR')

		//Ideal Way
		expect(result).toEqual(expect.arrayContaining(['INR','EUR','USD']));

	})
})

describe('getProduct', () => {
	it('should return product with id = 1', () => {
		const result = lib.getProduct(1);
		expect(result).toMatchObject({id:1,price:10});
		//Another way
		expect(result).toHaveProperty('id', 1)
	})
})

describe('register', () => {
	it('should throw if username is falsy', () => {
		const args = [null,undefined,0,'',NaN];
		args.forEach(a => {
			expect(()=>{
				lib.register(a)
			}).toThrow();
		})
	})

	it('should return a valid user object', () => {
		const result = lib.register('shakir');
		expect(result).toMatchObject({username: 'shakir'});
		expect(result.id).toBeGreaterThan(0);
	})

})
*/

describe('fizzbuzz', () => {
	it('should throw if not typeof number', () => {
		expect(() => {
			lib.fizzbuzz('d')
		}).toThrow();
		expect(() => {
			lib.fizzbuzz('')
		}).toThrow();
		expect(() => {
			lib.fizzbuzz({})
		}).toThrow();
	})

	

	it('should return Fizz for 9', () => {
		const result = lib.fizzbuzz(9);
		expect(result).toEqual('Fizz');
	})

	it('should return Buzz for 25', () => {
		const result = lib.fizzbuzz(25);
		expect(result).toEqual('Buzz');
	})
	
	it('should return fizbuz for 15', () => {
		const result = lib.fizzbuzz(15);
		expect(result).toEqual('FizzBuzz');
	})

	it('should return 53 for 53', () => {
		const result = lib.fizzbuzz(53);
		expect(result).toEqual(53);
	})
})
















