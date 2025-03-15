function aa () {
    var b=10;
    c();
    function c() {
        console.log(b);
    }
}
aa();