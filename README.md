The TMB API (Code samples)
==========================

This repository contains the project used to create the code samples for [The TMB API](https://developer.tmb.cat/).

Demo
----

You see code running at github pages: []()


Working with the project
-------------------

The project is based on Yeoman webapp generator with some custom modifications. To keep the code simple I have not made use of any framework (like AngularJs, Backbone or similar) neither used any template engine.

The main modification respect the Yeoman webapp generator is the addition of the [`grunt-includes`](https://github.com/vanetix/grunt-includes) plugin, which allows files inclusion and this way avoid repeating some pieces of code, like the header, the footer, etc on each example.

`index.html` and all the `chapter*.html` files must be edited withint the `app_tpl` folder (that acts as the original templates). The `grunt includes` tasks is responsible to *compile* the template files and generate the right html files in the `app` folder. Any other content, like images or data, must be edited directly in the `app` folder.
The `Gruntfile.json` has modified so when you are developing (using the `grunt serve` task) or you create a distribution (with `grunt build`) the templates are automatically compiled and updated.

<hr/>

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Code samples for The TMB API</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="http://www.tmb.cat/" property="cc:attributionName" rel="cc:attributionURL">Transports Metropolitans de Barcelona</a> is derivated from <span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Code samples for The Book of OpenLayers3</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/acanimal/thebookofopenlayers3" property="cc:attributionName" rel="cc:attributionURL">Antonio Santiago</a> licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.