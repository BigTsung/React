import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
import { Button, ButtonToolbar, ButtonGroup, ToggleButton, ToggleButtonGroup} from 'react-bootstrap';

function App() {
  return (
    <div>
      <ButtonToolbar aria-label="Toolbar with button groups">
        <ButtonGroup className="mr-2" aria-label="First group">
          <Button variant="secondary">Secondary</Button>
          <Button variant="success">Success</Button>
          <Button variant="warning">Warning</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="info">Info</Button>
          <Button variant="light">Light</Button>
          <Button variant="dark">Dark</Button>
          <Button variant="link">Link</Button>
          <Button variant="primary">Primary</Button>
        </ButtonGroup>
      </ButtonToolbar>
      <ButtonToolbar aria-label="Toolbar with button groups">
        <ButtonGroup className="mr-2" aria-label="Second group">
          <Button variant="outline-secondary">Secondary</Button>
          <Button variant="outline-success">Success</Button>
          <Button variant="outline-warning">Warning</Button>
          <Button variant="outline-danger">Danger</Button>
          <Button variant="outline-info">Info</Button>
          <Button variant="outline-light">Light</Button>
          <Button variant="outline-dark">Dark</Button>
          <Button variant="outline-primary">Primary</Button>
        </ButtonGroup>
      </ButtonToolbar>  
      

      <ButtonToolbar>
        <Button href="#">Link</Button>
        <Button type="submit">Button</Button>
        <Button as="input" type="button" value="Input" />
        <Button as="input" type="submit" value="Submit" />
        <Button as="input" type="reset" value="Reset" />
      </ButtonToolbar>

      <ButtonToolbar>
        <Button variant="primary" size="lg">
          Large button
        </Button>
        <Button variant="secondary" size="lg">
          Large button
        </Button>
      </ButtonToolbar>

      <ButtonToolbar>
        <Button variant="primary" size="sm">
          Small button
        </Button>
        <Button variant="secondary" size="sm">
          Small button
        </Button>
      </ButtonToolbar>

      <Button variant="primary" size="lg" block>
        Block level button
      </Button>
      <Button variant="secondary" size="lg" block>
        Block level button
      </Button>

      <ButtonToolbar>
        <Button variant="primary" size="lg" active>
          Primary button
        </Button>
        <Button variant="secondary" size="lg" active>
          Button
        </Button>
      </ButtonToolbar>

      <ButtonToolbar>
        <Button variant="primary" size="lg" disabled>
          Primary button
        </Button>{' '}
        <Button variant="secondary" size="lg" disabled>
          Button
        </Button>{' '}
        <Button href="#" variant="secondary" size="lg" disabled>
          Link
        </Button>
      </ButtonToolbar>

      <ButtonGroup toggle>
        <ToggleButton type="checkbox" defaultChecked value="1">
          Checked
        </ToggleButton>
      </ButtonGroup>
      <ButtonGroup toggle className="mt-3">
        <ToggleButton type="radio" name="radio" defaultChecked value="1">
          Active
        </ToggleButton>
        <ToggleButton type="radio" name="radio" value="2">
          Radio
        </ToggleButton>
        <ToggleButton type="radio" name="radio" value="3">
          Radio
        </ToggleButton>
      </ButtonGroup>

      <ButtonToolbar>
        <ToggleButtonGroup type="checkbox" defaultValue={[1, 3]}>
          <ToggleButton value={1}>Checkbox 1 (pre-checked)</ToggleButton>
          <ToggleButton value={2}>Checkbox 2</ToggleButton>
          <ToggleButton value={3}>Checkbox 3 (pre-checked)</ToggleButton>
        </ToggleButtonGroup>
      </ButtonToolbar>

      <ButtonToolbar>
        <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
          <ToggleButton value={1}>Radio 1 (pre-checked)</ToggleButton>
          <ToggleButton value={2}>Radio 2</ToggleButton>
          <ToggleButton value={3}>Radio 3</ToggleButton>
        </ToggleButtonGroup>
      </ButtonToolbar>

    </div>
  )
}

export default App;
