/**
 * Created by Alvin on 2016/11/14.
 */

module.exports = {
    expfun: function (flag) {
        if (flag == 0) {
            throw '我是例外';
        }
        return 'success';
    }
};
