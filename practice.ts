let myString: string = "Hello World";

function makeArray(str: string) {
    let makeArray: string[] = [];
    for (let i=0; i < str.length; i++){
        makeArray.push(str.charAt(i));
    }
    
}
console.log(makeArray(myString));