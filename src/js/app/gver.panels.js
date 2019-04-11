// TODO: this doesn't need to be jQuery - and I'm sure we'll need to have this hook in to validation
// It's just for the POC! It was quick and dirty.

import $ from 'jquery';

let $gverPanelItems = $('[data-gver-panel-item]');
let $gverPanelBtnNext = $('[data-gver-panel-btn="next"]');
let $gverPanelBtnPrev = $('[data-gver-panel-btn="prev"]');

$gverPanelItems.not(':first').addClass('sprk-u-Display--none');

$gverPanelBtnNext.on('click', function() {
  let $thisPanel = $(this).closest('[data-gver-panel-item]');
  let $nextPanel = $thisPanel.next('[data-gver-panel-item]');
  swapEm($thisPanel, $nextPanel);
});

$gverPanelBtnPrev.on('click', function() {
  let $thisPanel = $(this).closest('[data-gver-panel-item]');
  let $prevPanel = $thisPanel.prev('[data-gver-panel-item]');
  swapEm($thisPanel, $prevPanel);
});

function swapEm($panelToHide, $panelToShow) {
  $panelToHide.addClass('sprk-u-Display--none');
  $panelToShow.removeClass('sprk-u-Display--none');
}
