jquery.krazykolor.js
====================
This is a cute little jQuery-Plugin for colorize characters within html elements or within a specified target selector.

Requirements
------------
* jQuery: at least version 1.8.2

Setup
-----
1. clone this repo
2. insert the **jQuery library** and the **jquery.krazykolor.min.js** at the end of the `<body>`-Tag</code> in your html file
```html
<html>
  <head>
    ...
  </head>
    <body>
      <h1>Lorem ipsum dolor sit amet</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt autem totam eveniet 
      molestias omnis amet repellat laborum qui quos voluptatum obcaecati voluptate possimus fugiat</p>

      <script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
      <script src="jquery.krazykolor.min.js"></script>
      
    </body>
</html>
```
3. have fun with the Plugin
  ``` $('h1').krazyKolor(); ```
  
Usage
-----
* Specify the target with the selector
```js
$('h1').krazyKolor();     // The h1-Element becomes colored
```

* Use your custom colors
```js
  $('p').krazyKolor({
      colors: [
        '#123456',
        '#555',
        'green',
        '#ff00dd'
      ]
 });
```

* Pass the target with the options
```html
 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <span class="target">Incidunt autem totam</span> 
 eveniet molestias omnis amet repellat laborum qui quos voluptatum obcaecati voluptate possimus fugiat</p>
```
```js
 $('p').krazyKolor({
      target: '.target'    // only the selector '.target' will be colored
 });
```
