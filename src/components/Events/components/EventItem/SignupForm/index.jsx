import { useState } from "react";

const SignupForm = () => {

    const[name, setName] = useState('');
    const[age, setAge] = useState('');
    const[address, setAddress] = useState('');
    const[zipcode, setZipcode] = useState('');
    const[phone, setPhone] = useState('');

    const handlerClearClick = (evt) => {
        setName('');
        setAddress('');
        setAge('');
        setZipcode('');
        setPhone('');
        
    };

    const handleSubmitForm = (evt) => {
        evt.preventDefault();

        console.log('Enviado:', {
            name,
            age,
            zipcode,
            address,
            phone
        });
    };

    return(
        <form onSubmit={handleSubmitForm}>
            <label htmlFor="">
                Name
                <input type="text" value={name} onChange={(evt) => setName(evt.target.value)} required />
            </label>
            <br />
            <label htmlFor="">
                Age
                <input type="text" value={age} onChange={(evt) => setAge(evt.target.value)} required />
            </label>
            <br />
            <label htmlFor="">
                Address
                <input type="text" value={address} onChange={(evt) => setAddress(evt.target.value)} required />
            </label>
            <br />
            <label htmlFor="">
                Zipcode
                <input type="text" value={zipcode} onChange={(evt) => setZipcode(evt.target.value)} required />
            </label>
            <br />
            <label htmlFor="">
                Phone
                <input type="text" value={phone} onChange={(evt) => setPhone(evt.target.value)} required />
            </label>
            <br />
            <div  >
                <button type="button" onClick={handlerClearClick}>Clear</button>
                <button type="submit">Submit</button>
            </div>

        </form>
    );
};

export default SignupForm;