"use strict";
var Receipt = /** @class */ (function () {
    function Receipt() {
        this.text = '';
        this.aCountdown = 3;
        this.total = 0;
        this.bCountdown = 2;
    }
    Receipt.prototype.getText = function () {
        return this.text + "Total: " + this.total;
    };
    ;
    Receipt.prototype.scannedA = function () {
        this.text += 'A: 50';
        if (--this.aCountdown == 0) {
            this.text += ' - 20 (3 for 130)';
            this.total += 30;
        }
        else {
            this.total += 50;
        }
        this.text += '\n';
    };
    ;
    Receipt.prototype.scannedB = function () {
        this.text += 'B: 30';
        if (--this.bCountdown == 0) {
            this.text += ' - 15 (2 for 45)';
            this.total += 15;
        }
        else {
            this.total += 30;
        }
        this.text += '\n';
    };
    ;
    Receipt.prototype.scannedC = function () {
        this.text += 'C: 20\n';
        this.total += 20;
    };
    ;
    Receipt.prototype.scannedD = function () {
        this.text += 'D: 15\n';
        this.total += 15;
    };
    ;
    return Receipt;
}());
;
module.exports = {
    Receipt: Receipt
};
