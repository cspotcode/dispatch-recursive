# dispatch-recursive [![Build Status](https://travis-ci.org/CascadeEnergy/dispatch-recursive.svg?branch=master)](https://travis-ci.org/CascadeEnergy/dispatch-recursive)

> Recursive command dispatch.

## Install

```
$ npm install --save dispatch-recursive
```

## What is Recursive Dispatch

This module is a function which returns a function which loops through a list of "command" functions, and calls
each with a "target" value until one of the commands returns a value other than `undefined`.
The command functions are polymorphic and adhere to the same interface. The point of dispatch
is to simplify delegating to concrete command implementations.

The reason this is called "recursive dispatch" is because the contract of each command function is
`(target, fn)` where `fn` is the function returned by dispatch. This allows each command to apply the dispatch
chain to sub properties of the target.

In addition, we can exploit the contract of dispatch commands to compose a terminating 
function that provides some default behavior by always returning a value or one that always
throws an exception.

This pattern is sometimes also referred to as *Chain of Command*

Implementation of this module was heavily inspired by Chapter 5 of
*Functional Javascript: Introducing Functional Programming with Underscore.js* by Michael Fogus.  
Published by O'reilly Media (2013-06-01)  
[Book Source - Chapter 5](https://github.com/funjs/book-source/blob/master/chapter05.js)
