// Welcome BellevueJS
namespace Principles
{
	let website = `TypeScriptLang.org`;
	let pitch = `A typed superset of JavaScript that compiles to plain JavaScript`;
	let tag = `Any browser. Any host. Any OS. Open source.`;

	let keyPoints = [
		`superset of JavaScript`,
		`compilation to ES3+`
	];

	let getStarted = [
		`rename JS files to .ts`,
		`npm install -g typescript`,
		`tsc bellevuejs.ts`,
		`profit`
	];

	/*
	Syntax
		Declaration
			identifer: type

			var bar: string = "a";
			function foo(): boolean;
			var foo: () => boolean;
	
		Casting
			<type>identifier;
			identifier as type;
	*/
}

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
}

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

}

// Two Other Types
namespace TwoMoreTypes
{
	// Can't assign to these so they don't make much sense
	let a: void;
	let b: never;

	function noReturnValue(): void { }
	function neverRetunsEx(): never { throw "Unexpected"; }
	function neverReturnsLoop(): never { while(true) {} }

	// We'll come back to why this is useful 
}
namespace Exception
{
	export function throws(message: string): never { throw new Error(message); }
}

// Enums
namespace Enums
{
	enum Directions
	{
		North,
		East,
		South,
		West
	}

	let a = Directions.North;
}

// Interfaces
namespace Interfaces
{
	interface IPoint
	{
		x: number;
		y: number;
		z?: number;
	}

	document; /* hit F12 on this identifier */
}

// Casting - when you know better
namespace Casting
{
	let a = document.querySelector("body canvas");
	let b = <HTMLElement>document.querySelector("body canvas");
	let c = <HTMLCanvasElement>document.querySelector("body canvas");

	// Alternate syntax, friendly with JSX/TSX
	let d = document.querySelector("body canvas") as HTMLCanvasElement;
	let e = document.querySelector("canvas");

	a.style; // doesn't exist

	b.style; // perfect
	b.getContext; // bad, doesn't exist

	c.getContext("2d"); // perfect
	d.getContext("2d"); // still perfect

	e.getContext("2d"); // Whoa, this works now! No errors with VS Code Insiders and TS 2.0
}

// Merging Names
namespace Merging
{
	// Interfaces are easy, they're just types
		interface Test { name: string; }
		interface Test { run(): void; }

		class UnitTest implements Test
		{
			public name = "MyTest";
			run() { };
		}

	// Namespaces only add exported members
		namespace A
		{
			export let A1a = "A1a";
			let A1b = "A1b";

			export function getA1b()
			{
				return A1b;
			}
		}

		namespace A
		{
			export let A2a = "A2a";
			let A2b = "A2b";

			function A2c()
			{
				A1a; // OK
				A1b; // Bad, that isn't exported
				getA1b(); // OK
			}
		}
		A.getA1b();
}

// Merging names - Adding a function to an enum
	enum LogLevel
	{
		Verbose,
		Error
	}

	namespace LogLevel
	{
		export function color(level: LogLevel, message: string)
		{
			var color: string;
			switch(level)
			{
				case LogLevel.Verbose:
					color = "black";
					break;
				case LogLevel.Error:
					color = "red";
					break;
			}

			return `<span style='color:${color};'>${message}</span>`;
		}
	}

/*
Aside: Go Back - Compiler flags

	Compile with --strictNullChecks
		default:
			throw new Error("unknown log level");
	
	Compile with --noImplicitAny

	--noFallthroughCasesInSwitch
	--noImplictReturns
	--noImplicitThis

	*/
	module CompilerFlags
	{
		var a;

		a = 1;
		a = "a";
	}

// Generic Types
module GenericTypes
{
	class Container<T>
	{
		constructor(public data: T)
		{

		}
	}

	// Implied
	var a = new Container(5);
	a.data;

	// Expicit
	var b = new Container<string>(5); // bad
}

/* Advanced Types
	• Intersection type
		○ Person & Serializable & Loggable
		○ Don't see this a lot in our code due to definition of interfaces and extension.
	• Union types
		Limits to properties common between both types
	• Type Guards
		○ Non-nullable types
			§ Before, null and undefined are in the domain of every type.
		○ "type predicate"
			§ function isFish(pet: Fish | Bird): pet is Fish { return (<Fish>pet).swim !== undefined; }
			§ if(isFish(pet)) { pet.swim(); }
		○ Simpler: typeof pet === "number"
			§ Works for primitives only
		○ instanceof 
			§ Right hand side is a constructor
		○ 
	• Type aliases
		○ Use interfaces when possible
		○ Cannot extend or be implemented from
		○ Alternative to complex union/tuple types all over code
	• String literal types
		○ type Foo = "a" | "b" | "c";
	• Discriminated unions
		○ Interfaces have a property w string values
		○ Switch on that property
		○ Use exhaustive checking to verify, --strictNullChecks or default case that calls function that returns never.
	• Polymorphic this types
		Chaining with extension.

*/

/* Decorators
	• Experimental
	• Attached five places
		○ Class
		○ Method
		○ Accessor
		○ Property
		○ Parameter
	• Can apply multiple decorators, either one line or many
	• Order matters
		○ Evaluated outside in, applied inside out
	• Class decorator
		○ If it returns a value, it replaces the constructor
	• Property Descriptor
		○ Important detour
	• Method
		○ Called at runtime, three args:
			§ Constructor fn if static member, class prototype if instance member
			§ Name
			§ Property Descriptor
		○ If it returns, that is the new property descriptor
	• Accessor
		○ Decorates the property descriptor
	• Parameter decortaor
	• Decorator vs decorator factory
		○ Decorator factory is function that returns a decorator functions. Useful for capturing relevant variables
*/

/* TSX (React) and Typescript+Angular2
	• I'm not even a novice in these but here are two resources.
*/
