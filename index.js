module.exports = {
    /**
     * @param {number} d
     * @returns {string}
     */
    twoDigits: function (d) {
        if (0 <= d && d < 10)
            return "0" + d.toString();

        if (-10 < d && d < 0)
            return "-0" + (-1 * d).toString();

        return d.toString();
    },

    /**
     * @param {Date} d
     */
    toMysqlFormat: function (d) {
        return d.getUTCFullYear() + "-" + this.twoDigits(1 + d.getUTCMonth())
            + "-" + this.twoDigits(d.getUTCDate()) + " "
            + this.twoDigits(d.getUTCHours())
            + ":" + this.twoDigits(d.getUTCMinutes()) + ":"
            + this.twoDigits(d.getUTCSeconds());
    },

    /**
     * @param {Date} d
     */
    toUnixTimestamp: function (d) {
        return Math.floor(d.getTime() / 1000);
    }
};