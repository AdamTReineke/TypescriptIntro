// Casting - when you know better
namespace Casting
{
	let a = document.querySelector("body canvas");
	let b = <HTMLElement>document.querySelector("body canvas");
	let c = <HTMLCanvasElement>document.querySelector("body canvas");

	// Alternate syntax, friendly with JSX/TSX
	let d = document.querySelector("body canvas") as HTMLCanvasElement;

	a.style; // doesn't exist

	b.style; // perfect
	b.getContext; // bad, doesn't exist

	c.getContext("2d"); // perfect
	d.getContext("2d"); // still perfect

	// Awesome!
	let e = document.querySelector("canvas");
	e.getContext("2d"); // Whoa, this works now! No errors with VS Code Insiders and TS 2.0
}