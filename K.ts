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

	// Explicit
	var b = new Container<string>(5); // bad
}