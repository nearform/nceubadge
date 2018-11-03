---
title: "On-Screen Menu"
weight: 6
date: 2017-10-28T10:29:15+01:00
draft: false
---
### Challenge 6

If you implement an on-screen menu with up-down-left-right-select then you could have lots of your challenges on the badge at the same time and demo them to people. Have a look at the [github repo](https://github.com/nearform/nceubadge/) for the sample code. 

#### Add to the existing menu 
You can also try the following: 

* Turn off 'Reset Before Send' in the Web IDE options
* Write your code a bit like this:

```javascript
Badge.apps["My Foobar"] = function() {
  Badge.reset();
  // my stuff
  // when done, call Badge.menu
  // eg. setWatch(Badge.menu, BTNB, { repeat: 1, debounce: 50, edge: "rising" });
};
```

* Upload or copy/paste that code 
* It will appear in the apps list on the badge's menu
* You can't save, but it'll persist until you reset the badge

