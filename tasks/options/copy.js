module.exports = {
	snippets: {
    	files: [{
    		expand: true,
      		cwd: 'snippets',
      		src: '**/*-snippet',
      		dest: process.env.HOME+'/<%= package.snippets.directories.mac_osx %>'
   		}]
  	}
};
