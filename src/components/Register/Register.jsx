import React, { Fragment, useState } from 'react'
import Spinner from '../Spinner/spinner'
import { useHistory } from 'react-router-dom'
import { registerUrl } from '../../utils/urls';
import axios from 'axios';
import {showAlert} from '../alerts/alert';

export default function Register() {
    const history = useHistory()
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirm: "",
        gender: "",
        monthOfBirth: "",
        dayOfBirth: "",
        yearOfBirth: "",
        country: "",
        fetchingData: false
    })
    const onChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const onSubmit = async (e) => {
        e.preventDefault()
        const { email, password, passwordConfirm, lastName, firstName, gender, monthOfBirth, dayOfBirth, yearOfBirth, country } = state;
        let reqBody = {
            email,
            password,
            passwordConfirm,
            gender,
            dob: `${dayOfBirth}-${monthOfBirth}-${yearOfBirth}`,
            country,
            firstName,
            lastName
        }
        
        try{
            setState({
                ...state,
                fetchingData: true
            })

            const res = await axios({
                method: 'POST',
                url: registerUrl,
                data: reqBody
            })
            if(res.data.status === 'success'){
                setState({
                    ...state,
                    fetchingData: false
                })    
                // showAlert('success', res.data.data.user.name)
                await history.push('/')
            }
        } catch(err) {
            setState({
                ...state,
                fetchingData: false
            })
            showAlert('danger', err.response.data.message)
        }
    }
    const { firstName, lastName, email, password, passwordConfirm, gender,
    country, dayOfBirth, monthOfBirth, yearOfBirth, fetchingData } = state;
    return (
        <Fragment>
            <div className="signup-form-wrapper">
                <h1 className="create-acc text-center">Create A Konet Account</h1>
                <div className="signup-inner text-center">
                    <h3 className="title">Welcome to Konet</h3>
                    <form className="signup-inner--form" onSubmit={onSubmit}>
                        <div className="row">
                            <div className="col-12">
                                <input type="email" name="email" onChange={onChange} value={email} className="single-field" placeholder="Email" />
                            </div>
                            <div className="col-md-6">
                                <input type="text" name="firstName" onChange={onChange} value={firstName} className="single-field" placeholder="First Name" />
                            </div>
                            <div className="col-md-6">
                                <input type="text" name="lastName" onChange={onChange} value={lastName} className="single-field" placeholder="Last Name" />
                            </div>
                            <div className="col-12">
                                <input type="password" name="password" onChange={onChange} value={password} className={`form-control single-field ${password.length >= 5 ? 'is-valid' : 'is-invalid'}`} id="validationServer01" placeholder="Password" />
                            </div>
                            <div className="col-12">
                                <input type="password" name="passwordConfirm" onChange={onChange} value={passwordConfirm} className={`form-control single-field ${password.length && passwordConfirm === password ? 'is-valid' : 'is-invalid'}`} id="validationServer02" placeholder="Password Again" />
                            </div>
                            <div className="col-md-6">
                                <select className="nice-select" name="gender" onChange={onChange} value={gender}>
                                    <option value="">Gender</option>
                                    <option value="M">Male</option>
                                    <option value="F">Female</option>
                                </select>
                            </div>
                            <div className="col-md-6">
                                <select className="col-4 nice-select" onChange={onChange} name="dayOfBirth" value={dayOfBirth}>
                                    <option value="">Day</option>
                                    <option value="18+">18+</option>
                                    <option value="18-">18-</option>
                                </select>
                                <select className="col-4 nice-select" onChange={onChange} name="monthOfBirth" value={monthOfBirth}>
                                    <option value="">Month</option>
                                    <option value="18+">18+</option>
                                    <option value="18-">18-</option>
                                </select>
                                <input type="number" name="yearOfBirth" onChange={onChange} value={yearOfBirth} className="col-4 single-field" placeholder="Year" />
                            </div>
                            <div className="col-12">
                                <select className="nice-select" name="country" onChange={onChange} value={country}>
                                    <option value="">Country</option>
                                    <option value="Bangladesh">Bangladesh</option>
                                    <option value="Noakhali">Noakhali</option>
                                    <option value="Australia">Australia</option>
                                    <option value="China">China</option>
                                </select>
                            </div>
                            <div className="col-12">
                                <button className="btn submit-btn" type="submit" disabled={fetchingData}>
                                    {
                                        fetchingData ?
                                        <Spinner text="Creating Account..." />  :
                                        'Create Account'
                                    }
                                </button>
                            </div>
                        </div>
                        <h6 className="terms-condition">I have read and accepted the terms and conditions</h6>
                    </form>
                </div>
            </div>
        </Fragment>
    )
}
