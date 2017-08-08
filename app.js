(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController )
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var showList = this;
  showList.items = ShoppingListCheckOffService.getItems();
  showList.alreadyBought = function (item,itemIndex) {
    ShoppingListCheckOffService.removeItem(item,itemIndex);
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var addList = this;
addList.boughtItems = ShoppingListCheckOffService.showItems();
}

function ShoppingListCheckOffService() {
  var service = this;
  var boughtItems=[];
    // List of shopping items
  var items = [
    {
      name: "cookies",
      quantity: 10
    },
    {
     name: "Apples",
     quantity: 10
    },
    {
      name: "Mangoes",
      quantity: 10
    },
    {
      name: "Oranges",
      quantity: 10
    },
    {
      name: "Watermelons",
      quantity: 10
    }
  ];
  service.getItems = function () {
      return items;
    };

  service.removeItem = function (item,itemIdex) {
    items.splice(itemIdex, 1);
    boughtItems.push(item);
  };
  service.showItems = function () {
      return boughtItems;
    };

}

})();
