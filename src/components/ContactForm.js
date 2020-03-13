import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const [data, setData] = useState({});
  const { register, errors, handleSubmit, reset } = useForm({
    mode: "onBlur"
  });
  const onSubmit = data => {
    setData(data);
    console.log(data)
  };


  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">First Name*</label>
          <input
            name="firstName"
            placeholder="bill"
            id='firstName'
            ref={register({ required: true, minLength: 3 })}
          />
          {errors.firstName && (
            <p>Looks like there was an error: {errors.firstName.type}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName">Last Name*</label>
          <input
            name="lastName"
            placeholder="luo"
            ref={register({ required: true, minLength: 3 })}
          />
          {errors.lastName && (
            <p>Looks like there was an error: {errors.lastName.type}</p>
          )}
        </div>

        <div>
          <label htmlFor="email"  >
            Email*
          </label>
          <input name="email" id='email' placeholder="bluebill1049@hotmail.com" ref={register({ required: true, pattern: /^\S+@\S+$/i })} />
          {errors.email && (
            <p>Looks like there was an error: {errors.email.type}</p>
          )}
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea name="message" id='message' ref={register({ required: false })} />
        </div>
        <h2>{data.firstName}</h2>
        <h2>{data.lastName}</h2>
        <h2>{data.email}</h2>
        <input type="submit" data-testid='submit' />
        {console.log(data)}
      </form>
    </div>
  );
};

export default ContactForm;
