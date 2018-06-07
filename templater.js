;(function ($) {

  const pluginName = "templater";

  class Plugin {
    constructor(element, options) {

      this.element = $(element);
      this.config = $.extend({}, $.fn.templater.defaults, options);

      const tagsName = [];
      const tags = this.config.tags;
      
      for(let tag in tags){
        tagsName.push(tag);
      }

      this.run(tags);

      $(tagsName).each((i, tag) => {
        if(this.element.find(tag)){
          this.run(tags);
        }
      });
    }

    render(template, element) {
      const regexp = /{{(.*?)}}/g;
      const $element = $(element);

      return template.replace(regexp, function (match, attr) {
        if (attr === "html") {
          return $element.html();
        }
        return $element.attr(attr);
      });
    }

    run(obj) {
      for (let tag in obj) {
        const element = this.element.find(tag);
        const template = this.render(obj[tag], element);
        $(element).replaceWith(template);
      }
    }
  }


  $.fn.templater = function (options) {
    return this.each(function () {
      if (!$.data(this, `plugin_${pluginName}`)) {
        $.data(this, `plugin_${pluginName}`,
          new Plugin(this, options));
      }
    });
  };

  $.fn.templater.defaults = {
    tags: {}
  }

})(jQuery);



