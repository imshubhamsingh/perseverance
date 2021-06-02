// https://stackoverflow.com/a/54326635
declare namespace Cypress {
  interface Chainable {
    isVisible: (status?: boolean) => Chainable<boolean>;
  }
}

Cypress.Commands.add('isVisible', { prevSubject: true }, (p1: string, status = true) => {
  cy.get(p1).should((jq: JQuery<HTMLElement>) => {
    if (!jq || jq.length === 0) {
      return;
    }

    const elem: HTMLElement = jq[0];
    const doc: HTMLElement = document.documentElement;
    const pageLeft: number = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
    const pageTop: number = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    let elementLeft: number = 0;
    let elementTop: number = 0;
    let elementHeight: number = 0;
    let elementWidth: number = 0;

    const length: number = elem.getClientRects().length;

    if (length > 0) {
      // TODO: select correct border box!!
      elementLeft = elem.getClientRects()[length - 1].left;
      elementTop = elem.getClientRects()[length - 1].top;
      elementWidth = elem.getClientRects()[length - 1].width;
      elementHeight = elem.getClientRects()[length - 1].height;
    }

    const val: boolean = !!(
      elementHeight > 0 &&
      elementWidth > 0 &&
      elem.getClientRects().length > 0 &&
      elementLeft >= pageLeft &&
      elementLeft <= window.outerWidth &&
      elementTop >= pageTop &&
      elementTop <= window.outerHeight
    );
    console.log(
      elementHeight > 0,
      elementWidth > 0,
      elem.getClientRects().length > 0,
      elementLeft >= pageLeft,
      elementLeft <= window.outerWidth,
      elementTop >= pageTop,
      elementTop <= window.outerHeight
    );

    if (status) {
      assert(val === true, 'Element is visible');
    } else {
      assert(val === false, 'Element is not visible');
    }
  });
});
