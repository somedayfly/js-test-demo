describe('add function unit test.', function(){
    it('2 + 3 = 5', function(){
        var result  = add( 2, 3 );
        expect( result ).toBe( 5 );
    });
  
    it('1 + 3 = 4, this should faild.', function(){
        var result = add( 1, 3 );
        expect(result).toBe( 4 );
    })
});