(function(){
  var scrollPositions = {};

  addEventListener("turbo:before-render", function(){
    document.querySelectorAll("[data-turbo-permanent]").forEach(function(element){ 
      scrollPositions[element.id] = element.scrollTop;
    });
  });

  addEventListener("turbo:render", function(){
    document.querySelectorAll("[data-turbo-permanent]").forEach(function(element){ 
      element.scrollTop = scrollPositions[element.id];
    });
  });
})();
