import { render, screen } from "@testing-library/react";
import App from "./App";

test("check mock text", () => {
  render(<App />);
  const textElement = screen.getByText(/Mock Api/i);
  expect(textElement).toBeInTheDocument();
});

test('should render mock Api', async () => {
  render(<App />);
  const el = await screen.findAllByRole('listitem');
  expect(el).toHaveLength(10); 
})
