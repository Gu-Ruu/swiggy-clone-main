const { render, screen } = require("@testing-library/react");
import RestroCard from "../RestroCard";
import MOCK_DATA from "./mocks/mocks.json";
import "@testing-library/jest-dom";
it("Should render RestroCard component with Props Data", () => {
  render(<RestroCard restroData={MOCK_DATA} />);
  expect(screen.getByText("Burger King")).toBeInTheDocument();
});
