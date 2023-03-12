import { HtmlTag } from "./HtmlTag";
import { htmltemplate } from "./BasicHtml";

var asdf = new HtmlTag('asdf');
console.log(htmltemplate);
asdf.setTagName('p');
console.log(asdf.getTagName());

var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('I hear a scream!');
}

//Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('scream');
