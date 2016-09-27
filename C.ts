// Explicit Types
namespace ExplicitTypes
{
	let aString: string = "Hello again BellevueJS";
	let aNumber: number = 43;
	let aBoolean: boolean = false;
	let anArray: number[] = [4,5,6];
	let anotherArray: any[] = [aString, aNumber];
		anotherArray.push({});

	let aTuple: [string, string];
		aTuple = ["foo"]; // bad, no second element
		aTuple = ["foo", 15]; // bad, wrong type
		aTuple = ["foo", "bar", "baz"]; // ok - union type used

	let anObject: { myNumber: number };
		anObject = {}; // bad, missing the expected myNumber property

	let square: (x: number) => number = (x) => x * x;
	let double: (x: number) => number = (x) => { return x + x; }

}