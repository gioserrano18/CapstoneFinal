import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap'
import { useLocation, Link } from 'react-router-dom';


function Payment() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const AMOUNT = queryParams.get('amount');

  return (
	<div className='flex justify-center items-center h-screen'>
        <div className='bg-white p-8 shadow-md rounded-md'>
    	    <h3 className='text-center text-2xl font-bold mb-4'>Card Payment</h3>
    	    <Form  action="https://services.epxuap.com/browserpost/" method="post">
        	    <Form.Group className="mb-3">
            	    <Form.Label>Account Number</Form.Label>
            	        <Form.Control
                            type="number"
                            name='ACCOUNT_NBR'
                            placeholder='Enter Account Number'
            	        />
        	    </Form.Group>

        	<Row>
            	<Col>
                	<Form.Group className="mb-3">
                    	<Form.Label>Expiry Date</Form.Label>
                    	<Form.Control
                        	type="text"
                        	name="EXP_DATE"
                        	placeholder='MMYY'
                    	/>
                	</Form.Group>
            	</Col>

            	<Col>
                	<Form.Group className="mb-3">
                    	<Form.Label>CVV</Form.Label>
                    	<Form.Control
                        	type="text"
                        	name='CVV2'
                        	placeholder="123"
                    	/>
                	</Form.Group>
            	</Col>
        	</Row>

            <Form.Group className="mb-3">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              type="text"
              name='AMOUNT'
              value={AMOUNT}
              readOnly
              className="bg-gray-100 px-4 py-2 rounded-md"
            />
          </Form.Group>
            <Link to={'/payment/result'}>
                <Button variant="success" type="submit">Submit</Button>
            </Link>
    	</Form>
        </div>
	</div>
  )
}

export default Payment;