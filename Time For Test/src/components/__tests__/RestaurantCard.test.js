import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../__mocks__/resCardMock.json";
import "@testing-library/jest-dom";

it("Should render RestaurantCard Component with props Data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Pizza Hut");

  expect(name).toBeInTheDocument();
});


//HW :- write Test Case for With Promoted label
