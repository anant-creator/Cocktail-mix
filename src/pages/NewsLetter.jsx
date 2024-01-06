import { Form, redirect, useNavigation } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const newsletterUrl = 'https://6598eccaa20d3dc41cef102a.mockapi.io/cocktail-mix/data';
export const action = async ({request}) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData);
  const {name, lastName, email} = data;
  try {
    if (!name || !lastName || !email) {
      throw new Error('Input missing');
    }
    const response = await axios.post(newsletterUrl, data);
    toast.success("Success, Check your Email");
    return redirect('/');
    
  } catch (error) {
    console.log(error);
    toast.error("Check for error in console");
    return error
  }
}

export default function NewsLetter() {
  const navigate = useNavigation();
  const submitting = navigate.state === "submitting";

  return (
    <>
      <Form className="form" method='POST'>
        <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>
          Our Newsletter
        </h4>
        {/* Name */}
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            className="form-input"
            name="name"
            id="name"
            required
            placeholder='john'
          />
        </div>
        {/* Last Name */}
        <div className="form-row">
          <label htmlFor="lastName" className="form-label">
            Last Name:
          </label>
          <input
            type="text"
            className="form-input"
            name="lastName"
            id="lastName"
            required
            placeholder="doe"
          />
        </div>
        {/* email */}
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="text"
            className="form-input"
            name="email"
            id="email"
            required
            placeholder="abc@test.com"
          />
        </div>
        <button type="submit" className="btn btn-block" style={{marginTop: "0.5rem"}} disabled={submitting}>
          {submitting ? "Submitting" : "Submit"}
        </button>
      </Form>
    </>
  );
}
