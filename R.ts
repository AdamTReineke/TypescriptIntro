/*
	• Discriminated unions
		○ Interfaces have a property w string values
		○ Switch on that property
		○ Use exhaustive checking to verify, --strictNullChecks or default case that calls function that returns never.
*/

// Credit for most of this code to https://basarat.gitbooks.io/typescript/content/docs/types/discriminated-unions.html

interface Square {
    kind: "square";
    size: number;
}

interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}
type Shape = Square | Rectangle;

// Explicit check against square, imply the rectangle
function area(s: Shape) {
    if (s.kind === "square") {
        // Now TypeScript *knows* that `s` must a square ;)
        // So you can use its members safely :)
        return s.size * s.size;
    }
    else {
        // Wasn't a square? So TypeScript will figure out that it must be a Rectangle ;)
        // So you can use its members safely :)
        return s.width * s.height;
    }
}

// Switch, but catch the default case with a never type
function areaTwo(s: Shape)
{
    switch(s.kind)
    {
        case "square":
            return s.size * s.size;
        case "rectangle":
            return s.width * s.height;
        default:
            const _exhaustive: never = s;
    }
}