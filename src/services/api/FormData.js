import axios from 'axios';

axios.defaults.baseURL = 'https://2j41w5iw5c.execute-api.eu-west-2.amazonaws.com'

export default {
    getValue() {
        fetch('https://2j41w5iw5c.execute-api.eu-west-2.amazonaws.com/Dev/formsumbission')
        .then(
            function(response) {
              if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                  response.status);
                return;
              }
        
              // Examine the text in the response
              response.json().then(function(data) {
                console.log(data.Items[0].content.budget.valueCreated.actualSpend);
                return '2000';
              });
            }
          )
          .catch(function(err) {
            console.log('Fetch Error :-S', err);
          });
    }
}