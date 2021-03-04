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

    function addAsync(x,y, callback){
        console.log(`   [@Service] processing ${x} and ${y}`);
        setTimeout(function(){
            var result = x + y;
            console.log(`   [@Service] returing result`);
            callback(result);
        },5000);
    }

    function addAsyncClient(x,y){
        console.log(`[@Client] invoking the service`);
        addAsync(x,y, function(result){
            console.log(` [@Client] result = ${result}`);
        });
    }

    window['addAsyncClient'] = addAsyncClient;

    function addAsyncPromise(x,y){
        console.log(`   [@Service] processing ${x} and ${y}`);

        var p = new Promise(function(resolveFn, rejectFn){
            setTimeout(function(){
                var result = x + y;
                console.log(`   [@Service] returing result`);
                resolveFn(result);
            },5000);
        })
        return p;
    }

    function addSyncClient(x,y){
        console.log(`[@Client] invoking the service`);
        var result = addSync(x,y);
        console.log(` [@Client] result = ${result}`);
    }

    /* 
    function addAsyncPromiseClient(x,y){
        console.log(`[@client] triggering the service`);
        var p = addAsyncPromise(x,y);
        p.then(function(result){
            console.log(`[@client] result =${result}`);
        });
    } 
    */

    async function addAsyncPromiseClient(x,y){
        console.log(`[@client] triggering the service`);
        var result = await addAsyncPromise(x,y);
        console.log(`[@client] result =${result}`);
    }

    window['addAsyncPromiseClient'] = addAsyncPromiseClient;

    function divide(x,y){
        return new Promise(function(resolveFn, rejectFn){
            setTimeout(() => {
                if (y !== 0){
                    return resolveFn(x / y);
                } else {
                    return rejectFn(new Error('Invalid arguments'));
                }
            }, 5000)
        });
    }
})();