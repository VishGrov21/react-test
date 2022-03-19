import React, { useState } from "react";
import { Form, Button, OverlayTrigger, Popover } from "react-bootstrap";

const popoverLeft = (
  <Popover id='popover-positioned-left' title='Popover left'>
    no ice-cream will be delivered
  </Popover>
);

const checkboxLabel = (
  <span>
    I agree to{" "}
    <OverlayTrigger placement='left' overlay={popoverLeft}>
      <span style={{ color: "blue" }}>terms and conditions</span>
    </OverlayTrigger>
  </span>
);

const SummaryForm = () => {
  const [tcChecked, setTCChecked] = useState(false);

  return (
    <Form>
      <Form.Group controlId='terms and conditions'>
        <Form.Check
          type='checkbox'
          checked={tcChecked}
          onChange={(e) => setTCChecked(e.target.checked)}
          label={checkboxLabel}
        />
      </Form.Group>
      <Button variant='primary' type='submit' disabled={!tcChecked}>
        Confirm Order
      </Button>
    </Form>
  );
};

export default SummaryForm;
