/* Union types - Limits to properties common between both types */

var a: string | string[];

a = "foo";

a = ["foo", "bar"];

function trim(str: string | string[]): string | string[]
{
    if(str instanceof String)
    {
        return str.trim();
    }
    else if(str instanceof Array)
    {
        return str.map(s => s.trim());
    }
    else
    {
        throw new Error("wrong type!");
    }
}
