type Props = {
  label: string;
};

export const Button = ({ label }: Props) => {
  return (
    <button className="bg-gray-800 rounded text-slate-50 text-sm p-5 font-bold">
      {label}
    </button>
  );
};
