import React, { useEffect, useState } from 'react';
import * as portfolioStyles from './PortfolioStyles.module.css';
import { navigate } from 'gatsby';
import * as IndexStyles from '../../styles/Index.module.css';

export default function ContactSection({ ref }: any): JSX.Element {
  const [screenSize, getDimension] = useState({
    dynamicWidth: window.innerWidth,
    dynamicHeight: window.innerHeight
  });
  const [matches, setMatches] = useState(true);

  const setDimension = () => {
    getDimension({
      dynamicWidth: window.innerWidth,
      dynamicHeight: window.innerHeight
    });
  };
  useEffect(() => {
    window.addEventListener('resize', setDimension);
    setMatches(821 <= screenSize.dynamicWidth);
    return () => {
      window.removeEventListener('resize', setDimension);
    };
  }, [screenSize]);

  const [showSubmission, setShowSubmission] = useState(false);
  const [formInfo, setFormInfo] = useState({
    name: '',
    email: '',
    message: ''
  });

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    console.log(formInfo);
    fetch('/#contactSection', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...formInfo
      })
    })
      .then(() => navigate('/thankyou/'))
      .catch((error) => alert(error));
  };

  const handleInputChange = (e) => {
    setFormInfo({ ...formInfo, [e.target.name]: e.target.value });
  };

  return (
    <section id="contactSection" className={IndexStyles.indexSection}>
      <div>
        <h2
          className={IndexStyles.sectionTitle}
          style={{ lineHeight: '3.5rem' }}
        >
          <span>Contact</span>
        </h2>
        <h3 className={IndexStyles.sectionSubtitle}>Get In Touch</h3>
      </div>
      <form
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%'
        }}
        name="Contact Form"
        method="POST"
        action="/thankyou/"
        content-type="application/x-www-form-urlencoded"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleContactSubmit}
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <span className={portfolioStyles.contactFieldLabel}>
          <label className={portfolioStyles.contactFieldLabel} for="name">
            Name
          </label>
        </span>
        <input
          id="name"
          type="text"
          onChange={(e) => handleInputChange(e)}
          className={portfolioStyles.contactField}
          name="name"
          required
        ></input>
        <span className={portfolioStyles.contactFieldLabel}>
          <label className={portfolioStyles.contactFieldLabel} for="email">
            Email
          </label>
        </span>
        <input
          id="email"
          type="email"
          className={portfolioStyles.contactField}
          name="email"
          onChange={(e) => handleInputChange(e)}
          required
        ></input>
        <span className={portfolioStyles.contactFieldLabel}>
          <label className={portfolioStyles.contactFieldLabel} for="message">
            Message
          </label>
        </span>
        <textarea
          id="message"
          name="message"
          rows="10"
          cols="50"
          onChange={(e) => handleInputChange(e)}
          required
          className={portfolioStyles.contactField}
          style={{
            height: '10rem',
            paddingTop: '18px'
          }}
        ></textarea>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            position: 'relative'
          }}
        >
          <button
            type="submit"
            name="Submit Button"
            // onClick={handleContactSubmit}
            className={portfolioStyles.contactBtn}
            style={{ color: '#0080ff', borderColor: '#0080ff' }}
          >
            Send Message
          </button>

          <div
            style={{
              display: showSubmission ? 'block' : 'none'
            }}
          >
            <p
              style={{
                fontSize: '24px',
                borderRadius: 30,
                position: 'fixed',
                bottom: '1vh',
                right: '25vw',
                // border: '1px solid limegreen',
                backgroundColor: 'limegreen',
                padding: '12px',
                width: '50vw',
                minWidth: '328px',
                textAlign: 'center',
                zIndex: 101,
                color: 'white'
              }}
            >
              Thank you for reaching out. I'll get back to you as soon as
              possible &#128512;
            </p>
          </div>
        </div>
      </form>
    </section>
  );
}

{
  /* <React.Fragment>
<Typography
  variant="h2"
  component="h2"
  style={{ color: 'white' }}
  align="right"
>
  Contact
</Typography>
<Paper className={portfolioStyles.portSection}>
  <Grid
    id="contact"
    ref={ref}
    container
    justifyContent="flex-end"
    alignItems="stretch"
    component="form"
    style={{ minHeight: '50vh' }}
  >
    <Grid
      item
      xs={12}
      style={{
        backgroundImage: 'url(../../images/mockup.png)',
        backgroundSize: 'cover'
      }}
    >
      <form
        name="Contact Form"
        method="POST"
        content-type="application/x-www-form-urlencoded"
        data-netlify="true"
        action="javascript:void(0);"
      >
        <input type="hidden" name="Contact Form" value="Contact Form" />
        <TextField
          label="Name"
          fullWidth
          variant="outlined"
          required
          id="name"
          name="name"
          className={portfolioStyles.contactField}
        ></TextField>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          required
          id="email"
          name="email"
          className={portfolioStyles.contactField}
        ></TextField>
        <TextField
          label="Message"
          variant="outlined"
          required
          fullWidth
          id="message"
          name="message"
          className={portfolioStyles.contactField}
          multiline
          rows={6}
        ></TextField>
        <Button
          name="Submit Button"
          className={portfolioStyles.contactField}
          type="submit"
          variant="contained"
          fullWidth
          color="secondary"
        >
          Send Message
        </Button>
      </form>
    </Grid>
  </Grid>
</Paper>
</React.Fragment> */
}
