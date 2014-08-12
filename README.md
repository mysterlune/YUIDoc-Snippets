YUIDoc Snippets
======================
A basic YUIDoc snippets for Sublime Text 2.

Installation
____________

This project ships with Grunt.js tasks that can install the snippets in the proper location on your
file system.

You'll need to be running some version of Node.js.

Once you clone the repo, drop into the main directory and do:

````
npm install && grunt
````

This will install required NPM modules and follow up by running a Grunt.js task to copy files
to the correct location on your (currently MacOS) file system.

Usage
-------

The default setting of "word_separators" includes an "@". In this setting, completion feature does not work well.
Add custom setting in your `Packages/User/Preferences.sublime-settings`

```
"word_separators": "./\\()\"'-:,.;<>~!#$%^&*|+=[]{}`~?"
```

Contribute
__________

__TODO__ For those lucky Windows folks out there, please feel free to contribute a `snippets.directories` entry that
corresponds with the proper location for snippets. You can add this in `package.json`.

__TODO__ Linux users, also. Please add your OS's proper directory in `package.json`.

Please submit a pull request.

License
----------
Copyright &copy; 2013 hayate26
Distributed under the [MIT License][mit].
 
[MIT]: http://www.opensource.org/licenses/mit-license.php
