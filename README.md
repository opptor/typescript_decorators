# TypeScript Decorators

This project contains examples of typescript decorators

## Overview

## Prerequisites

Since Decorators are not part of the standard yet, we need to have the following lines in the **tsconfig.json**
```
"experimentalDecorators": true,
"target": "es6" // actually es5 will also be fine
```

## Decorator Factory
A Decorator Factory is simply a function that returns the expression that will be called by the decorator at runtime.

A decorator factory is just a callable that produces the actual decorator. It is used to make it possible to 'configure' a decorator.


## Class Decorators

## Method Decorators

## Accessor Decorators

## Property Decorators

## Parameter Decorators

## Additional Metadata

## Sources / Documentation

[Official Documentation](https://www.typescriptlang.org/docs/handbook/decorators.html)

[A practical guide to TypeScript decorators](https://blog.logrocket.com/a-practical-guide-to-typescript-decorators/)

[Real World Examples of Decorators](https://fireship.io/lessons/ts-decorators-by-example/)