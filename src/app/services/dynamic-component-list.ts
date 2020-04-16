export abstract class DynamicComponentList {

  protected abstract list();

  public getComponentList() {
    return this.list();
  }

  public getComponentByAlias(alias: string) {

    const field = this.getComponentList().hasOwnProperty(alias);

    if (!field) {
      const supportedTypes = Object.keys(this.list).join(', ');
      throw new Error(
        `Not found (${alias}).Supported types: ${supportedTypes}`
      );
    }

    return this.getComponentList()[alias];
  }
}
