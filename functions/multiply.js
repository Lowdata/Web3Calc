const {createContractInstance} = require("./connection")

async function multiply(num1,num2){
    const{instance,accounts} = await createContractInstance();

    const response = await instance.meathods.mulNum(num1,num2)
                    .send({from:accounts[0]});

    console.log('Response', response);
            
}

multiply(1,2);
module.exports = {addition}