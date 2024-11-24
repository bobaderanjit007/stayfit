"use client";
import ContentTitle from "@/components/setup/ContentTitle";
import {
  batchDefaultValues,
  batchFormSchema,
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

import { DatePicker } from "@/components/ui/date-picker";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const AddNewBatch = () => {
  const router = useRouter();
  const addBatchForm = useForm<z.infer<typeof batchFormSchema>>({
    resolver: zodResolver(batchFormSchema),
    defaultValues: batchDefaultValues,
  });

  function onSubmit(values: z.infer<typeof batchFormSchema>) {
    console.log(values);
  }
  return (
    <div>
      <ContentTitle title="Add New Batch" />

      {/* Add Batch Form  */}
      <Form {...addBatchForm}>
        <form
          onSubmit={addBatchForm.handleSubmit(onSubmit)}
          className="space-y-8"
        >
          {/* Add New Batch Details  */}
          <div className="grid grid-cols-4 gap-[0.8em]">
            <div className="col-span-2">
              <FormField
                control={addBatchForm.control}
                name="batchName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Batch Name *</FormLabel>
                    <FormControl>
                      <Input
                        autoComplete="off"
                        placeholder="Batch Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="col-span-2">
              <FormField
                control={addBatchForm.control}
                name="trainer"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Trainer</FormLabel>
                    <FormControl>
                      <Input
                        autoComplete="off"
                        placeholder="Trainer"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={addBatchForm.control}
              name="startTime"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Start Time *</FormLabel>
                  <FormControl>
                    <Input
                      autoComplete="off"
                      placeholder="Start Time"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={addBatchForm.control}
              name="endTime"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>End Time *</FormLabel>
                  <FormControl>
                    <Input
                      autoComplete="off"
                      placeholder="End Time"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={addBatchForm.control}
              name="startDate"
              render={() => (
                <FormItem className="flex flex-col justify-between">
                  <FormLabel className="mt-[0.4em]">Start Date</FormLabel>
                  <FormControl>
                    <DatePicker ButtonClassName="w-[20em" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={addBatchForm.control}
              name="endDate"
              render={() => (
                <FormItem className="flex flex-col justify-between">
                  <FormLabel className="mt-[0.4em]">End Date</FormLabel>
                  <FormControl>
                    <DatePicker ButtonClassName="w-[20em" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={addBatchForm.control}
              name="capacity"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Capacity</FormLabel>
                    <FormControl>
                      <Input
                        autoComplete="off"
                        type="number"
                        placeholder="Capacity"
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
              control={addBatchForm.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Type</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="inactive">Inactive</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="col-span-2">
              <FormField
                control={addBatchForm.control}
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
          </div>

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

export default AddNewBatch;
