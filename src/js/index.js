require('../css/style.css');
require('./server/api.js');
require('./client/client.js');

if(process.env.NODE_ENV!=='production') {
	if(module.hot) {
		module.hot.accept();
	}
}
