import { HtmlTag } from "./HtmlTag";
import { htmltemplate } from "./BasicHtml";
import { runServer } from './Server';
import { eventHandling } from "./Eventhandling";

var tag = new HtmlTag('');
console.log(htmltemplate);
tag.setTagName('div');
console.log(tag.getTagName());
const s: any = {};
s.x = 10;
console.log('Obj: ' + s.x );


eventHandling();

//  runServer();

