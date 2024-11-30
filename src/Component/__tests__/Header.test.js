import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../Header/Navbar";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";

it("Should load Header Component with a login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Navbar />
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", { name: "Login" });
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", { name: "Logout" });


    expect(logoutButton).toBeInTheDocument();

})