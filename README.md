The TMB API Code Samples
========================

This repository contains the project used to create the code samples for [The TMB API](https://developer.tmb.cat/).

It is based on *The Book Of Openlayers 3 Code Samples repo* by @acanimal: https://github.com/acanimal/thebookofopenlayers3

Disclaimer
----------

TMB API is **_under active development_**.
For more information, visit http://www.tmb.cat/en/dades-obertes.

Demo
----

You can see the code samples running at https://tmb-barcelona.github.io/TMB-API-samples/


How to add a new example
========================

Preparing the environment
-------------------------

We assume you have installed all the needed software:

1. Git [Installing Git](http://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
2. nodejs [How to install nodejs](http://howtonode.org/how-to-install-nodejs)

First of all clone the repo:

    git clone git@github.com:TMB-Barcelona/TMB-API-samples.git
    cd TMB-API-samples

Install npm packages:

    npm install

Install JavaScript dependencies:

    bower install

Now you should have new `node_modules` and `bower_components` directories with all dependencies.


Adding your API Keys
--------------------

> WARNING!
> THESE STEPS ARE MANDATORY TO RUN THE SAMPLES, DON'T MISS THEM!

Go to the [TMB Developer Portal](https://developer.tmb.cat/), sign up and create a New Public API Application (follow the instructions in the Portal). Take note of your app_id and app_key.

You **must create a JSON file named ```pass.json```** in the root folder and copy this content:

```javascript
{
  "github": {
    "app_key": "d9905ec9b70bc6aca11e39be3cd0d856",
    "app_id": "df5c473f"
  },
  "local": {
    "app_key": "your app key here",
    "app_id": "your app id here"
  }
}
```

Replace "your app key here" and "your app id here" with your newly created app_key and app_id.


Working with the project
------------------------

To keep the code simple we haven't used any frameworks (like AngularJs, Backbone or similar) neither used any template engine. Just OpenLayers and Bootstrap.

Some tasks are automated with grunt.

* The [`grunt-includes`](https://github.com/vanetix/grunt-includes) plugin allows file inclusion to avoid repeating some pieces of code, like header or footer, on each example.
   * `index.html` and all the `api_*.html` files must be edited withint the `app_tpl` folder (that acts as the original templates). The `grunt includes` tasks is responsible to *compile* the template files and generate the right html files in the `app` folder.
   * Any other content, like images or data, must be edited directly in the `app` folder.

* The `grunt build` and `grunt serve` tasks will recompile the templates as well. The later will launch a local HTTP server with autoreload.


Writing your sample
-------------------

Create a separate branch:

    git checkout -b feature/a_cool_feature_descriptive_title

Add a new API sample file from the boilerplate:

    cp app_tpl/api_00_boilerplate_file.html app_tpl/<your_sample_file_name>.html

Edit the new file using your favourite IDE.

You can run the `grunt serve` task in parallel to see the changes in the browser (automatic refresh). Navigate to **localhost:9009** in your browser (you can modify this port in `Gruntfile.js` file).


Creating a sample thumbnail
---------------------------

You can create a thumbnail for your sample. Get a nice 480px wide x 360px high image screenshot, and save it to the `app/images` folder with the same name of the main sample file: `<your_sample_file_name>.png`.


Adding new sample to the main page
----------------------------------

The `samples.json` contains the needed data to build the main page. Examples are grouped into sections. Add yours in an existing or new section.
Needed fieds are title, decription, url and thumbnail:

```javascript
[
	{
		"title": "First Section title",
		"samples": [
			{
				"title": "Sample Title",
				"description": "Sample Description",
				"url": "api_0*_a_sample_descriptive_title.html",
				"thumbnail": "api_0*_a_sample_descriptive_title.png"
			}
		]
	}, {
		"title": "Another Section",
		"samples": [
			{
				"title": "Other Title",
				"description": "Other Description",
				"url": "api_0*_other_descriptive_title.html",
				"thumbnail": "api_0*_other_descriptive_title.png"
			}			
		]
	}
]
```

Committing your changes
-----------------------

All your changes must be commited in your separate branch `feature/a_cool_feature_descriptive_title`.
Once finished, merge the sample to the main branch (*develop* in our case) and, optionally, delete your local feature branch:

    git checkout develop
    git merge --no-ff feature/a_cool_feature_descriptive_title

    git branch -d feature/a_cool_feature_descriptive_title
    git push origin develop


Updating the demo
-----------------

The demo pages are published from the gh-pages branch. To automagically update the demo, use the `grunt gh-pages` plugin:

    grunt ghpages

This plugin builds the project in a hidden directory `<ROOT_DIRECTORY>/.grunt/grunt-gh-pages/gh-pages/src`. The built contents are then automatically pushed to the gh-pages branch.


Generating Gists
----------------

Some of the sample file names end with "_gist.html". Those samples are simple enough so they can be converted to an plain simple HTML page with no other dependencies.

The `grunt gist` task will generate the plain "gist" example files inside the `gist` directory.

    grunt gist

<hr/>

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Code samples for The TMB API</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="http://www.tmb.cat/" property="cc:attributionName" rel="cc:attributionURL">Transports Metropolitans de Barcelona</a> is derivated from <span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Code samples for The Book of OpenLayers3</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/acanimal/thebookofopenlayers3" property="cc:attributionName" rel="cc:attributionURL">Antonio Santiago</a> licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.
