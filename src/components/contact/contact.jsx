import React from 'react'
import { Card, CardBody, CardHeader } from 'react-bootstrap'

const Contact = () => {
  return (
    <div className='row mx-5'>
        <div className='col-6 p-5'>
            <Card>
                <CardHeader>
                Mysore Office
                </CardHeader>
                <CardBody>
                # 41/32, Mothikhana Building Old Santhepet, Mysore - 570024 eaglesproperty991@gmail.com 9980557991
                </CardBody>
            </Card>
        </div>
        <div className='col-6 p-5'>
        <Card>
                <CardHeader>
                Bangalore Office
                </CardHeader>
                <CardBody>
                # 82, 4th Floor, Pipeline, 11th Cross Malleshwaram, Banglore - 560003 eaglesproperty991@gmail.com 9845034692
                </CardBody>
            </Card>
        </div>
    </div>
    
    
    // <div className='container'>
    //     <h1>
    //         Mysore Office
    //     </h1>
    //     <p>
    //         # 41/32, Mothikhana Building Old Santhepet, Mysore - 570024 eaglesproperty991@gmail.com 9980557991
    //     </p>
    // </div>
  )
}

export default Contact