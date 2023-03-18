function receivesAFunction (callback){
    return callback();
}
receivesAFunction(function(){return 4+5;});

function returnsANamedFunction(){
    let a = function(){};
    return a
}
returnsANamedFunction();

function returnsAnAnonymousFunction(){
    return function(){}   
}
returnsAnAnonymousFunction()


