import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../HeaderComponent";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../../Utils/Store";
import "@testing-library/jest-dom";

it("Should load Header Component with a Login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButton0 = screen.getByRole("button", {name:"LogIn"});
  //Assertion
  expect(loginButton0).toBeInTheDocument();
});

it("Should load Header Component with a Cart Items 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const CartItems = screen.getByText(/Cart/);
  //Assertion
  expect(CartItems).toBeInTheDocument();
});

it("Should Change Logout Button to Login On click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole("button", { name:"LogIn" });
  fireEvent.click(loginButton);

  const LogoutButton = screen.getByRole("button", { name:"LogOut" });
  //Assertion
  expect(LogoutButton).toBeInTheDocument();
});
