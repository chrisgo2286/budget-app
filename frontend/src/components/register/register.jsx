import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../misc/context';
import { postRegistration } from '../../misc/apiCalls';
import { updateLocalStorage } from '../../misc/userFunctions';
import { updateUser } from '../../misc/userFunctions';
import ValidationErrors from '../miscComponents/validationErrors/validationErrors';
import NewUserFields from './newUserFields';
import Button from '../miscComponents/button/button';
import { postLogin } from '../../misc/apiCalls';
import './register.css';

export default function Register () {
    const [user, setUser] = useContext(UserContext);
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        username: '',
        password1: '',
        password2: '',
    })
    const [errors, setErrors] = useState([])

    async function handleSubmit () {

        const response = await postRegistration(credentials);
        
        if(response.status === 201) {
            const token = response.data.key;
            updateLocalStorage(token, credentials.username)
            updateUser(token, credentials.username, user, setUser)
            navigate('/budget');

        } else if(response.status === 204) {
            const loginCredentials = {
                username: credentials.username,
                password: credentials.password1
            }

            const response = await postLogin(loginCredentials);

            if(response.status && response.status === 200) {
                const token = response.data.key;
                updateLocalStorage(token, credentials.username);
                updateUser(token, credentials.username, user, setUser);
                navigate('/budget');
            }
        }    
    }

    return (
        <div className="register" data-cy='register-link'>
            <NewUserFields fields={ credentials } setFields={ setCredentials }/>
            <Button 
                onClick={ handleSubmit } 
                label='Register' 
                data-cy='register-btn' />
            <ValidationErrors errors={ errors } />
        </div>
    )
}