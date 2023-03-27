/* CHALLENGE: CALL THE PLATZI API */

//calling to this resource
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
//calling to the API
const API = 'https://api.escuelajs.co/api/v1';

function fecthData(urlApi, callback) {
    let xhttp = new XMLHttpRequest(); //controls the workflow

    xhttp.open('GET', urlApi, true); //opens the connection
    
    //we can listen to the different states of the request
    xhttp.onreadystatechange = function(event) {
        if(xhttp.readyState === 4)
        {
            /*
                0 - not initialized
                1 - loading
                2 - sent executed
                3 - working
                4 - completed
            */
            if(xhttp.status === 200)
            {
                callback(null, JSON.parse(xhttp.responseText));
            }
            else
            {
                const error = new Error('Error' + urlApi);
                return callback(error, null);
            }
        } 
    }
    xhttp.send();
}

fecthData(`${API}/products`, function (error1, data1) {
    if(error1) return console.error(error1);
    fecthData(`${API}/products/${data1[0].id}`, function (error2, data2) {
        if(error2) return console.error(error2);
        fecthData(`${API}/categories/${data2?.category?.id}`, function (error3, data3) {
            if(error3) return console.error(error3);
            console.log('data1[0]:');
            console.log(data1[0]);
            console.log('data2 title:');
            console.log(data2.title);
            console.log('data3 name:');
            console.log(data3.name);
        });
    });
});