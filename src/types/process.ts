export interface ProcessStepData {
  number: string;
  title: string;
  description: string;
}

export interface ProcessProps {
  title: string;
  description: string;
  steps: ProcessStepData[];
}
