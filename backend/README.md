## How to Run the App

To run the app:
```bash
pip install flask
python app.py
```

## Testing the '/getnextmove' Endpoint

To test sending a request to the '/getnextmove' endpoint, open the console in your browser and paste the following JavaScript code:

```javascript
const url = 'http://127.0.0.1:5000/getnextmove';
const board = [
  [1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [1, 2, 0, 0, 0],
  [2, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];
const data = {'board': board}

const requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
};

fetch(url, requestOptions)
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((data) => {
    console.log(data); // You can do something with the response data here
  })
  .catch((error) => {
    console.error('There was a problem with the fetch operation:', error);
  });
```

This code snippet demonstrates how to send a POST request to the `/getnextmove` endpoint and handle the response in the browser console.
```