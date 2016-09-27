/*
Compiler flags

Compile with
    --strictNullChecks
    --noImplicitAny
	--noImplictReturns
	--noFallthroughCasesInSwitch

	*/
	module CompilerFlags
	{
		var a;

		a = 1;
		a = "a";

        function implicitReturn(str: string)
        {
            switch(str)
            {
                case "a":
                    return 1;
                case "b":
                    return 2;
            }
        }

        function fallthrough(str: string)
        {
            var out: number;
            switch(str)
            {
                case "a":
                    out = 1;
                case "b":
                    out = 2;
            }
            return out;
        }
	}
