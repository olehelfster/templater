const Templater = (function () {

  const tags = {};
  // const reHtml = /({{[html]*}})/g;


  // function getHtmlTag(obj) {
  //   const htmlElement = [];
  //
  //   for(let key in obj){
  //     htmlElement.push(Array.from(document.querySelectorAll( key )));
  //   }
  //   return htmlElement;
  // }

  /*
  Добавить метод (или функцию, как угодно,
    главное чтобы этот функционал не находился внутри метода run,
    так как это существенно усложнит его) render к объекту Templater,
    который принимает два параметра и возвращает отрендеренный html:
      template - сюда будут передаваться шаблоны, которые мы передавали в метод addTag
      element - сюда будет передаваться объект кастомного элемента DOM (например bootstrap_button (не строка, а именно объект))

  Переписать метод run таким образом, чтобы он рендерил шаблон (с помощью метода render)
  */
  function render( template, element ) {

    console.log(typeof template);
    console.log(typeof element);

    // console.log(keys + ' ' + values);

    // const processedTemplate = template.map(function ( html) {
    //   // console.log(html + element);
    //   return console.log(element);
    // })



    // for(let i in template) {
    //
    //   console.log(i.toUpperCase());
    //
    //
    // }

    // return processedTemplate;

  }

  return {
    addTag: function (tag, template) {
      tags[tag] = template;
    },
    run: function () {

      const element = Array.from(document.querySelectorAll( Object.keys(tags) ));
      const template = Object.values(tags);

      render( template, element );
    }
  }

}());


