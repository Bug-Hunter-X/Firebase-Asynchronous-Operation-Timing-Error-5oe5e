# Firebase Asynchronous Operation Timing Error

This repository demonstrates a common error in Firebase applications related to the timing of asynchronous operations.  Specifically, it shows how attempting to access data before a write operation (like `set()` or `update()`) has completed can lead to unexpected errors.

The `bug.js` file contains code that reproduces this issue. The `bugSolution.js` file provides a corrected version that uses async/await for proper asynchronous handling.

## How to reproduce

1.  Clone this repository.
2.  Install the Firebase SDK: `npm install firebase`
3.  Configure your Firebase project (add your config to `firebase.js`)
4.  Run `bug.js` and observe the error. 
5.  Run `bugSolution.js` to see the corrected behavior.

## Key points

* Always await asynchronous Firebase operations before accessing the resulting data.
* Use promises or async/await to handle asynchronous code properly.
* Understand that database writes are not instantaneous.