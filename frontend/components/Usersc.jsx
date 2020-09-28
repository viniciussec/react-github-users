import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

const Usersc = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  /*
    const toggle = (e) => {
      const id = e.target.id
      console.log(id)
  
      setIsOpen(!isOpen)
    }
  */
  const toggle = (id) => {
    if (!this.state.collapse || id !== this.state.collapse) {
      this.setState({
        collapse: id
      });
    } else if (this.state.collapse === id) {
      this.setState({ collapse: false })
    }
  }

  return (
    <div>
      <label color="primary" onClick={toggle} id="zap" style={{ marginBottom: '1rem' }}>Toggle</label>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
            Piruleta
          </CardBody>
        </Card>
      </Collapse>

      <label color="primary" onClick={toggle} id="zap2" style={{ marginBottom: '1rem' }}>Toggle</label>
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