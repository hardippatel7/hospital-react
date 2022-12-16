import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { withRouter, useHistory } from 'react-router-dom';

function Home(props) {

    return (
        <div>
            <h2><center> Check from the below checklist and submit</center></h2>

            <Jumbotron className='form'>
                <Form onSubmit={e => {
                }} >

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Symptom 1" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Symptom 2" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Symptom 3" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Symptom 4" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Symptom 5" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Symptom 6" />
                    </Form.Group>

                    <div className='button'>
                        <Button className='buttonSave' variant="primary" type="submit">
                            Submit
                        </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Button className='buttonCancel' variant="danger" type="submit" >
                            Cancel
                        </Button>
                    </div>
                </Form>
            </Jumbotron>
        </div>
    );

}

export default withRouter(Home);