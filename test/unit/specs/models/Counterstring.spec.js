import Counterstring from '@/models/Counterstring'

describe('Counterstring.js', () => {
  describe('get', () => {
    it('returns an empty string for 0', () => {
      expect(Counterstring.get(0)).to.equal('')
    })
    it('returns a special string according to the given lenght', () => {
      expect(Counterstring.get(1).length).to.equal(1)
    })
    describe('each asterisk is at a position in the string equal to the number that precedes it', () => {
      it('for small even number', () => {
        expect(Counterstring.get(2)).to.equal('2*')
      })
      it('for small odds number', () => {
        expect(Counterstring.get(3)).to.equal('*3*')
      })
      it('for 2-digit number', () => {
        expect(Counterstring.get(10)).to.equal('*3*5*7*10*')
      })
      it('for 3-digit number', () => {
        expect(Counterstring.get(100)).to.equal('*3*5*7*9*12*15*18*21*24*27*30*33*36*39*42*45*48*51*54*57*60*63*66*69*72*75*78*81*84*87*90*93*96*100*')
      })
    })
  })
})
