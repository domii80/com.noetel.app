import { HtmlTag } from "./HtmlTag";
import { htmltemplate } from "./BasicHtml";
import { runServer } from './Server';

var tag = new HtmlTag('');
console.log(htmltemplate);
tag.setTagName('div');
console.log(tag.getTagName());


runServer();

