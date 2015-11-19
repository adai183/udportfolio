## Website Performance Optimization portfolio project

The challenge in this Udacity project was to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques I've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).


### My Optimizations


* optimize app/css/style.css with gulp uncss
* optimize images with gulp imagemin and other tools
* inline CSS in index.html in production code with gulp critical

* in app/view/js/main.js: 
	* generate 10 sliding pizzas and not 200.
	* make for loops more efficient by caching variables ouside the for-loop
	* cache variable top in line 504
	* use getElementById/getElementByClass and not querySelector because of better performance

* use <meta name=viewport content="width=device-width, initial-scale=1"> in head for index.html
* async google anlytics script
* media atribute to css links




### My additional Resources 

* [gulp tutorial on css tricks](https://css-tricks.com/gulp-for-beginners/)

