"use client";
import ContentTitle from "@/components/setup/ContentTitle";
import {
  customBillDefaultValues,
  customBillFormSchema,
} from "@/helpers/formSchemas/gymFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";

const AddCustomBill = () => {
  const router = useRouter();
  const addCustomBillForm = useForm<z.infer<typeof customBillFormSchema>>({
    resolver: zodResolver(customBillFormSchema),
    defaultValues: customBillDefaultValues,
  });
  function onSubmit(values: z.infer<typeof customBillFormSchema>) {
    console.log(values);
  }
  return (
    <div>
      <ContentTitle title="Add Custom Bill" />

      {/* Add Custom Bill  */}
      <Form {...addCustomBillForm}>
        <form
          onSubmit={addCustomBillForm.handleSubmit(onSubmit)}
          className="space-y-8"
        >
          {/* Add New Expense Details  */}
          <div className="grid grid-cols-4 gap-[0.8em]">
            <FormField
              control={addCustomBillForm.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number *</FormLabel>
                  <FormControl>
                    <Input
                      autoComplete="off"
                      placeholder="Phone Number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={addCustomBillForm.control}
              name="nameOnBill"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name Of Bill</FormLabel>
                  <FormControl>
                    <Input
                      autoComplete="off"
                      placeholder="Name Of Bill"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="col-span-2">
              <FormField
                control={addCustomBillForm.control}
                name="emailAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input
                        autoComplete="off"
                        placeholder="Email Address"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={addCustomBillForm.control}
              name="billFor"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bill For</FormLabel>
                  <FormControl>
                    <Input
                      autoComplete="off"
                      placeholder="Bill For"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={addCustomBillForm.control}
              name="billAmount"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Bill Amount</FormLabel>
                    <FormControl>
                      <Input
                        autoComplete="off"
                        type="number"
                        placeholder="Bill Amount"
                        value={field.value}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />

            <FormField
              control={addCustomBillForm.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input
                      autoComplete="off"
                      placeholder="Address"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={addCustomBillForm.control}
              name="locality"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Locality </FormLabel>
                  <FormControl>
                    <Input
                      autoComplete="off"
                      placeholder="Locality"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={addCustomBillForm.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City </FormLabel>
                  <FormControl>
                    <Input autoComplete="off" placeholder="City" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={addCustomBillForm.control}
              name="state"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>State </FormLabel>
                  <FormControl>
                    <Input autoComplete="off" placeholder="State" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="col-span-2">
              <FormField
                control={addCustomBillForm.control}
                name="note"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Note</FormLabel>
                    <FormControl>
                      <Textarea
                        autoComplete="off"
                        placeholder="Note"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>{" "}
          <div className="space-x-2 flex justify-end">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.back()}
            >
              Cancel
            </Button>
            <Button type="submit">Save</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default AddCustomBill;
