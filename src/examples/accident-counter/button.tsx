export const Button = ({ children }: { children: string }) => {
  return (
    <button className="bg-primary-400 hover:bg-primary-500 rounded px-4 py-2 font-bold text-white">
      {children}
    </button>
  );
};
