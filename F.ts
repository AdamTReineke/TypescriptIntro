// Interfaces
namespace Interfaces
{
	interface IPoint
	{
		x: number;
		y: number;
		z?: number;
        distance(IPoint): number;
	}

	document; /* hit F12 on this identifier */
}