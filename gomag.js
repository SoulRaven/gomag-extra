// ==UserScript==
// @name         Gomag control panel
// @namespace    https://www.tachogeek.ro
// @version      2025-02-22
// @description  Add extra functionaly where is not existent
// @author       Zaharia Constantin
// @match        http*://www.tachogeek.ro/gomag/*
// @include      http*//www.tachogeek.ro/gomag/*
// @require      https://code.jquery.com/jquery-3.7.1.min.js
// @require      https://cdn.jsdelivr.net/npm/@violentmonkey/dom@2
// @run-at       document-end
// @run-in       normal-tabs
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tachogeek.ro
// @grant        GM_log
// ==/UserScript==

const cart_submenu_content = [
  {
    url: '/gomag/order/list',
    name: "Comenzi"
  },
  {
    url: '/gomag/cartrecovery/customer/cart',
    name: "Cosuri de cumparaturi"

  }
]

VM.observe(document.body, () => {

  let menu = $('#menu.nano-content li:nth-child(3)'),
      cart_submenu = $('<ul/>').addClass('submenu');

  $.each(cart_submenu_content, function (ndx, val) {
    let lnk = $('<a/>').addClass('-g-menu-orders').prop('href', val.url).html($('<p/>').css({float: 'left'}).html(val.name)),
        sub_li = $('<li/>').append(lnk);
    cart_submenu.append(sub_li);
   });

  // change the class from '-g-menu-orders' to "on"
  menu.find('a').removeClass('-g-menu-orders').addClass('on')
  menu.append(cart_submenu);
  return true;

});
