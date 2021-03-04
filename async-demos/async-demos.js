(function(){
    function addSync(x,y){
        console.log(`   [@Service] processing ${x} and ${y}`);
        var result = x + y;
        console.log(`   [@Service] returing result`);
        return result;
    }

    function addSyncClient(x,y){
        console.log(`[@Client] invoking the service`);
        var result = addSync(x,y);
        console.log(` [@Client] result = ${result}`);
    }

    window['addSyncClient'] = addSyncClient;

    function addAsync(x,y){
        console.log(`   [@Service] processing ${x} and ${y}`);
        setTimeout(function(){
            var result = x + y;
            console.log(`   [@Service] returing result`);
            return result;
        },5000);
    }

    function addAsyncClient(x,y){
        console.log(`[@Client] invoking the service`);
        var result = addAsync(x,y);
        console.log(` [@Client] result = ${result}`);
    }

    window['addAsyncClient'] = addAsyncClient;

})();