import zalandoLogo from "../../assets/logo_default.svg";

type Props = {};

export const Header = ({}: Props) => {
  return (
    <div className="px-4 border-b">
      <div className="container m-auto">
        <div className="flex justify-between py-4">
          <div className="flex space-x-2">
            <a href="#">Damer</a>
            <a href="#">Herre</a>
            <a href="#">Børn</a>
          </div>
          <div>
            <img src={zalandoLogo} alt="Zalando" />
          </div>
          <div>Login</div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            <a href="#">Tøj</a>
            <a href="#">Sko</a>
            <a href="#">Sport</a>
          </div>
          <div>
            <input
              className="border-none bg-neutral-200"
              type="text"
              placeholder="Søg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
