import React, { useEffect } from 'react';
import Navbar from '../../routs/Navebar';
import faculty from '../../assets/Logo/SjpLogo.png';
import SjpLogo from '../../assets/Logo/pitaLogo.png';

// Define a type for the contact data
interface Contact {
  name: string;
  position: string;
  contact: string;
  image: string;
}

// Sample contact data for committee members
const contactData: Contact[] = [
  { name: 'මියුර සංජුල', position: 'සභාපති', contact: '076 646 7403', image: faculty },
  { name: 'අමිල සඳුන්', position: 'ලේකම්', contact: '071 489 6634', image: SjpLogo },
  { name: 'වැලිකඩයායේ සෝමාලංකාර හිමි', position: 'උපසභාපති', contact: '076 881 7981', image: faculty },
  { name: 'දිල්මි මනූකා', position: 'කනිෂ්ඨ භාණ්ඩාගාරික', contact: '071 205 0269', image: SjpLogo },
  { name: 'පසිදු මදුෂාන්', position: 'සඟරා සංස්කාරක', contact: '077 514 1204', image: faculty },
  { name: 'උදම් රූපසිංහ', position: 'පීඨ මණ්ඩල නියෝජිත', contact: '076 902 2916', image: SjpLogo },
  { name: ' හෂාන් මදුවන්ත', position: 'පීඨ මණ්ඩල නියෝජිත', contact: '074 068 3450', image: faculty },
];

const ContactUs: React.FC = () => {
  useEffect(() => {
    // Scroll to the "Contact Us" section after the component has mounted, with an offset for the navbar
    const scrollToContact = () => {
      const contactSection = document.getElementById('contact-section');
      const navbarHeight = document.querySelector('nav')?.offsetHeight || 0; // Get navbar height
      if (contactSection) {
        window.scrollTo({
          top: contactSection.offsetTop - navbarHeight, // Apply the offset
          behavior: 'smooth',
        });
      }
    };

    scrollToContact();
  }, []);

  return (
    <>
      <Navbar />
      <div id="contact-section" style={styles.container}>
        <h1 style={styles.header}>Contact Us</h1>
        <div style={styles.cardContainer}>
          {contactData.map((person, index) => (
            <div key={index} style={styles.card}>
              <img src={person.image} alt={person.name} style={styles.image} />
              <h2 style={styles.name}>{person.name}</h2>
              <p style={styles.position}>{person.position}</p>
              <p style={styles.contact}>{person.contact}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

// Styles for the page with reduced line spacing
const styles = {
  container: {
    textAlign: 'center' as const,
    backgroundColor: '#f4f4f4',
    padding: '40px',
    paddingTop: '165px', // Space below navbar
  },
  header: {
    fontSize: '2.5rem',
    color: '#002d62', // University blue color
    marginBottom: '30px',
    textTransform: 'uppercase' as const,
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    justifyContent: 'center',
    gap: '20px', // Reduced gap between cards
  },
  card: {
    backgroundColor: '#fff',
    boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.1)',
    borderRadius: '12px',
    padding: '15px',
    textAlign: 'center' as const,
    width: '260px', // Slightly narrower card width
    transition: 'transform 0.3s ease-in-out',
    cursor: 'pointer',
  },
  cardHover: {
    transform: 'scale(1.05)',
  },
  image: {
    width: '100%',
    height: '150px', // Slightly reduced image height
    objectFit: 'cover' as const,
    borderRadius: '10px',
  },
  name: {
    fontSize: '1.3rem', // Slightly smaller font size
    fontWeight: 'bold' as const,
    marginTop: '10px',
    color: '#333',
    lineHeight: '1', // Tighter line spacing
  },
  position: {
    fontSize: '1.1rem',
    color: '#666',
    marginTop: '8px',
    lineHeight: '1', // Tighter line spacing
  },
  contact: {
    fontSize: '0.9rem',
    color: '#444',
    marginTop: '8px',
    lineHeight: '1', // Tighter line spacing
  },
  // Add media query styles for mobile devices
  '@media (max-width: 768px)': {
    cardContainer: {
      flexDirection: 'column' as const, // Stack cards vertically on small screens
    },
    card: {
      width: '100%', // Make cards full-width on mobile
      maxWidth: '400px', // Optionally limit the width on small screens
    },
  },
};

export default ContactUs;
