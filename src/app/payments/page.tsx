import { Payment, columns } from './columns';
import { DataTableDemo } from './data-table';

async function getData(): Promise<Payment[]> {
  let result = await fetch('https://jsonplaceholder.typicode.com/todos/');
  let res = await result.json();
  return res;
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div>
      <div className="container mx-auto py-10">
        <DataTableDemo />
      </div>
    </div>
  );
}
