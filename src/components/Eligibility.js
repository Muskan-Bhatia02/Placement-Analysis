import React from 'react'
// import Form from 'react-bootstrap/Form';

export default function Eligibility() {
    return (
        <>


            <style>{'body { background-color: gainsboro; }'}</style>
            <div className="outer">
                {/* <div className="left"></div>
        <div className="right"></div> */}
                <h2 className="eligibility">Eligibility</h2>

                <div className="container my-4">




                    <label>
                        <textval className="textlabel"> Enter Tenth Standard Percentage:  </textval> <input type="number" className="dummy" />
                    </label>

                    <label>
                        <textval className="textlabel">Enter Twelfth Standard Percentage: </textval> <input type="number" className="dummy" />
                    </label>

                    <label>
                        <textval className="textlabel"> Enter Engineering Percentage or CGPA: </textval> <input type="number" className="dummy" />
                    </label>


                    <back className="back">
                        Active Backlog?
                        <input type="radio" name="dummy3" />Yes
                        <input type="radio" name="dummy3" />No
                    </back>


                    {/* 
                    Active Backlog:
                    <input className="back box" type="radio" />Yes
                    <input className="back box" type="radio" />No */}



                </div>

            </div>



        </>
    )
}
