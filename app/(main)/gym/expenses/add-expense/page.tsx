"use client";
import ContentTitle from "@/components/setup/ContentTitle";
import {
  expenseDefaultValues,
  expenseFormSchema,
} from "@/helpers/formSchemas/gymFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
// import ImageUploader from "@/components/ui/image-uploader";
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

import { DatePicker } from "@/components/ui/date-picker";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import router from "next/router";
import ImageUploader from "@/components/ui/image-uploader";

const AddExpense = () => {
  const addExpenseForm = useForm<z.infer<typeof expenseFormSchema>>({
    resolver: zodResolver(expenseFormSchema),
    defaultValues: expenseDefaultValues,
  });

  function onSubmit(values: z.infer<typeof expenseFormSchema>) {
    console.log(values);
  }

  return (
    <div className="pb-[3em]">
      <ContentTitle title="Add Expense" />

      {/* Add Batch Form  */}
      <Form {...addExpenseForm}>
        <form
          onSubmit={addExpenseForm.handleSubmit(onSubmit)}
          className="space-y-8"
        >
          {/* Add New Expense Details  */}
          <div className="grid grid-cols-4 gap-[0.8em]">
            <FormField
              control={addExpenseForm.control}
              name="typeOfExpense"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Type Of Expense *</FormLabel>
                  <FormControl>
                    <Input
                      autoComplete="off"
                      placeholder="Type Of Expense"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={addExpenseForm.control}
              name="nameOfExpense"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name Of Expense</FormLabel>
                  <FormControl>
                    <Input
                      autoComplete="off"
                      placeholder="Name Of Expense"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={addExpenseForm.control}
              name="partyName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Party Name *</FormLabel>
                  <FormControl>
                    <Input
                      autoComplete="off"
                      placeholder="Party Name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={addExpenseForm.control}
              name="billNo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bill No./ Voucher No. </FormLabel>
                  <FormControl>
                    <Input
                      autoComplete="off"
                      placeholder="Bill No./ Voucher No."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={addExpenseForm.control}
              name="paymentDetails"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Payment Details </FormLabel>
                  <FormControl>
                    <Input
                      autoComplete="off"
                      placeholder="Payment Details"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={addExpenseForm.control}
              name="expenseDate"
              render={() => (
                <FormItem className="flex flex-col justify-between">
                  <FormLabel className="mt-[0.4em]">Expense Date</FormLabel>
                  <FormControl>
                    <DatePicker ButtonClassName="w-[20em" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={addExpenseForm.control}
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
              control={addExpenseForm.control}
              name="paidAmount"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Paid Amount</FormLabel>
                    <FormControl>
                      <Input
                        autoComplete="off"
                        type="number"
                        placeholder="Paid Amount"
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
              control={addExpenseForm.control}
              name="balance"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Balance</FormLabel>
                    <FormControl>
                      <Input
                        autoComplete="off"
                        type="number"
                        placeholder="Balance"
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
              control={addExpenseForm.control}
              name="paymentType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Payment Type</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Payment Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cash">Cash</SelectItem>
                        <SelectItem value="online">Online</SelectItem>
                        <SelectItem value="cheque">Cheque</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="col-span-2">
              <FormField
                control={addExpenseForm.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        autoComplete="off"
                        placeholder="Description"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>{" "}
          <ImageUploader title="Upload Bill Image" />
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

export default AddExpense;
