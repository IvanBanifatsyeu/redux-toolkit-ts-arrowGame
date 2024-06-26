export interface IPlaygroundStateStepsState {
  step: number;
  currentValue: string | null;
  enteredValue: string | null;
  success: boolean | null;
}

export interface IPlaygroundState {
  currentStep: number;
  steps: IPlaygroundStateStepsState[];
  totalSuccessful: number;
  totalUnsuccessful: number;
}
