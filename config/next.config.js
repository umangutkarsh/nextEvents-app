const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = phase => {
	if (phase === PHASE_DEVELOPMENT_SERVER) {
		return {
			env: {
				mongodb_username: 'umangutkarsh_',
				mongodb_password: '32mvsNzFuokQ',
				mongodb_clustername: 'next-events',
				mongodb_database: 'events',
			},
		};
	}

	return {
		env: {
			mongodb_username: 'umangutkarsh_',
			mongodb_password: '32mvsNzFuokQ',
			mongodb_clustername: 'next-events',
			mongodb_database: 'events-prod',
		},
	};
};
