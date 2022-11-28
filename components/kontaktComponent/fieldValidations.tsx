const required = (value:any) => value ? undefined : 'Notwendig';


const email = (value:any) => {
    if (!value) {
        return 'Notwendig';
    }
    return !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Falsche E-mail' : undefined;
};

export {
    required,
    email,
}