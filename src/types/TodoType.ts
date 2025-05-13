export type TodoType = {
  id: string;
  title: string;
  status: 'notStarted' | 'inProgress' | 'Completed';
  detail: string;
};
