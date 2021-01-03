/**
 * Created on 2019/7/1.
 * 11 22 33 55
 */
const demo = {
    getName: function(){
        return new Promise(function(resolve, reject){
                setTimeout(function(){
                    resolve('Lily1');
                }, 1000);
            })
    },
    getAge: function(){
        return new Promise(function(resolve, reject){
                setTimeout(function(){

                    // 执行此句将导致本promise rejected, 则Promise.all的.then()不会执行
                    // reject('error!!');

                    resolve('18');
                }, 2000);
            })
    },
    getSex: function(){
        return new Promise(function(resolve, reject){
                setTimeout(function(){

                    // 执行此句将导致本promise rejected, 则Promise.all的.then()不会执行
                    // reject('error!!!');

                    resolve('Lady');
                }, 3000);
            })
    },

    displayOneByOne: function(){
        console.log('0', new Date().getSeconds());
        demo.getName()
            .then(function(name){
                console.log('1', new Date().getSeconds())
                document.getElementById('name').innerHTML = name;
                demo.getAge().then(function(age){
                    console.log('2', new Date().getSeconds())
                    document.getElementById('age').innerHTML = age;
                    demo.getSex().then(function(sex){
                        console.log('3', new Date().getSeconds())
                        document.getElementById('sex').innerHTML = sex;
                        console.log('finished.')
                    })
                })
             })
    },
    displayOnTheSameTime: function(){
        console.log('0', new Date().getSeconds());
        Promise.all([demo.getName(), demo.getAge(), demo.getSex()])
            .then(function(resArray){
                console.log('resArray', resArray);
                console.log('1', new Date().getSeconds());
                document.getElementById('name').innerHTML = resArray[0];
                document.getElementById('age').innerHTML = resArray[1];
                document.getElementById('sex').innerHTML = resArray[2];
            })
            .catch(function(errArray){
                // 将输出遇到的第一个reject消息
                console.log('errArray', errArray);

            })

    }
}

//demo.displayOneByOne();
demo.displayOnTheSameTime();
