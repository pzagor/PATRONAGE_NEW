(function() {
  'use strict';

  angular
    .module('patronageNew')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
