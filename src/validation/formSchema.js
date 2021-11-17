import * as yup from 'yup';

const formSchema = yup.object().shape({
    first_name:yup
                .string()
                .trim()
                .required('Correct name is required')
                .min(3),
    last_name:yup
                .string()
                .trim()
                .required('Correct name is required')
                .min(3),
    username:yup
                .string()
                .trim()
                .required('username is required')
                .min(6),
    password:yup
                .string()
                .required('Password is required')
                .min(8),
    email:yup
            .string()
            .email()
            .required('Email is required'),
    emailConfirm:yup
                    .string()
                    .email()
                    .required('Email address is not matching')
                    .when("email", {
                        is: email => (email && email.length > 0 ? true : false),
                        then: yup.string().oneOf([yup.ref("email")], "Email address doesn't match")
                    })
})
export default formSchema;