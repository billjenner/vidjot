module.exports = {
    truncate: function(str, len){
        if (str.length > len && str.length > 0) {
            str = str.substring(0,len);
        }
        return str;
    },
}
