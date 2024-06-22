import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../__mocks__/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import Cart from "../Cart";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should Load Restaurant Menu Component", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    );
  });

  const accordionHeader = screen.getByText("Recommended (20)");

  fireEvent.click(accordionHeader);

  const foodItems = screen.getAllByTestId("foodItems");
  expect(foodItems.length).toBe(20);

  expect(screen.getByText("Cart (0 items)")).toBeInTheDocument();

  const addBtns = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtns[0]);

  expect(screen.getByText("Cart (1 items)")).toBeInTheDocument();

  fireEvent.click(addBtns[1]);

  expect(screen.getByText("Cart (2 items)")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(22);

  // Awaiting the findAllByRole query before passing it to fireEvent.click
  const clearCartBtn = await screen.findByRole("button", { name: "Clear Cart" });
  fireEvent.click(clearCartBtn);

  expect(screen.getAllByTestId("foodItems").length).toBe(20);

  expect(screen.getByText("Your Cart is Empty Please Add Some Items To Cart")).toBeInTheDocument();
});
