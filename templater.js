;(function ($) {

  const pluginName = "templater";

  class Plugin {
    constructor(element, options) {
      this.element = $(element);
      this.config = $.extend({}, $.fn.templater.defaults, options);

      this.init();
    }
    render(template, element){
      const regexp = /{{(.*?)}}/g;
      const $element = $(element);

      return template.replace(regexp, function (match, attr) {
        if (attr === "html") {
          return $element.html();
        }
        return $element.attr(attr);
      });
    }

    init() {

      for (let tag in this.config.tags) {



        $(this.element.find(tag)).each((i, element) => {
          const template = this.render(this.config.tags[tag], element);

         this.element.find(tag).replaceWith(template);
        });
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



