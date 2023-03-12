"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HtmlTag_1 = require("./HtmlTag");
const BasicHtml_1 = require("./BasicHtml");
var asdf = new HtmlTag_1.HtmlTag('asdf');
console.log(BasicHtml_1.htmltemplate);
asdf.setTagName('div');
asdf.setTagName('p');
console.log(asdf.getTagName());
