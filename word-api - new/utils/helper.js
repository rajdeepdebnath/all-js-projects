export const GetRandomOptions = (arr=[], count=0) => {
    let output = [];
    while([...new Set(output)].length < count){
        let randomNo = Math.floor(Math.random()*arr.length);
        output.push(arr[randomNo]);
    }
    
    return [...new Set(output)];
}