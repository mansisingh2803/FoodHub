const { render, screen } = require("@testing-library/react")
const { default: Contact } = require("../Contact/Contact")
import "@testing-library/jest-dom";

test("Should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();

});

test("Should load button in the contact component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();

});
test("Should load 2 input boxes in the contact component", () => {
    render(<Contact />);
    const inputBox = screen.getAllByRole("textbox");
    expect(inputBox.length).toBe(2);

});