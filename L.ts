// Visibility Modifiers
class Foo
{
    private arg3;

    constructor(public arg1, private arg2, arg3)
    {
        this.arg3 = arg3;
    }

    protected getArg2()
    {
        return this.arg2;
    }
}

class SubFoo extends Foo
{
    constructor(arg3)
    {
        super(1, 2, arg3);
    }

    public getProtectedArg2()
    {
        return this.getArg2();
    }
}

var foo = new Foo(1, 2, 3);
console.log(foo.arg1); // only exposed property

var subfoo = new SubFoo(3);
console.log(subfoo.getProtectedArg2()); // exposes access to the protected property

// Visibility doesn't exist in JavaScript so we can still get at the values
console.log((<any>subfoo).arg3);