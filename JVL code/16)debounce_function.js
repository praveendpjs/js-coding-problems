// Debouncing in JavaScript is a programming technique used to limit the rate at which a function is executed, particularly when dealing with events that fire rapidly in quick succession. It ensures that a function is called only after a certain period of inactivity following the last event trigger. 
function debounce(func, delay){
    let timeoutID;

    return function(...args){
        if(timeoutID) clearTimeout(timeoutID);

        timeoutID = setTimeout(() =>{
            func.apply(this,args)
        }, delay);
    }
}

function search(query){
    console.log("Searching for", query);
    

}
const debounceSearch = debounce(search, 2000);

debounceSearch("apple");
debounceSearch("apple PIE");
debounceSearch("apple PIE recipie");