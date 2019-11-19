import React from 'react';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component.jsx';
import CustomButton from '../custom-button/custom-button.components.jsx';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils.js';

class SignUp extends React.Component {
    constructor(){
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword) {
            alert("Passwords Don't Match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName })
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (error) {
            console.error(error)
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }


    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'> I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        label='Display Name'
                        onChange={this.handleChange}
                        required />
                        <FormInput
                        type='text'
                        name='email'
                        value={email}
                        label="E-mail"
                        onChange={this.handleChange}
                        required />
                        <FormInput
                        type='password'
                        name='password'
                        value={password}
                        label="Password"
                        onChange={this.handleChange}
                        required />
                        <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        label="Confirm Password"
                        onChange={this.handleChange}
                        required />

                        <CustomButton type='submit'>Sign Up</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;