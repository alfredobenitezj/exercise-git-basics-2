class WashingMachine {
  public program: number;
  private coldWater: boolean;
  private softener: boolean;
  public isWorking: boolean;

  public wash(): void {
    this.isWorking = true;
  }
}
