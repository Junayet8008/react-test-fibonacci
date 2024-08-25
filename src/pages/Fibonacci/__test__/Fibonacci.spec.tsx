import { render, screen, fireEvent } from "../../../test-utils";
import Fibonacci from "..";

describe("Fibonacci Landing page", () => {
  it("should render default state", () => {
    render(<Fibonacci />, {});
    // check for  button
    const buttons = ["Add", "Remove", "Restart"];
    buttons.forEach((button) => {
      expect(screen.getByRole("button", { name: button })).toBeInTheDocument();
    });
    expect(screen.getByText("Current Index:")).toBeInTheDocument();
    // check for current index is 0
    expect(screen.getByTestId("current-index-0")).toBeInTheDocument();
  });

  it("should add/remove rows of fibo sequence on clicking buttons", () => {
    render(<Fibonacci />, {});
    const addButton = screen.getByRole("button", { name: "Add" });
    const removeButton = screen.getByRole("button", { name: "Remove" });
    const restartButton = screen.getByRole("button", { name: "Restart" });
    fireEvent.click(addButton);
    expect(screen.getByTestId("fibo-item-1")).toBeInTheDocument();
    fireEvent.click(addButton);
    fireEvent.click(addButton);
    expect(screen.getByTestId("fibo-item-2")).toBeInTheDocument();
    //testing for removing
    fireEvent.click(removeButton);
    expect(screen.queryByTestId("fibo-item-2")).not.toBeInTheDocument();

    // should restart the game
    fireEvent.click(restartButton);
    expect(screen.getByTestId("current-index-0")).toBeInTheDocument();
  });

  it("should render modal on 10th index of fibo", () => {
    render(<Fibonacci />, {});
    const addButton = screen.getByRole("button", { name: "Add" });
    Array.from(Array(10).keys()).forEach((num: number) => {
      fireEvent.click(addButton);
    });
    expect(screen.getByTestId("current-index-9")).toBeInTheDocument();
    // check for modal text
    expect(screen.getByText("Current index is 10")).toBeVisible();
    const closeButton = screen.getByRole("button", { name: "Ok" });
    expect(closeButton).toBeVisible();
    // clicking close button will restart game
    fireEvent.click(closeButton);
    expect(screen.getByTestId("current-index-0")).toBeInTheDocument();
  });
});
