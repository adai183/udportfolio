## Website Performance Optimization portfolio project

The challenge in this Udacity project was to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques I've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).


### Getting started

Some useful tips to help you get started:

1. Check out the repository
1. To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit localhost:8080
1. Download and install [ngrok](https://ngrok.com/) to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ngrok 8080
  ```

1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)

Profile, optimize, measure... and then lather, rinse, and repeat. Go


### My Optimizations


* optimize app/css/style.css with gulp uncss
* optimize images with gulp imagemin and other tools
* inline CSS in index.html in production code with gulp critical

* in app/view/js/main.js: 
	* generate 10 sliding pizzas and not 200.
	* make for loops more efficient by caching variables ouside the for-loop
	* cache variable top in line 504
	* use getElementById/getElementByClass and not querySelector because of better performance
	* Make for loop in changePizzaSizes function(line 454) more efficient by using variable l and chaching variables container, dx and newwidth outside loop
	* cache variable pizzasDiv (line 477) outside for-loop
	* cache variable l and phase outside for-loop(line 514)
	* stop creating pizzas after the for-loop reaches a row that is below the bottom of the user's screen. Calculate this using window.innerHeight in the Eventlistener on line 533.
	* cache variable elem outside for loop on line 537.
	* extract dx and newwidth from statement on line 457
* in app/view/pizza.html
	*inline css using gulp critical
* use viewport met tag in head for index.html
* async google anlytics script
* media atribute to css links
* add hardware accelerated CSS to views/css/style.css

###Note: The directories './dist' and './out' I use in my gulfile are not production directories. I only used the as build directories to check on the gulp processed files. The root directory is app/.


### My additional Resources 

* [gulp tutorial on css tricks](https://css-tricks.com/gulp-for-beginners/)

