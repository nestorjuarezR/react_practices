import { useState } from "react";
import { useForm } from "react-hook-form";

const SignupForm = () => {

    const {register, handleSubmit, reset, formState: {errors}} = useForm(); 

    const[name, setName] = useState('');
    const[age, setAge] = useState('');
    const[address, setAddress] = useState('');
    const[zipcode, setZipcode] = useState('');
    const[phone, setPhone] = useState('');

    const handlerClearClick = (evt) => {
        reset();
        
    };

    const handleSubmitForm = (data) => {
        console.log(data);
    };

    console.log(errors);

    return(
        <form onSubmit={handleSubmit(handleSubmitForm)}>
            <label htmlFor="">
                Name
                <input type="text" {...register('name', {required:true})}  />
            </label>
            <br />
            <label htmlFor="">
                Age
                <input type="text" {...register('age', {required:true})}  />
            </label>
            <br />
            <label htmlFor="">
                Address
                <input type="text" {...register('address', {required:true})}  />
            </label>
            <br />
            <label htmlFor="">
                Zipcode
                <input type="text" {...register('zipcode', {required:true})}  />
            </label>
            <br />
            <label htmlFor="">
                Phone
                <input type="text" {...register('phone', {required:true})}  />
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