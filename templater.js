;(function ($) {

  const pluginName = "templater",
    defaults = {
      tags: {}
    };

  function Plugin(element, options) {
    this.element = $(element);
    this.config = $.extend({}, defaults, options);

    this.init();
  }

  Plugin.prototype.init = function () {
    const regexp = /{{(.*?)}}/g;

    function _render(template, element) {

      const $element = $(element);

      function precedeTemplate(match, attr) {
        if (attr === 'html') {
          if ($element.html() === "") {
            return $element.html('Some Text')[0].innerHTML
          }
          return $element.html();
        } else {
          return $element.attr(attr);
        }
      }

      return template.replace(regexp, precedeTemplate);
    }

    for (let tag in this.config.tags) {
      $(this.element.find(tag)).each((i, element) => {

        const template = _render(this.config.tags[tag], element);

        this.element.find(tag).replaceWith(template);
      });
    }
  };

  $.fn.templater = function (options) {
    return this.each(function () {
      if (!$.data(this, "plugin_" + pluginName)) {
        $.data(this, "plugin_" + pluginName,
          new Plugin(this, options));
      }
    });
  }

})(jQuery);



