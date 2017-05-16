'use strict';

import PouchDB from 'pouchdb-browser';
import PouchDbLocalstorage from 'pouchdb-adapter-localstorage';
import forEach from 'lodash/forEach';
// import HashIds from 'hashids';

import getPageInstance from './abstract/get.page.instance.js';
import pages from './config/pages.js';

class PageInit {
  constructor() {
    this.setPouchDB();
    this.setAjax();
    this.setPage();
  }
  setPouchDB() {
    // let hashids = new HashIds();

    PouchDB.plugin(PouchDbLocalstorage);

    /*eslint no-unused-vars:0*/
    let pouchdb = new PouchDB('DDB', {
      adapter: 'localstorage',
    });

    window.PouchDB = PouchDB;
  }
  setAjax() {
    $.ajaxSetup({
      global: true,
      async: true,
      dataType: 'json'
    });
  }
  setPage() {
    forEach(pages, (val) => {
      if ($('.' + val + '').length) {
        getPageInstance(val).render();
        return;
      }
    });
  }
}

export default PageInit;
