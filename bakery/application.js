var bakery = {
  supplies: {
    flour: 28,
    eggs: 21,
    sugar: 19
  },
  goodRequirements: {
    cupcake: {
      flour: 2,
      eggs: 1,
      sugar: 1
    },
    cookie: {
      flour: 1,
      eggs: 1,
      sugar: 1
    }
  },
  make: function (goodType) {
    console.log('Attempting to make a:', goodType);
    var req = this.goodRequirements[goodType];

    if (req.flour <= this.supplies.flour &&
        req.eggs <= this.supplies.eggs &&
        req.sugar <= this.supplies.sugar) {
          this.supplies.flour -= req.flour;
          this.supplies.eggs -= req.eggs;
          this.supplies.sugar -= req.sugar;
          this.updateIngredientsList();
          console.log('The bakery made a ' + goodType + '!');

      var goodDiv = $('<div>').addClass(goodType);
      $('#bakery .display').append(goodDiv);
    }
  },
  updateIngredientsList: function () {
    $('.ingredients .flour span').text(this.supplies.flour);
    $('.ingredients .eggs span').text(this.supplies.eggs);
    $('.ingredients .sugar span').text(this.supplies.sugar);
  }
};

$('#bakery .make').on('click', function (e) {
  var goodType = $(e.currentTarget).data('good-type');
    bakery.make(goodType);
});

bakery.updateIngredientsList();