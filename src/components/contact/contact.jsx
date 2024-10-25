import React from 'react';
import { Card, CardBody, CardHeader } from 'react-bootstrap';

const Contact = () => {
  return (
    <div className='row mx-0'>
      {/* Mysore Office Card */}
      <div className='col-12 col-md-6 p-5'>
        <Card>
          <CardHeader>
            Mysore Office
          </CardHeader>
          <CardBody>
            <p>
              # 41/32, Mothikhana Building Old Santhepet, Mysore - 570024
            </p>
            <p>
              <strong>Email:</strong> eaglesproperty991@gmail.com
            </p>
            <p>
              <strong>Phone:</strong> 9980557991
            </p>
            <p>
              <strong>Website:</strong> https://www.theeaglesrealty.com/
            </p>
          </CardBody>
        </Card>
      </div>

      {/* Bangalore Office Card */}
      <div className='col-12 col-md-6 p-5'>
        <Card>
          <CardHeader>
            Bangalore Office
          </CardHeader>
          <CardBody>
            <p>
              # 82, 4th Floor, Pipeline, 11th Cross Malleshwaram, Bangalore - 560003
            </p>
            <p>
              <strong>Email:</strong> eaglesproperty991@gmail.com
            </p>
            <p>
              <strong>Phone:</strong> 9845034692
            </p>
            <p>
              <strong>Website:</strong> https://www.theeaglesrealty.com/
            </p>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default Contact;
