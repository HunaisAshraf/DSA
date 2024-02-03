<h1>DATA STRUCTURE:</h1>
    A data structure is a storage that is used to store and organize data. It is a way of arranging data on a computer so that it can be accessed and updated efficiently.

<h1>ALGORITHM:</h1>
    Algorithm is defined as a process or set of well-defined instructions that are typically used to solve a particular group of problems or perform a specific type of calculation. To explain in simpler terms, it is a set of operations performed in a step-by-step manner to execute a task.

<h1>MEMORY ALLOCATION:</h1>
    JavaScript has two storage options for memory allocation. One is the stack, and the other is the heap. All the primitive types, like number, Boolean, or undefined will be stored on the stack. Heap is the place for reference types like objects, arrays, and functions.

<h1>MEMORY LEAKS:</h1>
    In simple words, a memory leak is an allocated piece of memory that the JavaScript engine is unable to reclaim. The JavaScript engine allocates memory when you create objects and variables in your application, and it is smart enough to clear out the memory when you no longer need the objects. Leaks are the cause of whole class of problems: slowdowns, crashes, high latency, and even problems with other applications.
    The four types of common JavaScript leaks
    <ol>
        <li>Undeclared/ Global Variables</li>
        <li>Forgotten timers or callbacks</li>
        <li>Out of DOM references (Event listeners)</li>
        <li>Closures</li>
    </ol>

<h1>Complexity Analysis:</h1>
    Complexty analysis is defined as a technique to evaluate the performance or the effiency if the algorithm with respect to input size.
    There are two types
        <ul>
            <li><h5>Time complextiy:</h5></li>
                Measure the amount of time taken by an algorithm to complete based on the size of input.
            <li><h5>Space complextiy:</h5></li>
                Measure the amount of memory requires by an algorithm based on the size of input.
        </ul>

<h1>ASYMPTOTIC ANALYSIS</h1>
    Asymptotic analysis is a way to describe the performance of the algorithm in terms of input size.
    There are three commonly used notation
    <ol>
        <li>Big O notation - worst case scenario</li>
        <li>Omega notation - best case scenario</li>
        <li>Theta notation - Average case scenario</li>
    </ol>

<h3>Big O of Array</h3>
    <ul>
        <li>Access - O(1)</li>
        <li>search - O(n)</li>
        <li>push/pop - O(1)</li>
        <li>shift/unshift/splice - O(n)</li>
    </ul>

<h3>Big O of Objects</h3>
    <ul>
        <li>Access - O(1)</li>
        <li>search - O(n)</li>
        <li>push/pop - O(1)</li>
        <li>shift/unshift/splice - O(n)</li>
        <li>map/filter/reduce/forEach - O(n)</li>
    </ul>
