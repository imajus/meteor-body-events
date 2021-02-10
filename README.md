Meteor Body Events
===================

Template.body.events working

Origin
------------
This package is exactly the same as `gwendall:body-events` except that its dependencies are updated for Meteor 2.0.
Forked from `micktaiwan/meteor-body-events` which in turn was forked from `gwendall/meteor-body-events`.

Installation
------------

``` sh
meteor add imajus:body-events
```

Methods
-------


``` javascript
Template.body.events({
  "click .btn": function(e, data, tpl) {
    // e -> jquery event
    // data -> Blaze data context of the DOM element triggering the event handler
    // tpl -> the parent template instance for the target element
  }
})
```
