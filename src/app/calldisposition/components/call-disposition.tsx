'use client';

import * as React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { toast } from '@/components/ui/use-toast';
import { Toaster } from '@/components/ui/toaster';

import data from '../../../mocks/call.json';
import { Icons } from '@/components/ui/icons';

const callCategory = () => {
  const labels = data.map(e => {
    return e.label;
  });
  const desc = data;
  return {
    labels,
    desc
  };
};

const { labels, desc } = callCategory();

const FormSchema = z.object({
  category: z.enum(['', ...labels], {
    required_error: 'You need to select a call Category type.'
  })
});

export function CallDispositionForm() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema)
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoading(true);

    fetch('https://dummyjson.com/products/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: data.category
        /* other product data */
      })
    })
      .then(res => res.json())
      .then(res => {
        setIsLoading(false);
        toast({
          title: `You submitted the following values`,
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">
                {JSON.stringify(res.title, null, 2)}
              </code>
            </pre>
          )
        });
      });
  }

  return (
    <>
      <div className="grid justify-center items-center h-screen">
        <Card className="max-w-3xl">
          <CardHeader>
            <CardTitle>Call Disposition</CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              tortor risus, semper dui in nisi lacinia rhoncus. Ut dapibus nisl
              eu eleifend vul
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-2/3 space-y-6"
              >
                <FormField
                  control={form.control}
                  name="category"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      {/* <FormLabel>Notify me about...</FormLabel> */}
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col space-y-1"
                        >
                          {desc.map((i, index) => {
                            return (
                              <FormItem
                                key={index}
                                className="flex items-center space-x-3 space-y-0 cursor-pointer"
                              >
                                <FormControl>
                                  <RadioGroupItem value={i.label} />
                                </FormControl>
                                <FormLabel className="py-1 text-base justify-center items-center flex gap-3">
                                  {i.label}{' '}
                                  <p className="text-sm text-slate-500">
                                    {' '}
                                    {i.desc}
                                  </p>
                                </FormLabel>
                              </FormItem>
                            );
                          })}
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isLoading}>
                  {isLoading && (
                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  Submit
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
      <Toaster />
    </>
  );
}
