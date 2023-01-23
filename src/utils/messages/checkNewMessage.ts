import patterns from '../main'

function checkMessage(msg: string) {
    console.log(patterns.notEmpty.test(msg));
}

export default checkMessage