// Type guard using instanceof
class A { propA = "A"; }
class B { propB = "B"; }
function aOrB(arg: A | B)
{
    if(arg instanceof A)
    {
        arg.propA;
        //arg.propB; // Error
    }
}

// Type guard using typeof. Primitivies only since "object" isn't helpful.
function stringOrNumber(arg: string | number)
{
    if(typeof arg === "string")
    {
        arg.indexOf("a"); // Works
        //arg.toFixed(2); // Error
    }
    else
    {
        arg.toFixed(2); // Works, don't need an extra typeof check.
    }
}

// Predicates
function isA(arg: A | B): arg is A
{
    return (<A>arg).propA !== undefined;
}
function aOrB2(arg: A | B)
{
    if(isA(arg))
        arg.propA;
    else
    {
        arg.propB;
    }
}

// Non-nullable types, using the --strictNullChecks flag
let a: string | undefined = "foo";
a = undefined;
a = null;
