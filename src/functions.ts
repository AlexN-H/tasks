/**
 * Consumes a single temperature in Fahrenheit (a number) and converts to Celsius
 * using this formula:
 *      C = (F - 32) * 5/9
 */
export function fahrenheitToCelius(temperature: number): number {
    let celsius: number = (temperature - 32) * 5/9 
    return celsius;
}

/**
 * Consumes three numbers and produces their sum. BUT you should only add a number
 * if the number is greater than zero.
 */
export function add3(first: number, second: number, third: number): number {
    let first1: number = 0
    let second1: number = 0
    let third1: number = 0
    if (first > 0){
        first1 = first
    }else{
        first1 = 0
    }
    if (second > 0){
        second1 = second
    }else{
        second1= 0
    }
    if (third > 0){
        third1 = third
    }else{
        third1 = 0
    }
    let answer: number = first1+second1+third1
    return answer;
}

/**
 * Consumes a string and produces the same string in UPPERCASE and with an exclamation
 * mark added to the end.
 */
export function shout(message: string): string {
    let uppercaseString: string = message.toUpperCase();
    return uppercaseString + "!";
}

/**
 * Consumes a string (a message) and returns a boolean if the string ends in a question
 * mark. Do not use an `if` statement in solving this question.
 */
export function isQuestion(message: string): boolean {
    let char: string = "?"
    return message.trim().endsWith("?")
}

/**
 * Consumes a word (a string) and returns either `true`, `false`, or `null`. If the string
 * is "yes" (upper or lower case), then return `true`. If the string is "no" (again, either
 * upper or lower case), then return `false`. Otherwise, return `null`.
 */
export function convertYesNo(word: string): boolean | null {
    let result: boolean = true
    if (word == "yes"|| word == "YES")
        return true
    else if(word == "no"|| word == "NO")
        return false
    else{
        return null
    }
}
