"use client";
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from "@/components/ui/button";
import { z} from 'zod'
import { useForm } from "react-hook-form";
import { emailSubmit } from "@/server/submit-form";
import { motion, AnimatePresence } from 'framer-motion';
import { ImSpinner2 } from "react-icons/im";

const formSchema = z.object({
  email: z.string().email()
})

export function EmailForm() {
  

 const form = useForm<z.infer<typeof formSchema>>({
  resolver: zodResolver(formSchema),
  defaultValues: {
    email: "",
  },
})

async function onSubmit(values: z.infer<typeof formSchema>) {
  await emailSubmit(values)

}

return (
  <div className="-mt-[60px] h-[128px] max-w-[350px] w-full flex items-center justify-center ">
  <AnimatePresence mode="wait">
        {!form.formState.isSubmitSuccessful ? (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5, delay: 2.5}}
            className="w-full"
          >
  <Form {...form}>
    <form action='#' method="POST" onSubmit={form.handleSubmit(onSubmit)} className="w-full flex flex-col items-center gap-4">
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem className="w-full">
          <Label htmlFor="email" className="opacity-70 font-saira ">Subscribe for launch updates</Label>
            <FormControl>
            <Input id="email" placeholder="you@example.com" type="email" autoComplete="email" className="w-full" {...field}  />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
            <Button disabled={form.formState.isSubmitting || form.formState.isSubmitSuccessful} className="w-full hover:bg-[#dc2626c7] focus:bg-[#dc2626c7] bg-[#dc2626ae]" variant={'secondary'} type="submit">{form.formState.isSubmitting ? (
			<>Subscribing <ImSpinner2 className="ml-2 inline-block size-4 animate-spin transition-all " color="white" /></>)  : 'Subscribe to Newsletter'}</Button>
    </form>
  </Form>
  </motion.div>) : 
  (<motion.div
          key="thankYou"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="p-6 rounded-2xl shadow-lg w-full text-center"
          >
            <h2 className="text-lg font-medium text-green-400/50 mb-2">You&apos;re subscribed</h2>
            <p className="text-xl text-saira  font-bold">We&apos;ll send launch news to your inbox.</p>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
)
}
