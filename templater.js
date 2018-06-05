(function ($) {
  $.fn.templater = function (options) {
    const tags = options.tags;

    if (!tags) {
      return;
    }

    const regexp = /{{(.*?)}}/g;
    const $this = $(this);

    function _render(template, element) {

      const $element = $(element);
      function precedeTemplate(match, attr) {
        if (attr === 'html') {
          if($element.html() === ""){
            return $element.html('Some Text')[0].innerHTML
          }
          return $element.html();
        } else {
          return $element.attr(attr);
        }
      }

      return template.replace(regexp, precedeTemplate);
    }

    for (let tag in tags) {
      const elements = $this.find(tag);
      
      $(elements).each((i, element) => {
        element.outerHTML = _render(tags[tag], element);
      });

    }
    return $this.each( () => {

    });
  };
})(jQuery);



