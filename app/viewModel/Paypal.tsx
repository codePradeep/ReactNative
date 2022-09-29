import React, {Component, useEffect, useState} from 'react';
import {View, ActivityIndicator} from 'react-native';
import axios from 'axios';
import {WebView} from 'react-native-webview';
import qs from 'qs';

const PaypalViewModel = () => {
  const [state, setState] = useState({
    accessToken: null,
    approvalUrl: null,
    paymentId: null,
  });

  let currency = '100 USD';
  currency.replace(' USD', '');
  const dataDetail = {
    intent: 'sale',
    payer: {
      payment_method: 'paypal',
    },
    transactions: [
      {
        amount: {
          total: "2",
          currency: 'THB',
          details: {
            subtotal: "2",
            tax: '0',
            shipping: '0',
            handling_fee: '0',
            shipping_discount: '0',
            insurance: '0',
          },
        },
      },
    ],
    redirect_urls: {
      return_url: 'https://example.com',
      cancel_url: 'https://example.com',
    },
  };
  const getApprovedUrl=async(accessToken:string)=>{
    console.log("start getting api call",state.accessToken)
           const response=  await axios.post('https://api.sandbox.paypal.com/v1/payments/payment', dataDetail,
              {
                  headers: {
                      'Content-Type': 'application/json',
                   
                    Authorization:`Bearer ${accessToken}`
                  }
              }
          )
          console.log("=====>>>>>>",response)
          // if(response.status==201){}
            console.log("data. =====>>>>>>",response.data)
              const { id, links } = response.data
                  const approvalUrl = links.find((data :any)=> data.rel == "approval_url")

                  setState({...state,
                      paymentId: id,
                      approvalUrl: approvalUrl.href
                  })


  }

  const apiCall = async () => {
    console.log('api call start');
    const res = await axios.post(
      'https://api.sandbox.paypal.com/v1/oauth2/token',
      qs.stringify({grant_type: 'client_credentials'}),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization:
            'Basic QVh3b0RCYV91Uk9EYU9HQ2ZJc3VTTllBcEF3R0UxVTZfTzN5NWVkU251WlRadHBMQlVaUUFMenZGZTRheDMwd0xDaEVEaDdjUXg3Y1JrbjA6RUVaczBpbmtqQ2VoWVhkNGZtRzRIWW5YeE52bUVfdUhkbVdaXzM1dXpfUGVpUDdab1JyU3BMUmduU195U1Rob2RXS19ZMElETVQzclJHdzg=',
        },
      },
    );
    console.log(res.status);
    console.log(res.data);
    if (res.status == 200) {
      setState({...state, accessToken: res.data.access_token});
      getApprovedUrl(res.data.access_token)
    }
  };

  useEffect(() => {
    apiCall();
   
  }, []);


  const onNavigationStateChange = (webViewState: any) => {
    if (webViewState.url.includes('https://example.com/')) {
      setState({...state, approvalUrl: null});

      const {PayerID, paymentId} = webViewState.url;

      axios
        .post(
          `https://api.sandbox.paypal.com/v1/payments/payment/${paymentId}/execute`,
          {payer_id: PayerID},
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${state.accessToken}`,
            },
          },
        )
        .then(response => {
          console.log(response);
        })
        .catch(err => {
          console.log({...err});
        });
    }
  };

  const {approvalUrl} = state;
  return (
    <View style={{flex: 1}}>
      {approvalUrl ? (
        <WebView
          style={{height: 400, width: 300,marginLeft:40}}
          source={{uri: approvalUrl}}
          onNavigationStateChange={onNavigationStateChange}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          startInLoadingState={false}
        />
      ) : (
        <ActivityIndicator />
      )}
    </View>
  );
};

export default PaypalViewModel;
