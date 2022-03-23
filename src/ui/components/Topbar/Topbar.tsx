type Props = {};

export const Topbar = ({}: Props) => (
  <div className="w-full bg-neutral-300 py-2 px-4">
    <div className="container flex justify-between m-auto">
      <p className="text-sm uppercase">
        Alle danmarks <span className="text-zalando">favoritmærker</span>
      </p>
      <p className="text-sm uppercase">
        <span className="text-zalando">Gratis</span> levering og retur*
      </p>
      <p className="text-sm uppercase">
        <span className="text-zalando">100 dages</span> returret
      </p>
    </div>
  </div>
);
