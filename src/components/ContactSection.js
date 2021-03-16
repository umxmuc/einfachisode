import React from 'react';

export default class ContactSection extends React.Component {
    render() {
        return (
            <section className="section">
              <div className="container container--md">
                <form name="contactForm" id="contactForm" method="POST" action="/danke" data-netlify="true" data-netlify-honeypot="bot-field">
                  <div className="sr-only">
                    <label id="honeypot-label" htmlFor="honeypot">Don't fill this out if you're human:</label>
                    <input aria-labelledby="honeypot-label" id="honeypot" name="bot-field" />
                  </div>
                  <input aria-labelledby="honeypot-label" type="hidden" name="form-name" value="contactForm" />
                    <div className="form-group">
                    <label id="company-label" htmlFor="company">Ihre Firma</label>
                    <input aria-labelledby="company-label" type="text" name="company" id="company" placeholder="Ihre Firma" required />
                  </div>
                  <div className="form-group">
                    <label id="name-label" htmlFor="name">Name</label>
                    <input aria-labelledby="name-label" type="text" name="name" id="name" placeholder="Ihr Vor und Nachname" required />
                  </div>
                  <div className="form-group">
                    <label id="email-label" htmlFor="email">Email</label>
                    <input aria-labelledby="email-label" type="email" name="email" id="email" placeholder="Ihre E-Mail Adresse" required />
                  </div>
                    <div className="form-group">
                    <label id="domain-label" htmlFor="domain">Firmen-Domain</label>
                    <input aria-labelledby="domain-label" type="text" name="domain" id="domain" placeholder="Ihre Firmen-Domain" required />
                  </div>
                  <div className="form-group">
                    <label id="message-label" htmlFor="message">Nachricht</label>
                    <textarea aria-labelledby="message-label" name="message" id="message" rows="4" placeholder="Ihre Nachricht (optional)" />
                  </div>
                  <div className="form-group form-checkbox">
                    <input aria-labelledby="consent-label" type="checkbox" name="consent" id="consent" />
                    <label id="consent-label" htmlFor="consent">Ich stimme zu, dass meine Daten zur Bearbeitung meiner Anfrage verarbeitet werden.</label>
                  </div>
                  <div className="form-submit">
                    <button type="submit" className="button">Kostenlos prüfen lassen</button>

                  </div>
                </form>
              </div>
            </section>
        );
    }
}
