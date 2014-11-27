The TMB API (Code samples)
==========================

This repository contains the project used to create the code samples for [The TMB API](https://developer.tmb.cat/).

Demo
----

You see code running at github pages: [TMB-API Code Samples](http://tmb-barcelona.github.io/TMB-API-samples/)


Working with the project
------------------------

The project is based on Yeoman webapp generator with some custom modifications. To keep the code simple I have not made use of any framework (like AngularJs, Backbone or similar) neither used any template engine.

The main modification respect the Yeoman webapp generator is the addition of the [`grunt-includes`](https://github.com/vanetix/grunt-includes) plugin, which allows files inclusion and this way avoid repeating some pieces of code, like the header, the footer, etc on each example.

`index.html` and all the `api_*.html` files must be edited withint the `app_tpl` folder (that acts as the original templates). The `grunt includes` tasks is responsible to *compile* the template files and generate the right html files in the `app` folder. Any other content, like images or data, must be edited directly in the `app` folder.
The `Gruntfile.json` has modified so when you are developing (using the `grunt serve` task) or you create a distribution (with `grunt build`) the templates are automatically compiled and updated.

# How to add your sample
## Preparing the environment

We assume you have installed all necessary software to develop:

1. Git [Installing Git](http://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
2. nodejs [How to install nodejs](http://howtonode.org/how-to-install-nodejs)

First of all clone this repo:

`git clone git@github.com:TMB-Barcelona/TMB-API-samples.git`

`cd TMB-API-samples`

Install npm packages:

`npm install`

Now you should have a `node_modules` directory.

Install JavaScript dependencies:

`bower install`

This creates a `bower_components` directory with all JavaScript libraries.

Now you are preparing to insert your samples!.

## Add your samples

Create your `feature` branch:

`git checkout -b feature/a_cool_feature_descriptive_title`

Add a new API sample file from the boilerplate:

`cp app_tpl/api_00_boilerplate_file.html app_tpl/api_0*_a_sample_descriptive_title.html`

Write your code (use your favourite IDE) in the new file `app_tpl/api_0*_a_sample_descriptive_title.html`

You can use `grunt serve` task to load dinamically changes in the browser.

`grunt serve`

Navigate to **localhost:9009** in your browser (you can modify this port in `Gruntfile.js` file).

## Create thumbnails to samples

You can create a thumbnail for your sample. Get your favorite image for the sample and save it in the `app/images` folder with the same name of the sample file e.g.: **api_0*_a_sample_descriptive_title.png**

## Modify `samples.json` file to load the new sample

`samples.json` file manages the samples to be loaded.

```javascript
[
	{
		"title": "Chapter title",
		"samples": [
			{
				"title": "Sample Title",
				"description": "Sample Description",
				"url": "api_0*_a_sample_descriptive_title.html",
				"thumbnail": "api_0*_a_sample_descriptive_title.png"
			}
		]
	}, {
		"title": "Other Chapter",
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

## Commit and Push your changes

All your changes must be realized in your branch `feature/a_cool_feature_descriptive_title`. After finish this, you must merge it to default branch (develop in this case).


```bash
git checkout develop

git merge --no-ff feature/a_cool_feature_descriptive_title

git branch -d feature/a_cool_feature_descriptive_title

git push origin develop
```

<hr/>

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Code samples for The TMB API</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="http://www.tmb.cat/" property="cc:attributionName" rel="cc:attributionURL">Transports Metropolitans de Barcelona</a> is derivated from <span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Code samples for The Book of OpenLayers3</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="https://github.com/acanimal/thebookofopenlayers3" property="cc:attributionName" rel="cc:attributionURL">Antonio Santiago</a> licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.