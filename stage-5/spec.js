describe("Stage 5", function() {
    it("must create method `templater` for `jQuery.fn`", function() {
        (typeof jQuery.fn.templater).should.equals('function');
    });

    it("must replace element with tag `panel` to element with tag 'div', class 'panel', and innerHtml 'Some outer content' ", function() {
        $(document).templater({
            tags: {
              'panel': '<div class="panel"><div class="panel-heading">{{heading}}</div><div class="panel-body">{{html}}</div></div>'
            }
        });
        $('.panel').length.should.equals(2);
        var replaced = $(".panel");
        replaced.length.should.equals(2, 'Element with `div` tag and class "panel" was not created. Amount of `div` elements with class "panel" in DOM');
        replaced.attr('class').should.equals('panel', 'Element with `panel` tag has wrong class. It has class');
        replaced.find(replaced).length.should.equals(1, "Inner `panel` tag element was not created");
    });

});