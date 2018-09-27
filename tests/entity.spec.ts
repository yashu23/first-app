import { Entity } from '../src/entity';
import { expect } from 'chai';

describe("Entity Tests", () => {

    it("verify initial state of entity", () => {
        const entity: Entity = new Entity(1, "sample entity");

        expect(entity).to.have.property('title', "sample entity");
        expect(entity).to.have.property('id', 1);
        expect(entity).to.have.property('creationDate').not.null;
    });
});