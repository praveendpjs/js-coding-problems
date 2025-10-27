// flower, flow, flight - fl is longest common prefix 
function longestPrefix(arr){
    if(arr.length === 0){
        return "";
    }
    prefix = arr[0]
    for(let i =1; i<arr.length; i++){
        while(arr[i].indexOf(prefix) !== 0){
            prefix = prefix.substring(0, prefix.length - 1);
            if(prefix === ""){
                return ""
            }
        }
    }
    return prefix
}
console.log(longestPrefix(["flower","flow","flight"]));
