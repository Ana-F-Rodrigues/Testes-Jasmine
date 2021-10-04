import { UniqueIdService } from './unique-id.service';


describe(UniqueIdService.name, () => {

  let service: UniqueIdService = null;
  beforeEach(() => {
    service = new UniqueIdService();
  });

  it(`#${UniqueIdService.prototype.gereratedUniqueIdWithPrefix.name}
  should generate id when called with prefix`, () => {
    const id = service.gereratedUniqueIdWithPrefix('app');
    expect(id.startsWith('app-')).toBeTrue();

    expect(true).toBeTrue();
    expect(true).toBe(true);
    expect(true).toBeTruthy();
  });

  it(`#${UniqueIdService.prototype.gereratedUniqueIdWithPrefix.name}
   should not generate duplicate IDs when called multiple times`, () => {
    const ids = new Set();
    for (let i = 0; i < 50; i++) {
      ids.add(service.gereratedUniqueIdWithPrefix('app'));
    }
    expect(ids.size).toBe(50);
  });

  it(`#${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name}
  should return the number of generatedIds when called`, () => {
    service.gereratedUniqueIdWithPrefix('app');
    service.gereratedUniqueIdWithPrefix('app');
    expect(service.getNumberOfGeneratedUniqueIds()).toBe(2);
  });

  it(`#${UniqueIdService.prototype.gereratedUniqueIdWithPrefix.name}
    shoul throw when called with empty`, () => {
    const emptyValues = [null, undefined, '', '0', '1'];
    emptyValues.forEach(emptyValue => {
      expect(() => service.generateUniqueWithPrefix(emptyValues))
        .withContext(`Empty values: ${emptyValue}`)
        .toThrow();
    });
  });

});
