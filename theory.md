 
DATA STRUCTURE:
    A data structure is a storage that is used to store and organize data. It is a way of arranging data on a computer so that it can be accessed and updated efficiently.

ALGORITHM:
    Algorithm is defined as a process or set of well-defined instructions that are typically used to solve a particular group of problems or perform a specific type of calculation. To explain in simpler terms, it is a set of operations performed in a step-by-step manner to execute a task.

MEMORY ALLOCATION:
    JavaScript has two storage options for memory allocation. One is the stack, and the other is the heap. All the primitive types, like number, Boolean, or undefined will be stored on the stack. Heap is the place for reference types like objects, arrays, and functions.

MEMORY LEAKS:
    In simple words, a memory leak is an allocated piece of memory that the JavaScript engine is unable to reclaim. The JavaScript engine allocates memory when you create objects and variables in your application, and it is smart enough to clear out the memory when you no longer need the objects. Leaks are the cause of whole class of problems: slowdowns, crashes, high latency, and even problems with other applications.

    The four types of common JavaScript leaks
    1.Undeclared/ Global Variables
    2.Forgotten timers or callbacks
    3.Out of DOM references (Event listeners)
    4.Closures


