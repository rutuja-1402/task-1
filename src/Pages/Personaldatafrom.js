import React, { useState } from "react"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

const Personaldatafrom = ({setstep, step,setsubmitdata ,submitdata})=>{

    const [errors, seterrors] = useState({})
    // const initialValues={
    //     id:'',
    //     name:'',
    //     email:'',

    // }
    // const personaldetailChange=()=>{
    //   useFormik ({
    //     initialValues:initialValues,
    //     onSubmit:(values)=>{
    //         console.log(values)
    //     }
    //   })
    // }

    const handlePersonalChange = (event) => {
        debugger
        setsubmitdata({ ...submitdata, [event.target.name]: event.target.value })

        event.preventDefault();
        const newErrors = {};
        if (submitdata.id === "") {
            newErrors.name = "ID is required.";
        }
        if (Object.keys(newErrors).length > 0) {
            seterrors(newErrors);
            return;
        }

    }


return(
    <div id='#personal_info' style={{ width: 'auto', margin: 'auto', textAlign: 'start', position: 'relative', top: '50px' }}>
        <h2>Personal Details</h2>
        <Form >
            <InputGroup hasValidation>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>ID</Form.Label>
                    <Form.Control type="text" placeholder="Enter id" name="id" required isInvalid value={submitdata.id} onChange={(event) => handlePersonalChange(event)} />
                    <Form.Control.Feedback type="invalid">
                        Please choose a id.
                    </Form.Control.Feedback>
                </Form.Group>
            </InputGroup>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo</Form.Label>
                <Form.Control type="file" placeholder="" name='profile_photo' value={submitdata.profile_picture} onChange={(event) => handlePersonalChange(event)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" name='name' value={submitdata.name} onChange={(event) => handlePersonalChange(event)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name='email' value={submitdata.email} onChange={(event) => handlePersonalChange(event)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Label>Select Gender</Form.Label>
                <br />
                <input type="radio" id="male" name="gender" value={submitdata.gender} onChange={(event) => handlePersonalChange(event)} />
                <label for="male">Male</label><br />
                <input type="radio" id="Female" name="gender" value="Female" />
                <label for="female">Female</label><br />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Label>Select your hobbies</Form.Label>
                <select id="multiple" multiple value={submitdata.hobbies} name="hobbies" onChange={(event) => handlePersonalChange(event)} >
                    <option value="value1" name='' >please select ....</option>
                </select>

            </Form.Group>
        </Form>
    </div>
)
};


export default Personaldatafrom;