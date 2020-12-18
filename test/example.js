const chai = require('chai');
const assert = chai.assert;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const server = require('../server');

//const example = require('../api/example/routes.js');

describe('EXAMPLE TEST', () => {

    /**
     * This is just an example of how mocha tests work. It is definitely not a valid test nor does it directly correspond to the /example endpoint.
     * It simply serves as an overview of different parameters to set when using chai requests.
     */
    describe('GET api/events', () => {
        it('It should return a list of queried events', (done) =>{
            chai.request('http://localhost:3000/') // create request to the server 
                .get('api/example') // send a get request to endpoint /events
                //.set('Authorisation', 'Bearer token') // add given key, value pair as a header
                //.send({name: 'eventName', lbg: 'organisingLBG', startDate: '01-01-2020'}) // specify the body of request, default type is JSON
                //.query({pageSize: 20, pageNumber: 7}) // /add url parameters -> /events?pageSize=20&pageNumber=7
                //.attach('imageField', fs.readFileSync('avatar.png'), 'avatar.png') // attach a file with the request
                .end((err, res) => {
                    // These are just very simple assertions, you should write much more extensive tests
                    // (e.g., query how long the response is, whether all the query parameters are satisfied, etc.)
                    assert.equal(err, null);
                    assert.equal(res.status, 200);
                    done();
                });
        });
    });
});


