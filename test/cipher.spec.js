describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', () => {
      assert.equal(cipher.encode('ABCDEFGHIJKLMNOPQRSTUVWXYZ',33),'HIJKLMNOPQRSTUVWXYZABCDEFG');
    });

    it('debería retornar "H" para "A" con offset 33', () => {
      assert.equal(cipher.encode('A',33),'H');
    });

    it('debería retornar "h" para "a" con offset 33', () => {
      assert.equal(cipher.encode('a',33),'h');
    });

    it('debería retornar "+" para "*" con offset 33', () => {
      assert.equal(cipher.encode('*',33),'+');
    });

    it('debería retornar " " para " " con offset 33', () => {
      assert.equal(cipher.encode(' ',33),' ');
    });

    it('debería retornar "ñ" para "ñ" con offset 33', () => {
      assert.equal(cipher.encode('ñ',33),'ñ');
    });


  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () => {
      assert.equal(cipher.decode('HIJKLMNOPQRSTUVWXYZABCDEFG',33),'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    });

    it('debería retornar "A" para "H" con offset 33', () => {
      assert.equal(cipher.decode('H',33),'A');
    });

    it('debería retornar "a" para "h" con offset 33', () => {
      assert.equal(cipher.decode('h',33),'a');
    });

    it('debería retornar "*" para "+" con offset 33', () => {
      assert.equal(cipher.decode('+',33),'*');
    });

    it('debería retornar " " para " " con offset 33', () => {
      assert.equal(cipher.decode(' ',33),' ');
    });

    it('debería retornar "ñ" para "ñ" con offset 33', () => {
      assert.equal(cipher.decode('ñ',33),'ñ');
    });

  });

});
