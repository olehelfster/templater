function HtmlTagsBuilder() {

  this.tagsObj = {};
  this.tagsObjKey = [];
  this.tagsObjValue = '';
}


HtmlTagsBuilder.prototype.run = function () {
  
    if(this.tagsObjKey.length){
      this.tagsObjKey[0].outerHTML = this.tagsObjValue;
    }else {
      console.log( 'no customTag in DOM');
    }
};

HtmlTagsBuilder.prototype.addTag = function (customTag, template) {

  this.tagsObj[customTag] = template;

  this.render();
};

HtmlTagsBuilder.prototype.render = function () {

  const reHtml = /({{[html]*}})/g,
        reClass = /({{[class]*}})/g,
        reType = /({{[type]*}})/g;

  for(let i in this.tagsObj ){

    this.tagsObjKey = Array.from(document.querySelectorAll(i));

    this.tagsObjValue = this.tagsObj[i];

    for(let j = 0; j < this.tagsObjKey.length; j++){
      const htmlText = this.tagsObjKey[j].innerHTML;
      const attrType = this.tagsObjKey[j].attributes.type.value;
      const attrClass = this.tagsObjKey[j].attributes.class.value;

      if( this.tagsObjValue.includes('{{html}}') && htmlText !== 'some text' ){
        this.tagsObjValue = this.tagsObjValue.replace(reHtml, htmlText);
      } else {
        this.tagsObjValue = this.tagsObjValue.replace(reHtml, 'some text');
      }

      if( this.tagsObjValue.includes('{{class}}') ){
        this.tagsObjValue = this.tagsObjValue.replace(reClass, attrClass);
      }

      if( this.tagsObjValue.includes('{{type}}') ) {
        this.tagsObjValue = this.tagsObjValue.replace(reType, attrType);
      }
    }

  }
};

const Templater = new HtmlTagsBuilder();

