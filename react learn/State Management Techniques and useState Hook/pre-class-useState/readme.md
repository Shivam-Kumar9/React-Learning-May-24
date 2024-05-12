* const cons =()=> console.log(`${count++}`);
# i can use only template literal in console only 

* if i use {} the i have to make object to print

* Syntax Error in cons Function: In the cons function, you have a syntax error in the line console.log
* ({count=+1});. It should be console.log({count: count + 1}); to increment the count variable.
* By logging the object in this way, you're effectively showing the current value of count in the console, along with a descriptive key (count) indicating what the value represents. This can be helpful for debugging and understanding the state of your application at different points in time.

#  let count = 0;
    const cons = () => {
        console.log({ count: count + 1 });
        count += 1;
    };