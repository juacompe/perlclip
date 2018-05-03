import Counterstring from '@/models/Counterstring'

describe('Counterstring.js', () => {
  describe('get', () => {
    it('should produce an empty string for 0', () => {
      expect(Counterstring.get(0)).to.equal('')
    })
    it('should produce a special string according to the given lenght', () => {
      expect(Counterstring.get(1).length).to.equal(1)
    })
    it('an asterisk is at a position in the string equal to the number that precedes it for even number', () => {
      expect(Counterstring.get(2)).to.equal('2*')
    })
    it('an asterisk is at a position in the string equal to the number that precedes it for odds number', () => {
      expect(Counterstring.get(3)).to.equal('*3*')
    })
  })
})
