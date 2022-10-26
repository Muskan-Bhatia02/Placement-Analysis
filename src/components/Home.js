import React from 'react'
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import Placeholder from 'react-bootstrap/Placeholder';

export default function Home() {
    return (
        <>
            {/* accordion div starts here */}
            <div className="accordion">
                <div class="accordion" id="accordionPanelsStayOpenExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                Accordion Item #1
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                            <div class="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                Accordion Item #2
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                            <div class="accordion-body">
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                Accordion Item #3
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                            <div class="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* accordion div ends here */}



   <h2 className="recruiters my-4">Top Recruiters</h2>

<div className="allcards my-4">

            <div className="cards my-4 d-flex flex-wrap justify-content-sm-between">

                {/* card 1 starts here*/}
                <div className="d-flex justify-content-around text-center">
                    <Card style={ {width: '14rem' ,  height : '14rem'}}>
                        <Card.Img variant="top" src="placement_logo.png" />
                        <Card.Body>
                            <Card.Title>Capgemini</Card.Title>
                            {/* <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text> */}
                            {/* <Button variant="primary">Go to website</Button> */}
                        </Card.Body>
                    </Card>
                </div>
                {/* card 1 ends here */}



                {/* card 1 starts here*/}
                <div className="d-flex justify-content-around text-center">
                    <Card style={ {width: '14rem' ,  height : '14rem'}}>
                        <Card.Img variant="top" src="placement_logo.png" />
                        <Card.Body>
                            <Card.Title>Capgemini</Card.Title>
                            {/* <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text> */}
                            {/* <Button variant="primary">Go to website</Button> */}
                        </Card.Body>
                    </Card>
                </div>
                {/* card 1 ends here */}




                {/* card 1 starts here*/}
                <div className="d-flex justify-content-around text-center">
                    <Card style={ {width: '14rem' ,  height : '14rem'}}>
                        <Card.Img variant="top" src="placement_logo.png" />
                        <Card.Body>
                            <Card.Title>Capgemini</Card.Title>
                            {/* <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text> */}
                            {/* <Button variant="primary">Go to website</Button> */}
                        </Card.Body>
                    </Card>
                </div>
                {/* card 1 ends here */}


                {/* card 1 starts here*/}
                <div className="d-flex justify-content-around text-center">
                    <Card style={ {width: '14rem' ,  height : '14rem'}}>
                        <Card.Img variant="top" src="placement_logo.png" />
                        <Card.Body>
                            <Card.Title>Capgemini</Card.Title>
                            {/* <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text> */}
                            {/* <Button variant="primary">Go to website</Button> */}
                        </Card.Body>
                    </Card>
                </div>
                {/* card 1 ends here */}




                {/* card 1 starts here*/}
                <div className="d-flex justify-content-around text-center">
                    <Card style={ {width: '14rem' ,  height : '14rem'}}>
                        <Card.Img variant="top" src="placement_logo.png" />
                        <Card.Body>
                            <Card.Title>Capgemini</Card.Title>
                            {/* <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text> */}
                            {/* <Button variant="primary">Go to website</Button> */}
                        </Card.Body>
                    </Card>
                </div>
                {/* card 1 ends here */}


                 {/* card 1 starts here*/}
                 <div className="d-flex justify-content-around text-center">
                    <Card style={ {width: '14rem' ,  height : '14rem'}}>
                        <Card.Img variant="top" src="placement_logo.png" />
                        <Card.Body>
                            <Card.Title>Capgemini</Card.Title>
                            {/* <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text> */}
                            {/* <Button variant="primary">Go to website</Button> */}
                        </Card.Body>
                    </Card>
                </div>
                {/* card 1 ends here */}

                 {/* card 1 starts here*/}
                 <div className="d-flex justify-content-around text-center">
                    <Card style={ {width: '14rem' ,  height : '14rem'} }>
                        <Card.Img variant="top" src="placement_logo.png" />
                        <Card.Body>
                            <Card.Title>Capgemini</Card.Title>
                            {/* <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text> */}
                            {/* <Button variant="primary">Go to website</Button> */}
                        </Card.Body>
                    </Card>
                </div>
                {/* card 1 ends here */}


                  {/* card 1 starts here*/}
                  <div className="d-flex justify-content-around text-center">
                    <Card style={ {width: '14rem' ,  height : '14rem'}}>
                        <Card.Img variant="top" src="placement_logo.png" />
                        <Card.Body>
                            <Card.Title>Capgemini</Card.Title>
                            {/* <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text> */}
                            {/* <Button variant="primary">Go to website</Button> */}
                        </Card.Body>
                    </Card>
                </div>
                {/* card 1 ends here */}


                 {/* card 1 starts here*/}
                 <div className="d-flex justify-content-around text-center">
                    <Card style={ {width: '14rem' ,  height : '14rem'}}>
                        <Card.Img variant="top" src="placement_logo.png" />
                        <Card.Body>
                            <Card.Title>Capgemini</Card.Title>
                            {/* <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text> */}
                            {/* <Button variant="primary">Go to website</Button> */}
                        </Card.Body>
                    </Card>
                </div>
                {/* card 1 ends here */}

                 {/* card 1 starts here*/}
                 <div className="d-flex justify-content-around text-center">
                    <Card style={ {width: '14rem' ,  height : '14rem'} }>
                        <Card.Img variant="top" src="placement_logo.png" />
                        <Card.Body>
                            <Card.Title>Capgemini</Card.Title>
                            {/* <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text> */}
                            {/* <Button variant="primary">Go to website</Button> */}
                        </Card.Body>
                    </Card>
                </div>
                {/* card 1 ends here */}



                  {/* card 1 starts here*/}
                  <div className="d-flex justify-content-around text-center">
                    <Card style={ {width: '14rem' ,  height : '14rem'}}>
                        <Card.Img variant="top" src="placement_logo.png" />
                        <Card.Body>
                            <Card.Title>Capgemini</Card.Title>
                            {/* <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text> */}
                            {/* <Button variant="primary">Go to website</Button> */}
                        </Card.Body>
                    </Card>
                </div>
                {/* card 1 ends here */}


                 {/* card 1 starts here*/}
                 <div className="d-flex justify-content-around text-center">
                    <Card style={ {width: '14rem' ,  height : '14rem'}}>
                        <Card.Img variant="top" src="placement_logo.png" />
                        <Card.Body>
                            <Card.Title>Capgemini</Card.Title>
                            {/* <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text> */}
                            {/* <Button variant="primary">Go to website</Button> */}
                        </Card.Body>
                    </Card>
                </div>
                {/* card 1 ends here */}

                 {/* card 1 starts here*/}
                 <div className="d-flex justify-content-around text-center">
                    <Card style={ {width: '14rem' ,  height : '14rem'} }>
                        <Card.Img variant="top" src="placement_logo.png" />
                        <Card.Body>
                            <Card.Title>Capgemini</Card.Title>
                            {/* <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text> */}
                            {/* <Button variant="primary">Go to website</Button> */}
                        </Card.Body>
                    </Card>
                </div>
                {/* card 1 ends here */}


                  {/* card 1 starts here*/}
                  <div className="d-flex justify-content-around text-center">
                    <Card style={ {width: '14rem' ,  height : '14rem'}}>
                        <Card.Img variant="top" src="placement_logo.png" />
                        <Card.Body>
                            <Card.Title>Capgemini</Card.Title>
                            {/* <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text> */}
                            {/* <Button variant="primary">Go to website</Button> */}
                        </Card.Body>
                    </Card>
                </div>
                {/* card 1 ends here */}


                 {/* card 1 starts here*/}
                 <div className="d-flex justify-content-around text-center">
                    <Card style={ {width: '14rem' ,  height : '14rem'}}>
                        <Card.Img variant="top" src="placement_logo.png" />
                        <Card.Body>
                            <Card.Title>Capgemini</Card.Title>
                            {/* <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text> */}
                            {/* <Button variant="primary">Go to website</Button> */}
                        </Card.Body>
                    </Card>
                </div>
                {/* card 1 ends here */}

                 {/* card 1 starts here*/}
                 <div className="d-flex justify-content-around text-center">
                    <Card style={ {width: '14rem' ,  height : '14rem'} }>
                        <Card.Img variant="top" src="placement_logo.png" />
                        <Card.Body>
                            <Card.Title>Capgemini</Card.Title>
                            {/* <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text> */}
                            {/* <Button variant="primary">Go to website</Button> */}
                        </Card.Body>
                    </Card>
                </div>
                {/* card 1 ends here */}



                  {/* card 1 starts here*/}
                  <div className="d-flex justify-content-around text-center">
                    <Card style={ {width: '14rem' ,  height : '14rem'}}>
                        <Card.Img variant="top" src="placement_logo.png" />
                        <Card.Body>
                            <Card.Title>Capgemini</Card.Title>
                            {/* <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text> */}
                            {/* <Button variant="primary">Go to website</Button> */}
                        </Card.Body>
                    </Card>
                </div>
                {/* card 1 ends here */}


                 {/* card 1 starts here*/}
                 <div className="d-flex justify-content-around text-center">
                    <Card style={ {width: '14rem' ,  height : '14rem'}}>
                        <Card.Img variant="top" src="placement_logo.png" />
                        <Card.Body>
                            <Card.Title>Capgemini</Card.Title>
                            {/* <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text> */}
                            {/* <Button variant="primary">Go to website</Button> */}
                        </Card.Body>
                    </Card>
                </div>
                {/* card 1 ends here */}

                 {/* card 1 starts here*/}
                 <div className="d-flex justify-content-around text-center">
                    <Card style={ {width: '14rem' ,  height : '14rem'} }>
                        <Card.Img variant="top" src="placement_logo.png" />
                        <Card.Body>
                            <Card.Title>Capgemini</Card.Title>
                            {/* <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text> */}
                            {/* <Button variant="primary">Go to website</Button> */}
                        </Card.Body>
                    </Card>
                </div>
                {/* card 1 ends here */}


                  {/* card 1 starts here*/}
                  <div className="d-flex justify-content-around text-center">
                    <Card style={ {width: '14rem' ,  height : '14rem'}}>
                        <Card.Img variant="top" src="placement_logo.png" />
                        <Card.Body>
                            <Card.Title>Capgemini</Card.Title>
                            {/* <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text> */}
                            {/* <Button variant="primary">Go to website</Button> */}
                        </Card.Body>
                    </Card>
                </div>
                {/* card 1 ends here */}


                 {/* card 1 starts here*/}
                 <div className="d-flex justify-content-around text-center">
                    <Card style={ {width: '14rem' ,  height : '14rem'}}>
                        <Card.Img variant="top" src="placement_logo.png" />
                        <Card.Body>
                            <Card.Title>Capgemini</Card.Title>
                            {/* <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text> */}
                            {/* <Button variant="primary">Go to website</Button> */}
                        </Card.Body>
                    </Card>
                </div>
                {/* card 1 ends here */}

                 {/* card 1 starts here*/}
                 <div className="d-flex justify-content-around text-center">
                    <Card style={ {width: '14rem' ,  height : '14rem'} }>
                        <Card.Img variant="top" src="placement_logo.png" />
                        <Card.Body>
                            <Card.Title>Capgemini</Card.Title>
                            {/* <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text> */}
                            {/* <Button variant="primary">Go to website</Button> */}
                        </Card.Body>
                    </Card>
                </div>
                {/* card 1 ends here */}



                  {/* card 1 starts here*/}
                  <div className="d-flex justify-content-around text-center">
                    <Card style={ {width: '14rem' ,  height : '14rem'}}>
                        <Card.Img variant="top" src="placement_logo.png" />
                        <Card.Body>
                            <Card.Title>Capgemini</Card.Title>
                            {/* <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text> */}
                            {/* <Button variant="primary">Go to website</Button> */}
                        </Card.Body>
                    </Card>
                </div>
                {/* card 1 ends here */}


                 {/* card 1 starts here*/}
                 <div className="d-flex justify-content-around text-center">
                    <Card style={ {width: '14rem' ,  height : '14rem'}}>
                        <Card.Img variant="top" src="placement_logo.png" />
                        <Card.Body>
                            <Card.Title>Capgemini</Card.Title>
                            {/* <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text> */}
                            {/* <Button variant="primary">Go to website</Button> */}
                        </Card.Body>
                    </Card>
                </div>
                {/* card 1 ends here */}

                 

            </div>


            {/* <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
          <Placeholder.Button variant="primary" xs={6} />
        </Card.Body>
      </Card> */}

</div>
        </>
    )
}
