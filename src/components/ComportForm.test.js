import React from "react";
import { render, fireEvent, getByText, wait, getByTestId } from "@testing-library/react";
import ContactForm from "./ContactForm";


test('it works!', async () => {
    const { getAllByPlaceholderText, getByPlaceholderText, getByLabelText, findByTestId, getByText, findByText } = render(<ContactForm />)
    const FnameInput = getAllByPlaceholderText(/bill/i)
    const LnameInput = getByPlaceholderText(/luo/i)
    const email = getByLabelText(/email/i)
    const message = getByLabelText(/message/i)


    fireEvent.change(FnameInput[0], { target: { name: 'firstName', value: 'Nick' } })
    fireEvent.change(LnameInput, { target: { name: 'lastName', value: 'Migel' } })
    fireEvent.change(email, { target: { name: 'email', value: 'nickmigel@gmail.com' } })
    fireEvent.change(message, { target: { name: 'message', value: 'none' } })

    findByTestId('submit').then(response => {
        fireEvent.click(response)


    })
    await findByText(/Nick/)
    await getByText(/Migel/)
    await getByText(/nickmigel@gmail.com/i)

})  