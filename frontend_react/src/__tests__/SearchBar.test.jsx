import { render, fireEvent } from "@testing-library/react";
import SearchBar from "../components/SearchBar";

test("renders input and triggers search", () => {
  const onSearch = jest.fn();
  const { getByPlaceholderText, getByText } = render(<SearchBar onSearch={onSearch} />);
  const input = getByPlaceholderText("Search by name or SSN");
  fireEvent.change(input, { target: { value: "Joh" } });
  fireEvent.click(getByText("Search"));
  expect(onSearch).toHaveBeenCalledWith("Joh");
});
