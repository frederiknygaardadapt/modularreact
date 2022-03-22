import { RootState } from "webshop/foundation/store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./counter.slice";
import * as Accordion from "@radix-ui/react-accordion";

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <Accordion.Root type="multiple">
          <Accordion.Item value="hej">
            <Accordion.Header>
              <Accordion.Trigger>Trig this</Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>Content</Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
