import React from 'react'
import Navbar from '../../routs/Navebar'

const ContactUs = () => {
  return (
    <><Navbar /><div>
          <h1>Contact Us</h1>
          <p>
              If you have any questions or concerns, please don't hesitate to reach out to us.
          </p>
          <p>
              Email: <a href="mailto:fhsa@uottawa.ca">fhsa@uottawa.ca</a>
          </p>
          <p>
              Phone: 613-562-5800 ext. 8216
          </p>
          <p>
              Address: 600 Peter Morand Cres, Ottawa, ON K1G 5Z3
          </p>
      </div></>
  )
}

export default ContactUs
