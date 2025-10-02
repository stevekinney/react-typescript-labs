/**
 * Adds a required `children` prop to a component's props type.
 * Unlike React's built-in `PropsWithChildren`, this version makes `children` required.
 *
 * @template P - The original props type
 * @example
 * type ButtonProps = PropsWithRequiredChildren<{ variant: 'primary' | 'secondary' }>;
 * // Result: { variant: 'primary' | 'secondary'; children: React.ReactNode }
 */
export type PropsWithRequiredChildren<P = unknown> = P & { children: React.ReactNode };

/**
 * Extracts the props type from a React component.
 * Works with both functional and class components.
 *
 * @template T - A React component type
 * @example
 * const MyButton: React.FC<{ label: string }> = ({ label }) => <button>{label}</button>;
 * type MyButtonProps = ComponentProps<typeof MyButton>;
 * // Result: { label: string }
 */
export type ComponentProps<T> = T extends React.ComponentType<infer P> ? P : never;

/**
 * Type for input change event handlers.
 * @example
 * const handleChange: InputChangeHandler = (e) => {
 *   console.log(e.target.value);
 * };
 */
export type InputChangeHandler = React.ChangeEventHandler<HTMLInputElement>;

/**
 * Type for form submit event handlers.
 * @example
 * const handleSubmit: SubmitHandler = (e) => {
 *   e.preventDefault();
 *   // handle form submission
 * };
 */
export type SubmitHandler = React.FormEventHandler<HTMLFormElement>;

/**
 * Type for button click event handlers.
 * @example
 * const handleClick: ButtonClickHandler = (e) => {
 *   console.log('Button clicked', e.currentTarget);
 * };
 */
export type ButtonClickHandler = React.MouseEventHandler<HTMLButtonElement>;

/**
 * Type for React's state setter function returned by `useState`.
 * Accepts either a new value or an updater function.
 *
 * @template T - The type of the state value
 * @example
 * const setCount: SetState<number> = useState(0)[1];
 * setCount(5);                    // Set directly
 * setCount(prev => prev + 1);     // Update based on previous value
 */
export type SetState<T> = React.Dispatch<React.SetStateAction<T>>;

/**
 * Removes all standard HTML attributes from a type, keeping only custom props.
 * Useful for creating clean component prop types without HTML pollution.
 *
 * @template T - The original type that may include HTML attributes
 * @example
 * interface MyProps {
 *   customProp: string;
 *   onClick?: () => void;
 *   className?: string;
 * }
 * type CleanProps = WithoutHTMLProps<MyProps>;
 * // Result: { customProp: string }
 */
export type WithoutHTMLProps<T> = Omit<T, keyof React.HTMLAttributes<HTMLElement>>;
