# WAE - Discord Widget v2

**Widget url:** https://waeverything.github.io/streamkit/widgets/discord2

<br>

## Using widget with OBS
- Add new browser source
- Set resolution to be the same as your stream (eg. 1920x1080)
- Use same FPS as your stream (eg. 60fps)

***

## How to use properties (url parameters)
Here is a example url with multiple properties: https://waeverything.github.io/streamkit/widgets/discord2?position=right&size=20

You can seperate properties using the `&` character, remember to include the `?` character in the url before the first parameter.

***

## Properties

property | value(s) | description
--- | --- | ---
position | right | Puts the widget to the top right corner of the screen
size | 0-100 | Allows changing the size of the widget (default 16)
shadow | false | Disable drop shadow if that's not for you

<br>

You can find deeper explanations and examples on how each property functions below.

<br>

### Widget position
The widget will default to the upper left corner of the window. If you want it to be on the right side just add `?position=right` to the end of the url like shown here.

https://waeverything.github.io/streamkit/widgets/discord2?position=right

<br>

### Widget size
You can change the widget size by adding `?size=16` to the end of the url. Default font size is 16.

<br>

### Shadow
If you want for any reason to disable widget's drop shadow you can simply set the shadow property to false like so: `?shadow=false`