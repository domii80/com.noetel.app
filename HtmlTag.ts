export class HtmlTag {

  private tagName: string;

  public constructor(tagName: string) {
    this.tagName = tagName;
  }

  public getTagName(): string {
    return this.tagName;
  }

  public setTagName(tagName: string) {
    this.tagName = tagName;
  }

};
