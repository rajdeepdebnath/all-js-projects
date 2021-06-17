import { Field, useField } from 'formik'

const MyTextInput = ({label, ...props}) => {

    const [field, meta] = useField(props);
    console.log(field);
    return (
        <div className="form-element">
            <label>{label}</label>
            <Field type="text" name={field.name} />
            {meta.touched && meta.error ? <div className="error">{meta.error}</div> : undefined}
        </div>
    );
}

export default MyTextInput