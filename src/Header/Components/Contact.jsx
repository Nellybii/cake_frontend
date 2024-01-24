import { useState } from 'react';


import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
function Contact() {
  const [inputs, setInputs] = useState({
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    text: ''
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }
  return (
    <>
      <h1>CONTACT US</h1>
      <div className='icons'>
        <a href="#"><FaFacebook /></a>
        <a href="#"> <FaInstagram /></a>
        <a href="#"><FaWhatsapp /></a>
        <a href="#"> <IoCallOutline /></a>
      </div>
      <div className="contact-container">
        <div className='contact-'>
          <div className="form-title">
            <h1>Get in touch</h1>
          </div>
          <div>
            <form onSubmit={handleSubmit}>

              <div className="input-wrapper">
                <input
                  type="text"
                  name="firstname"
                  value={inputs.firstname || ""}
                  placeholder="First name "
                  onChange={handleChange}
                />


                <input
                  type="text"
                  name="lastname"
                  value={inputs.lastname || ""}
                  placeholder="Last name"
                  onChange={handleChange}
                  required
                />
                <input
                  type="number"
                  name="phone"
                  value={inputs.phone || ""}
                  placeholder="Phone number"
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={inputs.email || ""}
                  placeholder="Email "
                  onChange={handleChange}
                  required
                />
                <input
                  name="text"
                  value={inputs.text || ""}
                  placeholder="Text area "
                  onChange={handleChange}
                  required
                />

                <input
                  id="submit"
                  type="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>



    </>
  )
}

export default Contact