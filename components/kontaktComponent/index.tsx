import React from "react";
import { Form } from "../Form";
import { required, email } from './fieldValidations';
import { motion } from "framer-motion";

const KontaktComponent = () => {
    return(
        <div className=' flex justify-center'>
            <motion.img 
                src='/assets/images/projekts/willich/willich-5.webp' 
                className='absolute h-full w-full object-cover'
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration:  1, delay: .5}}
                viewport={{once: true}}
             />
            <Form 
                fields={[
                    {
                        name: 'name',
                        type: 'text',
                        label: '',
                        placeholder: 'Name',
                        validations: [required]
                    },
                    {
                        name: 'customerEmail',
                        type: 'text',
                        label: '',
                        placeholder: 'Email',
                        validations: [required, email]
                    },
                    {
                        name: 'phone',
                        type: 'text',
                        label: '',
                        placeholder: 'Telefon',
                        validations: []
                    },
                    {
                        name: 'message',
                        type: 'textArea',
                        label: '',
                        placeholder: 'Nachricht',
                        validations: [required]
                    },
                ]}
                onSuccessMessage={'Deine Nachricht wurde erfolgreich gesendet. Wir werden Sie in Kürze kontaktieren'}
                onErrorMessage={'Versuchen Sie es in ein paar Minuten erneut.'}
                submitButtonLabel={'Senden'}
                emailServiceURL={'https://thehippoapi.netlify.app/.netlify/functions/api/spektrum-email'}
                />
        </div>
    )
}

export default KontaktComponent;