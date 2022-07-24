interface Workspace {
  id: number;
  name: string;
}

export const useWorkspaceList = () =>
  useState<Workspace[]>('workspaceList', () => [
    {
      id: 1,
      name: 'pineapple',
    },
    {
      id: 2,
      name: 'berry',
    },
  ]);

/* const workspaceList = ref([
  {
    id: 1,
    name: 'pineapple',
  },
  {
    id: 2,
    name: 'berry',
  },
]); */
