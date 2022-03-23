import { Button } from "ui/components/Button/Button";
import { Users } from "webshop/feature/users/Users";

export const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <div className="App">
        <header className="App-header">
          <p className="text-lg text-yellow-200">
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <Button label="hej"></Button>
          <Users />
        </header>
      </div>
    </div>
  );
};
