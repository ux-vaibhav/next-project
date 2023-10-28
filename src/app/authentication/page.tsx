import { Metadata } from 'next';
import Link from 'next/link';

import { cn } from '@/lib/utils';

import { buttonVariants } from '@/components/ui/button';
import { UserAuthForm } from './components/user-auth-form';
import { ModeToggle } from '@/components/ui/theme-toggle';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Authentication',
  description: 'Authentication forms built using the components.'
};

export default function AuthenticationPage() {
  return (
    <>
      <div className="bg-white container relative  h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="flex absolute right-4 top-4 md:left-8 md:top-8 gap-1">
          <Link href="" className={cn(buttonVariants({ variant: 'ghost' }))}>
            {' '}
            Login
          </Link>
          {/* <ModeToggle/> */}
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to create your account
              </p>
            </div>
            <UserAuthForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{' '}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
        <div className="relative hidden h-full justify-center flex-col bg-muted p-10  dark:border-r lg:flex">
          <div className="absolute inset-0 bg-gray-100" />
          <div className="relative z-20 flex items-center text-2xl mb-4 font-medium">
            Pharmacy Central Workspace
          </div>
          <div className="relative z-20">
            <blockquote className="space-y-2">
              <p className="text-lg leading-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                tortor risus, semper dui in nisi lacinia rhoncus. Ut dapibus
                nisl eu eleifend vulputate. Donec viverra magna id urna finibus,
                nec scelerisque massa congue. Proin volutpat nulla et porta
                venenatis.{' '}
              </p>
              <footer className="text-sm">Morbi semper dui in nisi</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </>
  );
}
