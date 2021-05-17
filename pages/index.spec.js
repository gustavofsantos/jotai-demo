import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "jotai";
import { counterAtom } from "../lib/counter";
import IndexPage from "./index";

const setup = ({ counterValue = 0 } = {}) => {
  render(
    <Provider initialValues={[[counterAtom, counterValue]]}>
      <IndexPage />
    </Provider>
  );
};

const counter = () => screen.getByTestId("counter-value");

const clickIncrease = () => {
  userEvent.click(screen.getByTitle(/increase counter/i));
};

const clickDecrease = () => {
  userEvent.click(screen.getByTitle(/decrease counter/i));
};

it("should render with default value", () => {
  setup();

  expect(counter()).toContainHTML("0");
});

it("should increase the counter value", async () => {
  setup();
  clickIncrease();

  await waitFor(() => expect(counter()).toContainHTML("1"));
});

it("should decrease the counter value", async () => {
  setup();
  clickDecrease();

  await waitFor(() => expect(counter()).toContainHTML("-1"));
});

it("should render with default value different than zero", async () => {
  setup({ counterValue: 2 });
  await waitFor(() => expect(counter()).toContainHTML("2"));
});
