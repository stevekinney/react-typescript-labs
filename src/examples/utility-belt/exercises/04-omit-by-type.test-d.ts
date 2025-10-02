import { expectAssignable, expectType } from 'tsd';
import type { OmitByType } from './04-omit-by-type';

interface ApiResponse {
  id: number;
  name: string;
  errors: string[];
  timestamp: number;
  success: boolean;
}

// Test 1: Omit number properties
type WithoutNumbers = OmitByType<ApiResponse, number>;
expectAssignable<WithoutNumbers>({ name: 'test', errors: [], success: true });

declare const withoutNumbers: WithoutNumbers;
expectType<string>(withoutNumbers.name);
expectType<string[]>(withoutNumbers.errors);
expectType<boolean>(withoutNumbers.success);

// Test 2: Omit string properties
type WithoutStrings = OmitByType<ApiResponse, string>;
expectAssignable<WithoutStrings>({ id: 1, errors: [], timestamp: Date.now(), success: true });

// Test 3: Omit boolean properties
type WithoutBooleans = OmitByType<ApiResponse, boolean>;
expectAssignable<WithoutBooleans>({ id: 1, name: 'test', errors: [], timestamp: Date.now() });

// Test 4: Verify omitted properties don't exist
type OnlyNonNumbers = OmitByType<ApiResponse, number>;

const invalid: OnlyNonNumbers = { name: 'test', errors: [], success: true, id: 1 };

// Test 5: Complex type - omit arrays
interface Complex {
  name: string;
  tags: string[];
  metadata: Record<string, unknown>;
  items: number[];
  count: number;
}

type WithoutArrays = OmitByType<Complex, unknown[]>;
expectAssignable<WithoutArrays>({ name: 'test', metadata: {}, count: 5 });

declare const withoutArrays: WithoutArrays;
expectType<string>(withoutArrays.name);
expectType<number>(withoutArrays.count);
