require('../css/style.css');
require('./server/api.js');
require('./client/client.js');

if(module.hot) {
	module.hot.accept();
}