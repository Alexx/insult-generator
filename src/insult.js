export class GetInsult {

  makeInsult() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = process.env.API_KEY;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    })
  }
}
