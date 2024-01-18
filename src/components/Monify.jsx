import React, { Component } from 'react';
//import the library
import { useMonnifyPayment, MonnifyButton, MonnifyConsumer, MonnifyHookExample } from 'react-monnify';

class MApp extends Component {

    state = {
        amount: 5000,
        currency: 'NGN',
        reference: '' + Math.floor(Math.random() * 1000000000 + 1),
        customerFullName: 'John Doe',
        customerEmail: 'monnify@monnify.com',
        customerMobileNumber: '08121281921',
        apiKey: 'MK_TEST_SAF7HR5F3F',
        contractCode: '4934121693',
        paymentDescription: 'Test Pay',
        isTestMode: true,
        metadata: {
            name: 'Damilare',
            age: 45,
        },
    }

    onComplete = (response) => {
        console.log(response); // card charged successfully, get reference here
    }

    close = (response) => {
        console.log(response);
    }

    render() {
        return (
            <>
                <div>
                    <MonnifyHookExample className="btn" />
                </div>
                <div>
                    <p>
                        <MonnifyButton
                            text="Make Payment"
                            className="payButton"
                            onComplete={this.onComplete}
                            close={this.close}
                            disabled={true} {/*disable payment button*/}
                            embed={true} {/*payment embed in your app instead of a pop up*/}
                            customerFullName={this.state.customerFullName}
                            customerEmail={this.state.customerEmail}
                            customerMobileNumber={this.state.customerMobileNumber}
                            amount={this.state.amount}
                            apiKey={this.state.apiKey}
                            contractCode={this.state.contractCode}
                            reference={this.state.reference}
                            tag="button"{/*it can be button or a or input tag */}
                        />
                    </p>
                </div>
                <div>
                    <MonnifyConsumer {...componentProps} className="btn">
                        {({ initializePayment }) => (
                            <button onClick={() => initializePayment()}>Monnify Consumer Implementation</button>
                        )}
                    </MonnifyConsumer>
                </div>
            </>
        );
    }
}

export default MApp;