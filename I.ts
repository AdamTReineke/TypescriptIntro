// Merging names - Adding a function to an enum
enum LogLevel
{
    Verbose,
    Error
}

namespace LogLevel
{
    export function color(level: LogLevel, message: string)
    {
        var color: string;
        switch(level)
        {
            case LogLevel.Verbose:
                color = "black";
                break;
            case LogLevel.Error:
                color = "red";
                break;
        }

        return `<span style='color:${color};'>${message}</span>`;
    }
}

// Using Enums
console.log(LogLevel["Verbose"]);
console.log(LogLevel[0]);
console.log(LogLevel.color(LogLevel.Error, "whoops"));