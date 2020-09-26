import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

const Usersc = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <label color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Toggle</label>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
         Piruleta
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default Usersc;