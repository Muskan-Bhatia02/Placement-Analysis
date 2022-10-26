import React from 'react'
import Form from 'react-bootstrap/Form';


export default function Help() {
    return (
        <>


            <style>{'body { background-color: gainsboro; }'}</style>
            <div className="outer">
                {/* <div className="left"></div>
        <div className="right"></div> */}
                <h2 className="contact">Contact Us</h2>

                <Form>

                    {/* <Form.Group className="mb-3 input1" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group> */}

{/* 
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group> */}



                    <Form.Group className="tenth" >
                        <Form.Label>Enter Tenth Standard Percentage: </Form.Label>
                        <input className= "tenth" type="number" step="any" />
                    </Form.Group>


                    <Form.Group className="twelfth" >
                        <Form.Label>Enter Twelfth Standard Percentage: </Form.Label>
                        <input className= "twelfth" type="number" step="any" />
                    </Form.Group>

                    <Form.Group className="engg" >
                        <Form.Label>Enter Engineering Percentage or CGPA: </Form.Label>
                        <input className= "engg" type="number" step="any" />
                    </Form.Group>


                    Active Backlog:   
                    <input className="back" type="radio"/>Yes 
                    <input className="back" type="radio"/>No



                </Form>


            </div>

        </>

    )
}
