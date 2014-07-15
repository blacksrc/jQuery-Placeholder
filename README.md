jQuery Placeholder
===========

Simple jQuery plugin to support HTML5 placeholder attribute.


### How To Do:
First download `jquery.placeholder.js` and `jquery.js` then include the files to your page.
```html
  <script src="jquery.js"></script>;
  <script src="jquery.placeholder.js"></script>;
```
Then use it like this:
```javascript
  $("input[type='text']").placeholder(); // Select all text inputs
  $("input, textarea").placeholder(); // Select all inputs and textarea
```
If the browser supports HTML5 placeholder attribute, then the plugin doesn't do anything. But, if the browser does not support it. The plugin will do its job.

If you want to force any old and new browsers to use the plugin you can set `force` as `true`. Just like this:

```javascript
  $("input[type='text']").placeholder({ force: true }); // Select all text inputs and force all browsers
  $("input, textarea").placeholder({ force: true }); // Select all inputs and textarea and force all browsers
```
By defult `force` is `false`.
