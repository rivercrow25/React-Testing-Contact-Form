import React from "react";
import { render, getByLabelText } from "@testing-library/react";
import ContactForm from "./ContactForm";

test('it works!', () => {
    const { getByText } = render(<ContactForm />)
    const FnameInput = getByText(/first name/i)
})