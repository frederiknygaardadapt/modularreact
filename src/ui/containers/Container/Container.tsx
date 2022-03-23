type Props = {
  children: React.ReactElement;
};

export const Container = ({ children }: Props) => {
  <div className="container m-auto">{children}</div>;
};
