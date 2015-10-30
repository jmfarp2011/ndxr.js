describe("NDXR", function() {
  beforeEach(function() {
    ndxr = new NDXR([{id: 'something'}, {id: 'another'}]);
  });


    it("should initialize", function() {
        expect(ndxr).toBeDefined();
    });

    it('should index', function(){
        ndxr.index(['id']);
        expect(ndx.indexed.something.length).toEqual(1);
        expect(ndx.indexed.another.length).toEqual(1);
    });
});