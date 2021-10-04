import { Injectable } from "@angular/core";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UniqueIdService {
  generateUniqueWithPrefix(toT: any): any {
    throw new Error('Method not implemented.');
  }

  private numberOfGeneratedIds = 0;

  private validId = /^[A-Za-z]+[\w\-\:\.]*$/;

  public gereratedUniqueIdWithPrefix(prefix: string): string {
    if (!prefix || !this.validId.test(prefix)) {
      throw Error('Prefix can not be empty');
    }

    const uniqueId = this.generateUniqueId();
    this.numberOfGeneratedIds++;
    return `${prefix}-${uniqueId}`;
  }

  public getNumberOfGeneratedUniqueIds(): number {
    return this.numberOfGeneratedIds;
  }

  private generateUniqueId(): string {
    return uuidv4();
  }

}
