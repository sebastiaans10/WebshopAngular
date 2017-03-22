angular.module('shopApp').service('winkelwagenService', function(){

  this.getWinkelItems = function(){
    return JSON.parse(localStorage.getItem('winkelitems')) || [];
  };

  this.updateWinkelitems = function(data){
    localStorage.setItem('winkelitems', JSON.stringify(data));
  };

  this.addWinkelItem = function (nieuwWinkelItem, cb) {
      let winkelitems = this.getWinkelItems();
      winkelitems.push(Object.assign({
          id: winkelitems.length > 0 ? winkelitems[winkelitems.length - 1].id + 1 : 1
      }, nieuwWinkelItem));

      // update localStorage
      this.updateWinkelitems(winkelitems);
      cb(winkelitems);
  };

  this.deleteWinkelItem = function (removedWinkelItem, cb) {
      let winkelitems = this.getWinkelItems();
      let modified = winkelitems.filter(winkelitem => removedWinkelItem.id !== winkelitem.id);

      // update localStorage
      this.updateWinkelitems(modified);
      cb(modified);
  };

  this.updateWinkelItem = function (updateWinkelItem, cb) {
      let winkelitems = this.getWinkelItems();
      let modified = winkelitems.map(winkelitem => {
          if (winkelitem.id === updateWinkelItem.id) {
              return updateWinkelItem;
          }
          return winkelitem;
      });

      // update localStorage
      this.updateWinkelitems(modified);
      cb(modified);
  };




});
