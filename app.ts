import { HtmlTag } from "./HtmlTag";
import { htmltemplate } from "./BasicHtml";

var asdf = new HtmlTag('asdf');
console.log(htmltemplate);
asdf.setTagName('p');
console.log(asdf.getTagName());

