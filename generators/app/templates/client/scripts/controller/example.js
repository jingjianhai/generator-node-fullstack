'use strict';

class Handler {
  constructor(pageName) {
    this.pageName = pageName;
  }
  getPageName() {
    return this.pageName;
  }
  render() {
    console.log('示例页');
  }
}

export default Handler;
