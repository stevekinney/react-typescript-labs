import { Card } from '$/common/components/card';
import { useState } from 'storybook/internal/preview-api';
import { Button } from './button';

export const Counter = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <Card className="border-primary-500 flex w-2/3 flex-col items-center gap-8">
      <h1>Days Since the Last Accident</h1>
      <p className="text-6xl">{count}</p>
      <div className="flex gap-2">
        <button onClick={() => setCount(count - 1)}>➖ Decrement</button>
        <button onClick={() => setCount(0)}>🔁 Reset</button>
        <button onClick={() => setCount(count + 1)}>➕ Increment</button>
      </div>
      <form className="flex items-center gap-2" onSubmit={(e) => e.preventDefault()}>
        <input
          className="ring-primary-600 focus:border-primary-800 rounded border border-slate-500 px-4 py-2 outline-none focus:ring-2"
          type="number"
          value={0}
        />
        <Button>Update Counter</Button>
      </form>
    </Card>
  );
};
