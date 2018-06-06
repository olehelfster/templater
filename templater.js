;(function ($) {

  const pluginName = "templater";

  class Plugin {
    constructor(element, options) {

      this.element = $(element);
      this.config = $.extend({}, $.fn.templater.defaults, options);


      for(let key in this.config.tags){
        console.log(this.element.find(key));
        console.log(key);
        if (this.element.find(key)) {
          this.run(this.config.tags);
        }
      }

      // console.log(this.config.tags);
      // this.run(this.config.tags);
      // console.log(this.config.tags);
      // this.run(this.config.tags);
      // console.log(this.config.tags);
      // this.run(this.config.tags);
      // console.log(this.config.tags);

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
        let element = $(this.element).find(tag)[0];
        let template = this.render(obj[tag], element);

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



