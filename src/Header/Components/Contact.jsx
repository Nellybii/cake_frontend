import { useState } from 'react';
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
      <div>
        <p>icons</p>
        <p>FAcebook</p>
        <p>instagram</p>
        <p>Whatapp</p>
      </div>
      <div className="contact-container">
        <div>
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