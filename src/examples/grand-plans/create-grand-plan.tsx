import { Button } from '$/common/components/button';
import { Input } from '$/common/components/input';

type CreateGrandPlanProps = {
  onSubmit: (plan: string) => void;
};

// Can we make this adhere to an HTMLFormElement interface?
export const CreateGrandPlanForm = ({ onSubmit }: CreateGrandPlanProps) => {
  return (
    <form
      className="flex items-center gap-2"
      onSubmit={(e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        // Potential improvement: Validate that the form data is a string
        const plan = formData.get('grand-plan') as string;

        onSubmit(plan);
      }}
    >
      <Input
        label="New Grand Plan Title"
        placeholder="Your latest grand plan…"
        hideLabel
        name="grand-plan"
        required
      />
      <Button type="submit">Create</Button>
    </form>
  );
};
