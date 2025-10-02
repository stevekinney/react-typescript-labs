import { expectAssignable, expectNotAssignable, expectType } from 'tsd';
import type { MakeOptional } from './01-make-optional';

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

// Test 1: Make email optional
type UserWithOptionalEmail = MakeOptional<User, 'email'>;
declare const user1: UserWithOptionalEmail;

expectAssignable<UserWithOptionalEmail>({ id: 1, name: 'Alice', email: 'alice@example.com', age: 30 });
expectAssignable<UserWithOptionalEmail>({ id: 1, name: 'Alice', age: 30 }); // email is optional

// Test 2: Make multiple properties optional
type UserWithOptionalFields = MakeOptional<User, 'email' | 'age'>;

expectAssignable<UserWithOptionalFields>({ id: 1, name: 'Bob' });
expectAssignable<UserWithOptionalFields>({ id: 1, name: 'Bob', email: 'bob@example.com' });
expectAssignable<UserWithOptionalFields>({ id: 1, name: 'Bob', age: 25 });
expectAssignable<UserWithOptionalFields>({ id: 1, name: 'Bob', email: 'bob@example.com', age: 25 });

// Test 3: Required properties are still required
// @ts-expect-error Missing required 'name' property
const invalidUser: UserWithOptionalEmail = { id: 1, email: 'test@example.com', age: 30 };

// Test 4: All properties present should work
expectAssignable<UserWithOptionalEmail>({
  id: 1,
  name: 'Charlie',
  email: 'charlie@example.com',
  age: 35,
});
