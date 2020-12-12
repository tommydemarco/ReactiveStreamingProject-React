import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { createStreamAsync } from '../../actions'
import './CreateStream.scss'

let form =""

const CreateStream = ({ handleSubmit }) => {

    const onFormSubmit = (formData) => {
        createStreamAsync(formData)
    }

    const renderInput = ({ input, label, meta }) => {
        return (
            <div className={form.form__group}>
                <label>{label} </label>
                <input {...input} />
                {meta.error && <div>{meta.error}</div>}
            </div>
        )
    } 


    return (
        <section className="create">
            <form onSubmit={handleSubmit(onFormSubmit)} className={form.form}>
                <Field name="title" unityMeasure="kWh" component={renderInput} label="Stream name" />
                <Field name="description" component={renderInput} label="Some other value"/>
                <input type="submit"/>
            </form>
        </section>
    )
}

const validate = formData => {
    const error = {}
    
    if(!formData.title) {
        error.title = "You must enter a name"
    }
    if(!formData.description) {
        error.description = "You must enter a description"
    }
    return error
}


export default connect(null, { createStreamAsync })(reduxForm({ form: 'creation form', validate })(CreateStream))
