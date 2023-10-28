'use client';

import { ColumnDef } from '@tanstack/react-table';

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'title',
    header: 'Title'
  },
  {
    accessorKey: 'completed',
    header: 'Completed'
  },
  {
    accessorKey: 'id',
    header: 'ID'
  }
];
