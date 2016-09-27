/*
Type aliases
    Use interfaces when possible
    Cannot extend or be implemented from
    Alternative to complex union/tuple types all over code
*/
type Bio = {
    name: string;
    job: string;
}

let adam: Bio = { name: "Adam", job: "Software Engineer" }

