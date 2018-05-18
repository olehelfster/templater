function HtmlTagsBuilder() {

  this.tagsObj = {};

}


HtmlTagsBuilder.prototype.run = function () {

  for(let customTag in this.tagsObj ){

    const customTags = Array.from(document.querySelectorAll(customTag));

    if(customTags.length){
      customTags[0].outerHTML = this.tagsObj[customTag];
    }else {
      console.log(customTag + " " +  'no customTag in DOM');
    }
  }

};

HtmlTagsBuilder.prototype.addTag = function (customTag, template) {

  this.tagsObj[customTag] = template;

};


const Templater = new HtmlTagsBuilder();

// Templater.addTag('bootstrap_button', '<button class="btn btn-default" type="submit">' + "Some text" + "</button>");
// Templater.addTag('bootstrap_link', '<a class="btn btn-default" href="#" role="button">' + "Some Another Text" + "</a>");
// Templater.run();

