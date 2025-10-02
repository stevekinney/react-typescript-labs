interface NameTagProps {
  name: string;
  title: string;
  level: number;
  isOnline: boolean;
}

export const NameTag = ({ name, title, level, isOnline }: NameTagProps) => {
  return (
    <div className="w-96 overflow-hidden rounded-xl border-2 border-red-600 bg-white shadow-md">
      <div className="bg-red-600 px-4 py-2 text-center font-bold tracking-widest text-white uppercase">
        <div className="text-3xl">Hello</div>
        <div>My name is</div>
      </div>
      <div className="flex flex-col items-center gap-4 p-6 text-center">
        <div className="text-3xl font-bold text-slate-900">{name}</div>
        <div className="text-slate-700">
          <div className="text-sm">{title}</div>
          <div className="text-xs">Level {level}</div>
        </div>
        {isOnline && (
          <div className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-800">
            <span className="mr-2 h-2 w-2 animate-pulse rounded-full bg-green-500"></span>
            Incredibly Online
          </div>
        )}
      </div>
    </div>
  );
};
