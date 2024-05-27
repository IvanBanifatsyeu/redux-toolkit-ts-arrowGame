export interface IPlaygroundStateStepsState {
  currentValue: string;
}

export interface IPlaygroundState {
  currentStep: number;
  steps: IPlaygroundStateStepsState[];
}
