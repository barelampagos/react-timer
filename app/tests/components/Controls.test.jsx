var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Controls = require('Controls');

describe('Controls', () => {
	it('Should exist', () => {
		expect(Controls).toExist();
	});

	describe('render', () => {
		it('Should render Pause button when started', () => {
			var controls = TestUtils.renderIntoDocument(
				<Controls countdownStatus='started' />
			);
			var $el = $(ReactDOM.findDOMNode(controls));
			var $pausebutton = $el.find('button:contains(Pause)');

			expect($pausebutton.length).toBe(1);
		});

		it('Should render Start button when started', () => {
			var controls = TestUtils.renderIntoDocument(
				<Controls countdownStatus='paused' />
			);
			var $el = $(ReactDOM.findDOMNode(controls));
			var $pausebutton = $el.find('button:contains(Start)');

			expect($pausebutton.length).toBe(1);
		});
	});
});
