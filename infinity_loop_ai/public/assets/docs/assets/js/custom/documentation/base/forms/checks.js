"use strict";

// Class definition
var KTDocsChecksForms = function () {
    const example1 = () => {
        document.querySelector('#kt_check_indeterminate_1').indeterminate = true;
    }

    const example2 = () => {
        document.querySelector('#kt_check_indeterminate_2').indeterminate = true;
    }

    // Public methods
    return {
        init: function () {
            example1();
            example2();
        }
    }
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTDocsChecksForms.init();
});
