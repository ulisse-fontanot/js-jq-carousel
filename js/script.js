$(document).ready(function(){

  $('.next').click(next);
  $(document).keydown(function(e){
    if (e.keyCode == 39){
      next();
    }
  });

  $('.prev').click(previous);
  $(document).keydown(function(e){
    if (e.keyCode == 37){
      previous();
    }
  });

  $('.nav i').click(esatto);

});

function esatto(){

  var imgAttiva = $('.images img.active');
  var pallinoAttivo = $('.nav i.active');

  $('.nav i.active').removeClass('active');
  $(this).addClass('active');

  if ($('.nav').find('i').eq(0).hasClass('active')) {
    imgAttiva.removeClass('active');
    $('.images').find('img').eq(0).addClass('active');
  }

  if ($('.nav').find('i').eq(1).hasClass('active')) {
    imgAttiva.removeClass('active');
    $('.images').find('img').eq(1).addClass('active');
  }

  if ($('.nav').find('i').eq(2).hasClass('active')) {
    imgAttiva.removeClass('active');
    $('.images').find('img').eq(2).addClass('active');
  }

  if ($('.nav').find('i').eq(3).hasClass('active')) {
    imgAttiva.removeClass('active');
    $('.images').find('img').eq(3).addClass('active');
  }

}

function next(){

  var imgAttiva = $('.images img.active');
  var pallinoAttivo = $('.nav i.active');

  imgAttiva.removeClass('active');
  imgAttiva.next().addClass('active');

  pallinoAttivo.removeClass('active');
  pallinoAttivo.next().addClass('active');

  if(imgAttiva.hasClass('last')){
    $('.images img.first').addClass('active');
    $('.nav i.first').addClass('active');
  }

}

function previous(){

  var imgAttiva = $('.images img.active');
  var pallinoAttivo = $('.nav i.active');

  imgAttiva.removeClass('active');
  imgAttiva.prev().addClass('active');

  pallinoAttivo.removeClass('active');
  pallinoAttivo.prev().addClass('active');

  if(imgAttiva.hasClass('first')){
    imgAttiva.removeClass('active');
    $('.images img.last').addClass('active');
    pallinoAttivo.removeClass('active');
    $('.nav i.last').addClass('active');
  }

}
