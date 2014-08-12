YUIDoc Snippets
======================
A basic YUIDoc snippets for Sublime Text 2.

##Installation

This project ships with Grunt.js tasks that can install the snippets in the proper location on your
file system.

You'll need to be running some version of Node.js.

Once you clone the repo, drop into the main directory and do:

````
npm install && grunt
````

This will install required NPM modules and follow up by running a Grunt.js task to copy files
to the correct location on your (currently MacOS) file system.

##Usage
The keys available for inserting snippets are:

`dproject`

````
// ===================================
// Project:   PROJECT_NAME
// Copyright: ©YEAR COMPANY
// ===================================
````

`dclass`

````
/**
[DESCRIPTION]

@uses [REFERENCED_PACKAGES]
@class [CLASS_NAME]
@extends [BASE_CLASS_NAME]
@constructor
*/
````

`dprop`

````
/**
[DESCRIPTION]

@private
@for [CLASS_NAME]
@property [PROPERTY_NAME]
@type [DATA_TYPE]
@default [DEFAULT_VALUE]
*/
````

`dmeth`

````
/**
[DESCRIPTION]

@private
@for [CLASS_NAME]
@method [METHOD_NAME]
@param {[TYPE]} [NAME] [DESCRIPTION]
@return {[TYPE]} [DESCRIPTION]
*/
````
Of course, YUIDoc supports a number of other comment block types. Please feel free to contribute a pull request with additions.

The default setting of "word_separators" includes an "@". In this setting, completion feature does not work well.
Add custom setting in your `Packages/User/Preferences.sublime-settings`

```
"word_separators": "./\\()\"'-:,.;<>~!#$%^&*|+=[]{}`~?"
```

##Contribute

__TODO__ For those lucky Windows folks out there, please feel free to contribute a `snippets.directories` entry that
corresponds with the proper location for snippets. You can add this in `package.json`.

__TODO__ Linux users, also. Please add your OS's proper directory in `package.json`.

Please submit a pull request.

##License

Copyright &copy; 2013 hayate26
Distributed under the [MIT License][mit].
 
[MIT]: http://www.opensource.org/licenses/mit-license.php
