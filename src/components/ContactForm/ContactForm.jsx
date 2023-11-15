import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import css from './ContactForm.module.css'

class ContactForm extends Component {
    handleSubmit = e => {
    e.preventDefault();

    const name = e.target.name.value;
    const number = e.target.number.value;
        const { addContact } = this.props;
        
        addContact({ id: nanoid(), name, number });
}
    render() {
        return (
            <div className={css.form}>
                <h2>Phonebook</h2>
                <form className={css.formContainer} onSubmit={this.handleSubmit}>
                    <label className={css.inputForm}>
                       <p> Name</p>
                        <input
                            type="text"
                            name="name"
                            className={css.inputName}
                            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                            placeholder="Enter name"
                            required
                        />
                    </label>
        
                    <label className={css.inputForm}>
                        Number
                        <input
                            type="tel"
                            name="number"
                            className={css.inputNumber}
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            placeholder="Enter phone number"
                            required
                        />
                    </label>
                    <button className={css.formBtn} type="submit">
                        Add contact
                    </button>
                </form>
            </div>
          );
  }
}

ContactForm.propTypes = {
  number: PropTypes.string,
  name: PropTypes.string,
  addContact: PropTypes.func.isRequired,
};

export default ContactForm