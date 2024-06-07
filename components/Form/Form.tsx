import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { motion } from "framer-motion";

//Hook
import useContactForm from './useContactForm';
//Component
import MyInput from './CustomInput';
import styles from './form.module.scss';

const MyCustomForm = ({
    fields,
    onSuccessMessage,
    onErrorMessage,
    customClass,
    emailServiceURL,
    submitButtonLabel
}:any) => {
    const [messageSent, setMessageSent] = useState('');
    const [isAPILoading, setIsAPILoading] = useState(false);
    const [messageDescription, setMessageDescription] = useState('');
    const initialValues = {
        name: '',
        customerEmail: '',
        phone: '',
        message: '',
    };

    const {
        values,
        handleChange,
        errors,
        handleSubmit,
        setValues,
    } = useContactForm({
        initialValues,
        fields,
        onSubmit: () => {
            setIsAPILoading(true);
            axios.post(
                emailServiceURL,
                {
                    message: values.message,
                    name: values.name,
                    phone: values.phone,
                    customerEmail: values.customerEmail,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'accept': 'application/json, text/plain, */*',
                    },
                }
            )
                .then(function (response) {
                    setValues(initialValues);
                    setMessageSent('succeed');
                    setIsAPILoading(false);
                })
                .catch(function (error) {
                    setMessageDescription(error.toString());
                    setMessageSent('error');
                    setIsAPILoading(false);
                });
        }
    });

    const renderSentMessage = () => {
        if (messageSent === 'succeed') {
            return <div className={`message succeed w-full text-center mb-6`}>
                <h2 className={'mb-4'}>Vielen Dank</h2>
                <p>{onSuccessMessage}</p>
            </div>
        }
        if (messageSent === 'error') {
            return <div className={`message error w-full text-center mb-6`}>
                <h2 className={'mb-4 text-red-500'}>Etwas ist schief gelaufen</h2>
                <p>{onErrorMessage}</p>
                <p>{messageDescription}</p>
            </div>
        }
        return null;
    };

    return (
        <motion.form
            className={`form ${customClass} mb-16 backdrop-blur-sm`}
            onSubmit={(event) => handleSubmit(event)}
            initial={{opacity: 0, y: -30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: .7, delay: 1.5}}
            viewport={{once: true}}
        >
            <div className='pt-[35%] flex text-lg flex-col gap-2'>
                <p className='text-white mb-6 font-bold'>Wir freuen uns über eine Nachricht oder einen Anruf von Ihnen:</p>
                <p className='text-white mb-0'>Telefon</p>
                <a className='text-white hover:underline' href="tel:0421/56345811">0421/56345811</a>
                <h2 className='text-white mt-4 mb-4 text-[20px]'>Kontaktformular</h2>
            </div>
            {
                fields.map((field:any)=> {
                    const { name, type, label, validations, selectOptions, size, placeholder } = field;

                    switch (type) {
                        case 'text':
                            return (
                                <MyInput
                                    key={name}
                                    fieldName={name}
                                    fieldType={'text'}
                                    label={label}
                                    handleChange={handleChange}
                                    value={values[name]}
                                    validations={validations}
                                    errors={errors}
                                    size={size}
                                    placeholder={placeholder}
                                />
                            );
                        case 'textArea':
                            return (
                                <section className={'item'} key={name}>
                                    <label className={'contact-label'}>{label}</label>
                                    <textarea
                                        name={name}
                                        id={name}
                                        value={values[name]}
                                        rows={4}
                                        cols={40}
                                        className={'input_box'}
                                        placeholder={placeholder}
                                        onChange={(e) => handleChange(e, [])}
                                    />
                                </section>
                            );
                        case 'select':
                            return (
                                <select key={name}>
                                    {
                                        selectOptions.map((option:any, index:any) => <option value={option.value} key={index}>{option.label}</option>)
                                    }
                                </select>
                            );
                        default:
                            return (
                                <MyInput
                                    key={name}
                                    fieldName={name}
                                    fieldType={'text'}
                                    label={label}
                                    size={size}
                                    handleChange={handleChange}
                                    value={values[name]}
                                    validations={validations}
                                    errors={errors}
                                    placeholder={placeholder}
                                />
                            )
                    }
                })
            }
            {renderSentMessage()}
            <section className={`${styles.item} text-center contact-input-button`}>
                <input
                    type={'submit'}
                    value={submitButtonLabel ? submitButtonLabel : 'SEND'}
                    className={`py-3 font-bold cursor-pointer contact-button-text ${isAPILoading ? 'opacity-50' : ''}`}
                    disabled={isAPILoading}
                />
            </section>
        </motion.form>
    )
};

MyCustomForm.propTypes = {
    fields: PropTypes.array,
    onSuccessMessage: PropTypes.string,
    onErrorMessage: PropTypes.string,
    customClass: PropTypes.string,
    submitButtonLabel: PropTypes.string,
    emailServiceURL: PropTypes.string,
    placeholder: PropTypes.string,
};

MyCustomForm.defaultProps = {
    fields: [{
        name: 'name',
        type: 'text',
        label: 'Name',
        placeholder: 'Name'
    }],
    onSuccessMessage: 'Success!',
    onErrorMessage: 'Something went wrong.'
};

export default MyCustomForm
