export const ENVIRONMENT = {
	production: true,

	services: {
		jsontest: {
			apiUrls: {
				ip: 'http://ip.jsontest.com',
			},
		},
		showdatetime: {
			apiUrls: {
				time: 'http://time.jsontest.com'
			}
		},
		posts: {
			apiUrls: {
				new: 'https://jsonplaceholder.typicode.com/posts',
				substitute: 'https://hook.eu2.make.com/3b492xd11r5vqcrhg9p4vnqbic1xb7la'
			}
		}
	},
};
