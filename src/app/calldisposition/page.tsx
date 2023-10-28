import { Metadata } from 'next';
import { CallDispositionForm } from './components/call-disposition';

export const metadata: Metadata = {
  title: 'Call Disposition',
  description: 'Call Disposition forms built using the components.'
};

export default function CallDispositionPage() {
  return (
    <>
      <div className="bg-gray-100">
        <CallDispositionForm />
      </div>
    </>
  );
}
