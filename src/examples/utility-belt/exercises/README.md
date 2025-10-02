# TypeScript Utility Type Exercises

These exercises will help you practice creating custom TypeScript utility types and testing them with `tsd`.

## How to Work Through These Exercises

1. Open each numbered exercise file (e.g., `01-make-optional.d.ts`)
2. Read the instructions and implement the requested utility type
3. Run the tests to verify your solution (see "Running Tests" below)
4. Fix any errors and re-run the tests until they all pass

## Running Tests

To test all exercises at once:
```bash
npx tsd src/examples/utility-belt/exercises
```

Alternatively, you can use the TypeScript compiler to check your work:
```bash
npx tsc --noEmit src/examples/utility-belt/exercises/01-make-optional.test-d.ts
```

## Exercises

1. **Make Optional** - Create a utility type that makes specific properties optional
2. **Readonly Properties** - Create a utility type that makes specific properties readonly
3. **Pick By Type** - Create a utility type that picks properties by their value type
4. **Event Handlers** - Create type-safe event handler types for common React events

## Tips

- Use TypeScript's built-in utility types as building blocks: `Partial`, `Required`, `Pick`, `Omit`, `Readonly`, etc.
- Conditional types use the syntax: `T extends U ? X : Y`
- Mapped types use the syntax: `{ [K in keyof T]: ... }`
- Use `infer` to extract types from complex types
- Check the [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/utility-types.html) for reference
