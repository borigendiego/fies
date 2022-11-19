import React from "react";
import { Form } from "../Form";
import { required, email } from './fieldValidations';
import { motion } from "framer-motion";

const KontaktComponent = () => {
    return(
        <div className='bg-gray-800 flex justify-center'>
            <motion.img 
                src='/assets/images/projekts/willich/willich-5.jpg' 
                className='absolute h-full w-full'
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
                        name: 'message',
                        type: 'text',
                        label: '',
                        placeholder: 'Botschaft',
                        validations: [required]
                    },
                ]}
                onSuccessMessage={'Deine Nachricht wurde erfolgreich gesendet. Wir werden Sie in Kürze kontaktieren'}
                onErrorMessage={'Versuchen Sie es in ein paar Minuten erneut.'}
                submitButtonLabel={'Senden'}
                emailServiceURL={''}
                />
        </div>
    )
}

export default KontaktComponent;