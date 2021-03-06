import * as consts from './consts';
import axios from 'axios';

export const submitSign = (data) => {
  axios({
    method: 'post',
    url: 'https://calm-escarpment-44796.herokuapp.com/api/signatures',
    data: {
      SignatureOfGuest: data.name,
      MessageofGuest: data.text,
    },
  })
    .then((response) => {
      console.log(response, 'Signature added!');
    })
    .catch((err) => {
      console.log(err, 'Signature not added, try again');
    });
  return {
    type: consts.SUBMIT_DATA,
  };
};
