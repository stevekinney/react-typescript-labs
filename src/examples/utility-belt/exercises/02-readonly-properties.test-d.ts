import { expectAssignable } from 'tsd';
import type { MakeReadonly } from './02-readonly-properties';

interface Config {
  apiUrl: string;
  timeout: number;
  retries: number;
  debug: boolean;
}

// Test 1: Make apiUrl readonly
type ConfigWithReadonlyUrl = MakeReadonly<Config, 'apiUrl'>;
declare const config1: ConfigWithReadonlyUrl;

expectAssignable<ConfigWithReadonlyUrl>({
  apiUrl: 'https://api.example.com',
  timeout: 5000,
  retries: 3,
  debug: false,
});

// Test 2: Readonly property cannot be reassigned
// @ts-expect-error Cannot assign to readonly property
config1.apiUrl = 'https://new-api.example.com';

// Test 3: Non-readonly properties can be reassigned
config1.timeout = 10000; // This should work

// Test 4: Make multiple properties readonly
type ConfigWithReadonlyFields = MakeReadonly<Config, 'apiUrl' | 'debug'>;
declare const config2: ConfigWithReadonlyFields;

// @ts-expect-error Cannot assign to readonly property
config2.apiUrl = 'test';

// @ts-expect-error Cannot assign to readonly property
config2.debug = true;

// These should work
config2.timeout = 3000;
config2.retries = 5;
