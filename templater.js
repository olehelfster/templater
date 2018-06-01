(function ( $ ) {
  $.fn.templater = function () {
    const tags = {};
    const regexp = /{{(.*?)}}/g;

  };
})( jQuery );
const Templater = (function () {

  const tags = {};
  const regexp = /{{(.*?)}}/g;

  function _render( template, element ) {
    function precedeTemplate(match, attr) {
      if( attr === 'html') {
        return element.innerHTML;
      } else {
        return element.getAttribute(attr);
      }
    }
    return template.replace(regexp, precedeTemplate);
  }

  return {
    addTag: function (tag, template) {
      tags[tag] = template;
    },
    run: function () {
      for( let tag in tags ){

        const elements = Array.from(document.getElementsByTagName( tag ));
        elements.forEach( element => {
          element.outerHTML = _render(tags[tag], element);

        })
      }
    }
  }

}());


