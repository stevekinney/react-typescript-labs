import type { Component } from 'react';
import { expectAssignable, expectNotAssignable, expectType } from 'tsd';
import type {
  ButtonClickHandler,
  ComponentProps,
  InputChangeHandler,
  PropsWithRequiredChildren,
  SetState,
  SubmitHandler,
  WithoutHTMLProps,
} from '.';

// PropsWithRequiredChildren Tests
declare const propsWithChildren: PropsWithRequiredChildren<{ name: string }>;

expectAssignable<{ name: string; children: React.ReactNode }>(propsWithChildren);
expectAssignable<{ children: React.ReactNode }>(propsWithChildren);

// Should allow children property
expectAssignable<PropsWithRequiredChildren>({ children: 'hello' });
expectAssignable<PropsWithRequiredChildren>({ children: <div /> });
expectAssignable<PropsWithRequiredChildren>({ children: null });

// Should error when children is missing
// @ts-expect-error Expect an error when passing an object without children
const _noChildren: PropsWithRequiredChildren = {};

// ComponentProps Tests
declare const MyComponent: React.FC<{ title: string; count: number }>;
declare const myComponentProps: ComponentProps<typeof MyComponent>;
expectType<{ title: string; count: number }>(myComponentProps);

// Should work with class components
declare class MyClassComponent extends Component<{ value: string }> {}
declare const classComponentProps: ComponentProps<typeof MyClassComponent>;
expectType<{ value: string }>(classComponentProps);

// InputChangeHandler Tests
declare const inputHandler: InputChangeHandler;
expectAssignable<InputChangeHandler>((e: React.ChangeEvent<HTMLInputElement>) => {
  console.log(e.target.value);
});

// Should accept the event parameter
const validInputHandler: InputChangeHandler = (event) => {
  expectType<React.ChangeEvent<HTMLInputElement>>(event);
  const value = event.target.value;
  expectType<string>(value);
};

// SubmitHandler Tests
declare const submitHandler: SubmitHandler;
expectAssignable<SubmitHandler>((e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
});

const validSubmitHandler: SubmitHandler = (event) => {
  expectType<React.FormEvent<HTMLFormElement>>(event);
  event.preventDefault();
};

// ButtonClickHandler Tests
declare const buttonHandler: ButtonClickHandler;
expectAssignable<ButtonClickHandler>((e: React.MouseEvent<HTMLButtonElement>) => {
  console.log('clicked');
});

const validButtonHandler: ButtonClickHandler = (event) => {
  expectType<React.MouseEvent<HTMLButtonElement>>(event);
  expectType<EventTarget & HTMLButtonElement>(event.currentTarget);
};

// SetState Tests
declare const setState: SetState<number>;
expectAssignable<SetState<number>>((value: number | ((prev: number) => number)) => {});

// Should accept direct value
setState(42);

// Should accept updater function
setState((prev) => {
  expectType<number>(prev);
  return prev + 1;
});

// Should error with wrong type
// @ts-expect-error Expect an error when passing a string
setState('string');

// WithoutHTMLProps Tests
interface CustomProps {
  customProp: string;
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

declare const withoutHtml: WithoutHTMLProps<CustomProps>;
expectType<{ customProp: string }>(withoutHtml);

// Should remove HTML attributes but keep custom props
expectAssignable<WithoutHTMLProps<CustomProps>>({ customProp: 'test' });

// Should not allow HTML props
expectNotAssignable<WithoutHTMLProps<CustomProps>>({ customProp: 'test', className: 'foo' });
expectNotAssignable<WithoutHTMLProps<CustomProps>>({ customProp: 'test', onClick: () => {} });
