import React from 'react';
import FormInput from '../form-input/form-input.component.jsx';
import CustomButton from '../custom-button/custom-button.components.jsx';
import { signInWithGoogle } from '../../firebase/firebase.utils.js';
import { signInWithFacebook } from '../../firebase/firebase.utils.js';
import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

    handleSubmit = event => {
        event.preventDefault();
    }

    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign In with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        value={this.state.email} 
                        label='email'
                        handleChange={this.handleChange}
                        required />
                    <FormInput 
                        name='password' 
                        value={this.state.password} 
                        label='password'
                        handleChange={this.handleChange}
                        required />
                    <div className='buttons'>
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>{' '}Google{' '}</CustomButton>
                    <CustomButton onClick={signInWithFacebook} isFacebookSignIn>{' '}Facebook{' '}</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
};

export default SignIn;