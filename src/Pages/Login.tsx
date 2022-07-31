import { gql, useQuery } from '@apollo/client';
import React, { useState } from 'react';

const GET_PREREGISTER_TOKEN = gql`
    query AuthorizationPreregisterUser($locale: String!, $referenceUser: String, $region: String, $appsFlyerId: String) {
        tokenWithPreregisterUser(
            locale: $locale
            referenceUser: $referenceUser
            region: $region
            source: WEB
            appsFlyerId: $appsFlyerId
        ) {
            token
        }
    }`

const getRandomFlyerId = () => {
    // Generate two numbers between 1000000000000 and 9999999999999 and concatenate them with a dash
    const a = Math.floor(Math.random() * 10000000000000) + 1000000000000;
    const b = Math.floor(Math.random() * 10000000000000) + 1000000000000;
    return a + '-' + b;
}

const randomFlyerId = getRandomFlyerId();
console.log(randomFlyerId);
    
const Login = () => {
    const { loading, error, data } =  useQuery(GET_PREREGISTER_TOKEN, {
        variables: {
            locale: 'nl-NL',
            referenceUser: '',
            region: 'nl',
            appsFlyerId: randomFlyerId
        }
    });

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    if (loading) return <></>;
    if (error) return (<div>Error: {error.message}</div>);

    console.log(data);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(email, password);

        // const preregisterUser = get
        // const preregisterToken = 
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input type="email" name="email" onChange={(e) => setEmail(e.target.value)}/>
                </label>
                <label>
                    Password:
                    <input type="password" name="password" onChange={(e) => setPassword(e.target.value)}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Login;