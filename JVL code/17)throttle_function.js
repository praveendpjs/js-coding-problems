// Throttling is a technique used to limit the number of times a function can be executed in a given time frame.
function throttle(func, delay){
    let lastCall = 0;

    return function(...args){
        const now = new Date().getTime();

        if(now - lastCall >= delay){
            lastCall = now;
            func.apply(this,args);
        }
    }
}

function onResize(){
    console.log("Window resized",new Date().toLocaleTimeString());
    
}

const throttledResize = throttle(onResize, 2000)

window.addEventListener('resize',throttledResize)

// You have to execute in browser console to see result.