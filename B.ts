// Inferred Types
namespace InferredTypes
{
	let aString = "Hello BellevueJS";
	let aNumber = 42;
	let aBoolean = true;
	let anArray = [1,2,3];
		anArray.push(15);
		anArray.push("string"); // bad, inferred type is an array of numbers

	let anotherArray = [aString, aNumber];
		anotherArray.push({}); // bad, inferred type is a union type of string and number

	let aTuple = [aString, aString];
		aTuple.push("abcd");

	let anObject = {};
		anObject = { myNumber: 1 };
		anObject.myNumber = 1; // bad, assigning the object literal doesn't narrow the type

	let square = (x) => x * x;
	let double = (x) => { return x + x; }
}

// Notice that we still get output even though there are compile errors