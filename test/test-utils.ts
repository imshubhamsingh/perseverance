
function testComponent(testname: string, cb = () => {}) {
    describe(`⚛️ Component :: ${testname}`, cb);
}

function testUtil(testname: string, cb = () => {}) {
    describe(`🔧 Util :: ${testname}`, cb);
}

function testService(testname: string, cb = () => {}) {
    describe(`🚚 Service :: ${testname}`, cb);
}


export * from '@testing-library/react';
export {
    testComponent,
    testUtil,
    testService,
};
