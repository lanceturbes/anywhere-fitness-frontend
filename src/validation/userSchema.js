import * as yup from 'yup';

const userSchema = yup.object().shape({
    username:yup
                .string()
                .required('Invalid Username')
                .min(6),
    password:yup
                .string()
                .required('Invalid Password')
                .min(8)
});
export default userSchema;