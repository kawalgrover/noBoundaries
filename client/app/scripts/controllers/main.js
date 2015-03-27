'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
app.controller('MainCtrl', function ($scope) {
	$(document).ready(function() {

	    $(window).on('focus', function(event) {
	        $('.show-focus-status > .alert-danger').addClass('hidden');
	        $('.show-focus-status > .alert-success').removeClass('hidden');
	    }).on('blur', function(event) {
	        $('.show-focus-status > .alert-success').addClass('hidden');
	        $('.show-focus-status > .alert-danger').removeClass('hidden');
	    });

	    $('.date-picker').each(function () {
	        var $datepicker = $(this),
	            curDate = ($datepicker.data('date') ? moment($datepicker.data('date'), 'YYYY/MM/DD') : moment()),
	            format = {
	                'weekday' : ($datepicker.find('.weekday').data('format') ? $datepicker.find('.weekday').data('format') : 'dddd'),
	                'date' : ($datepicker.find('.date').data('format') ? $datepicker.find('.date').data('format') : 'MMMM Do'),
	                'year' : ($datepicker.find('.year').data('year') ? $datepicker.find('.weekday').data('format') : 'YYYY')
	            };

	        function updateDisplay(curDate) {
	            $datepicker.find('.date-container > .weekday').text(curDate.format(format.weekday));
	            $datepicker.find('.date-container > .date').text(curDate.format(format.date));
	            $datepicker.find('.date-container > .year').text(curDate.format(format.year));
	            $datepicker.data('date', curDate.format('YYYY/MM/DD'));
	            $datepicker.find('.input-datepicker').removeClass('show-input');
	        }

	        updateDisplay(curDate);

	        $datepicker.on('click', "[data-toggle='calendar']", function(event) {
	            event.preventDefault();
	            $datepicker.find('.input-datepicker').toggleClass('show-input');
	        });

	        $datepicker.on('click', '.input-datepicker > .input-group-btn > button', function(event) {
	            event.preventDefault();
	            var $input = $(this).closest('.input-datepicker').find('input'),
	                date_format = ($input.data('format') ? $input.data('format') : 'YYYY/MM/DD');
	            if (moment($input.val(), date_format).isValid()) {
	               updateDisplay(moment($input.val(), date_format));
	            }else{
	                alert('Invalid Date');
	            }
	        });

	        $datepicker.on('click', "[data-toggle='datepicker']", function(event) {
	            event.preventDefault();

	            var curDate = moment($(this).closest('.date-picker').data('date'), 'YYYY/MM/DD'),
	                dateType = ($datepicker.data('type') ? $datepicker.data('type') : 'days'),
	                type = ($(this).data('type') ? $(this).data('type') : 'add'),
	                amt = ($(this).data('amt') ? $(this).data('amt') : 1);

	            if (type === 'add') {
	                curDate = curDate.add(dateType, amt);
	            }else if (type === 'subtract') {
	                curDate = curDate.subtract(dateType, amt);
	            }

	            updateDisplay(curDate);
	        });

	        if ($datepicker.data('keyboard') === true) {
	            $(window).on('keydown', function(event) {
	                if (event.which === 37) {
	                    $datepicker.find('span:eq(0)').trigger('click');
	                }else if (event.which === 39) {
	                    $datepicker.find('span:eq(1)').trigger('click');
	                }
	            });
	        }
	    });
	});
  });
