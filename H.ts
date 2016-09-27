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