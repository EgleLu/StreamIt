import React from 'react';
import { Field, reduxForm} from 'redux-form';


class StreamForm extends React.Component{

    renderError({error, touched}){
        if(touched && error){
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }
    renderInput = ({input, label, meta}) => {
       // console.log(meta);
        // console.log(formProps)
        return (
        <div className="field">
            <label>{label}</label>
        <input 
            //onChange={formProps.inpute.onChange}
            //value={formProps.input.value} OR
            //{...formProps.input} OR
            {...input} autoComplete="off"
            />
              {this.renderError(meta)}
           
         </div>   
            ) 
        }

        onSubmit = (formValues) => {
           this.props.onSubmit(formValues);
        }
    
  render(){
    return (
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
            <Field name="title" component={this.renderInput} label="Enter Title"/>
            <Field name="description" component={this.renderInput} label="Enter description"/>
            <button className="ui button primary">Submit</button>
        </form>
    )
  }   
};

const validate = (formValues) => {
    const errors = {};
    if(!formValues.title){
        //only ran if the use did not enter a title
        errors.title = 'You must enter a title'
    }

    if(!formValues.description){
        errors.description = 'You must ener a description'
    }

    return errors;
}

export default reduxForm({
    form: 'streamForm',
    validate: validate
})(StreamForm);

