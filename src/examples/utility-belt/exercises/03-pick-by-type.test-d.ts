import { expectAssignable, expectNotType, expectType } from 'tsd';
import type { PickByType } from './03-pick-by-type';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  inStock: boolean;
  quantity: number;
}

// Test 1: Pick only string properties
type StringProps = PickByType<Product, string>;
expectAssignable<StringProps>({ name: 'Widget', description: 'A useful widget' });

declare const stringProps: StringProps;

// @ts-ignore Remove this one when you implement the solution
expectType<string>(stringProps.name);
// @ts-ignore Remove this one when you implement the solution
expectType<string>(stringProps.description);

// Test 2: Pick only number properties
type NumberProps = PickByType<Product, number>;
expectAssignable<NumberProps>({ id: 1, price: 99.99, quantity: 10 });

declare const numberProps: NumberProps;

// @ts-ignore Remove this one when you implement the solution
expectType<number>(numberProps.id);
// @ts-ignore Remove this one when you implement the solution
expectType<number>(numberProps.price);
// @ts-ignore Remove this one when you implement the solution
expectType<number>(numberProps.quantity);

// Test 3: Pick only boolean properties
type BooleanProps = PickByType<Product, boolean>;
expectAssignable<BooleanProps>({ inStock: true });

declare const booleanProps: BooleanProps;

// @ts-ignore Remove this one when you implement the solution
expectType<boolean>(booleanProps.inStock);

// Test 4: Verify that wrong types are excluded
type OnlyStrings = PickByType<Product, string>;

const test: OnlyStrings = { name: 'Test', description: 'Test', id: 1 };
