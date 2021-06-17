import { render } from "@testing-library/react";
import React from "react";
import Input from "./Input";

class ComponentForm2 extends React.Component {
    constructor(){
        super();
        this.state = { data :{}, error:{} };
    }

    handleChange = (property,val, isError, isTouched) => {
        let data = { ...this.state.data,[property]:val  };
        let error = { ...this.state.error,[property]:isError };
        this.setState({ data,error });
    }

    handleSubmitForm = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render(){
        return (
            <form className="form" onSubmit={this.handleSubmitForm}>
            <div className="form-header center">Component Form (Class based)</div>
            <div className="form-body margin">
                <Input label="First name" handleValueChange={this.handleChange.bind(null, "firstName")} />
                <Input label="Middle name" handleValueChange={this.handleChange.bind(null, "middleName")} />
                <Input label="Last name" handleValueChange={this.handleChange.bind(null, "lastName")} />
                <Input label="Email" handleValueChange={this.handleChange.bind(null, "email")} />
                <input type="submit" disabled={Object.values(this.state.error).find(e => e)} />
            </div>
            </form>
        )
    }
}

export default ComponentForm2;
