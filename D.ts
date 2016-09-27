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