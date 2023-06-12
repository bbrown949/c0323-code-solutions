const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=324&apikey=ZFm9uGxzlS7CTPfB8oSgdagA9F3BCNt8');
xhr.responseType = 'json';
xhr.addEventListener('load', function () {
  console.log('xhr response', xhr.response);
});
xhr.send();
