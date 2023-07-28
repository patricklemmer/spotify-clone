import { useState } from 'react';

import { Modal, Button, Text, Row } from '@nextui-org/react';

const ModalBlock = () => {
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log('closed');
  };

  return (
    <div>
      <Button auto color="success" ghost onPress={handler}>
        Open before subscribing!
      </Button>
      <Modal
        closeButton
        blur
        css={{
          backgroundColor: '#262626',
          color: '#d4d4d4',
        }}
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18} css={{ color: '#d4d4d4' }}>
            Sign-up and Payment Info <span className="font-bold">Stripe</span>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <p>
            This app allows a mimicked payment process for the Spotify Premium
            plan. In order to make a payment, use these payment details:
          </p>
          <Row justify="space-between">
            <Text size={14} css={{ color: '#d4d4d4' }}>
              Credit Card Number
            </Text>
            <Text size={14} css={{ color: '#d4d4d4' }}>
              4242 4242 4242 4242
            </Text>
          </Row>
          <Row justify="space-between">
            <Text size={14} css={{ color: '#d4d4d4' }}>
              Expiration date
            </Text>
            <Text size={14} css={{ color: '#d4d4d4' }}>
              XX/XX (Date must be in the future)
            </Text>
          </Row>
          <Row justify="space-between">
            <Text size={14} css={{ color: '#d4d4d4' }}>
              CVC
            </Text>
            <Text size={14} css={{ color: '#d4d4d4' }}>
              XXX (Any three digits)
            </Text>
          </Row>
          <p>
            Open this link to grab a temporary email for sign up:{' '}
            <a
              href="https://tempmailo.com/"
              target="_blank"
              className="font-semibold"
            >
              https://tempmailo.com/
            </a>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button auto color="error" ghost onPress={closeHandler}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalBlock;
