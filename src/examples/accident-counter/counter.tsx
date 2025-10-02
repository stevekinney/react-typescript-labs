import { Card } from '$/common/components/card';
import { useState, type ComponentPropsWithoutRef, type Dispatch } from 'react';
import { Button } from './button';

type CounterControlsProps = {
  setCount: Dispatch<React.SetStateAction<number>>;
};

interface CounterFormProps extends ComponentPropsWithoutRef<'form'> {
  /** The direction of the form. */
  layout?: 'vertical' | 'horizontal';
}

const CounterControls = ({ setCount }: CounterControlsProps) => {
  return (
    <div className="flex gap-2">
      <Button onClick={() => setCount((previous) => previous - 1)}>➖ Decrement</Button>
      <Button onClick={() => setCount(0)}>🔁 Reset</Button>
      <Button onClick={() => setCount((previous) => previous + 1)}>➕ Increment</Button>
    </div>
  );
};

/**
 * A special kind of form for counter operations.
 */
const CounterForm = ({ onSubmit }: CounterFormProps) => {
  const [draftCount, setDraftCount] = useState(0);

  return (
    <form className="flex items-center gap-2" onSubmit={onSubmit}>
      <input
        className="ring-primary-600 focus:border-primary-800 rounded border border-slate-500 px-4 py-2 outline-none focus:ring-2"
        type="number"
        name="count"
        onChange={(e) => setDraftCount(e.target.valueAsNumber)}
        value={draftCount}
      />
      <Button type="submit">Set Count</Button>
    </form>
  );
};

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <Card className="border-primary-500 flex w-2/3 flex-col items-center gap-8">
      <h1>Days Since the Last Accident</h1>
      <p className="text-6xl">{count}</p>
      <CounterControls setCount={setCount} />
      <CounterForm
        layout="vertical"
        onSubmit={(e) => {
          e.preventDefault();

          const formData = new FormData(e.currentTarget);
          const newCount = Number(formData.get('count'));

          setCount(newCount);
        }}
      />
    </Card>
  );
};
