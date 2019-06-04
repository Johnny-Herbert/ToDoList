const httpGet = (url, callback) => {
    const request = new XMLHttpRequest();
    request.open('GET', url, true);
  
    request.onload = () => {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        callback(request.responseText);
      } else {
        // We reached our target server, but it returned an error
        console.log('erro 1');
      }
    };
  
    request.onerror = () => {
      // There was a connection error of some sort
      console.log('erro 2');
    };
  
    request.send();
}

setInterval(() => {
    httpGet('/itens', (res) => {
      document.querySelector('#itens').innerHTML = '';
      const msgs = JSON.parse(res);
  
      Object.keys(msgs).reverse().forEach(key => {
        document.querySelector('#itens').innerHTML += `
          <div>
            <h3 style="margin-bottom: 2px">${msgs[key].item}</h3>
            <hr>
          </div>
        `;
      });
    });
}, 100);