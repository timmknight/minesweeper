$(function(){

  var Board = function($container){
    this.$container = $container;
    this.board = [];
  };

  Board.prototype.render = function(){
    for (var i = 0; i < 81; i++) {
      this.$container.append('<div class="square" id="' + i + '"/>');
    }
    this.$container.find('.square').ready(this.randomMinePlacement.bind(this));
    this.$container.find('.square').on('click', this.mine.bind(this));
    this.$container.find('.square').ready(this.flagAMine.bind(this));
    this.$container.find('.square').ready(this.minePosition.bind(this));
  };

  Board.prototype.randomMinePlacement = function(){
    for (var i = 0; i < 10; i++) {
      var num = Math.floor((Math.random() * 81) + 1);
      var randomId = "#" + num ;
      var el = this.$container.find(randomId);
      el.addClass("mine");
      this.board.push(num)
      console.log(this.board);
      }
      // var minePos = $('.mine');
      // var result = minePos.position();
      // console.log(result);
  };

  Board.prototype.mine = function(e){
    if($(e.target).hasClass("mine")){
      alert("Boom, you hit a mine!");
    }
  };

  Board.prototype.clickOnBlank = function(){

  };

  Board.prototype.minePosition = function(){
    for (var i = 0; i < this.board.length; i++) {
      var arr = this.board[i];
      var numId = "#" + parseInt(arr);
      var pos = $(numId).position();
      console.log(pos);
    }
    // var minePos = $('.mine');
    // var result = minePos.position();
    // console.log(result);
  };
  Board.prototype.flagAMine = function(){
    var count = 0;
    $('.square').mousedown(function(event) {
      if(event.which === 3){
        count++;
        if(count === 1){
          $(this).addClass('flagged');
        }
        if(count === 2){
          $(this).removeClass('flagged');
          $(this).addClass('question');
        }
        if(count === 3){
          $(this).removeClass('flagged question');
          count = 0;
        }
      }
    });
  };

  Board.prototype.win = function(){

  };

  var board1 = new Board($('#container1'));
  board1.render();
});
