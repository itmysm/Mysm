import patterns from '../main'

function checkMessage(msg: string): boolean {
  return patterns.notEmpty.test(msg)
}

export default checkMessage