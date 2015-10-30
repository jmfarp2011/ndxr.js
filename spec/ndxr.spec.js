describe("NDXR", function() {
  beforeEach(function() {
    ndxr = new NDXR([{id: 'something', name: 'Tom'}, {id: 'another', name: 'Bob'}]);
  });


    it("should initialize", function() {
        expect(ndxr).toBeDefined();
    });

    it('should index', function(){
        ndxr.index(['id']);
        expect(ndxr.id__something.length).toEqual(1);
        expect(ndxr.id__another.length).toEqual(1);
    });
    
    it('should be able to reindex', function(){
        ndxr.index(['id']);
        ndxr.index(['name']);
        expect(ndxr.id__something).not.toBeDefined();
        expect(ndxr.name__Tom).toBeDefined();
    })
});