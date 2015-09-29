define(function() {
  'use strict';
  return function(match) {
    match('', 'profile#list');
    return match('user/:id', 'profile#show');
  };
});

//# sourceMappingURL=maps/routes.js.map