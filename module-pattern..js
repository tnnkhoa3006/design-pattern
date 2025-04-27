const Counter = (function() {
    let count = 0; // private variable
    function increase() {
        count++;
        console.log(`Count now: ${count}`);
    }
    function decrease() {
        count--;
        console.log(`Count now: ${count}`);
    }
    function reset() {
        count = 0;
        console.log('Count reset to 0');
    }
    // expose ra ngoài
    return {
        increase,
        decrease,
        reset
    };
})();
Counter.increase(); // Count now: 1
Counter.increase(); // Count now: 2
Counter.decrease(); // Count now: 1
Counter.reset();    // Count reset to 0
