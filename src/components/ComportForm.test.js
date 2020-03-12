import React from "react";
import { render, fireEvent, getByText, wait, getByTestId } from "@testing-library/react";
import ContactForm from "./ContactForm";
import { act } from 'react-dom/test-utils'


test('it works!', () => {
    const { getAllByPlaceholderText, getByPlaceholderText, getByLabelText, findByTestId, getByText } = render(<ContactForm />)
    const FnameInput = getAllByPlaceholderText(/bill/i)
    const LnameInput = getByPlaceholderText(/luo/i)
    const email = getByLabelText(/email/i)
    const message = getByLabelText(/message/i)


    fireEvent.change(FnameInput[0], { target: { name: 'firstname', value: 'nick' } })
    fireEvent.change(LnameInput, { target: { name: 'lastname', value: 'migel' } })
    fireEvent.change(email, { target: { name: 'email', value: 'test' } })
    fireEvent.change(message, { target: { name: 'message', value: '' } })

    findByTestId('submit').then(response => {
        fireEvent.click(response)
    })
    getByText(/nick/)
}) 