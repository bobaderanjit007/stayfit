"use client";
import ContentTitle from "@/components/setup/ContentTitle";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import ImageUploader from "@/components/ui/image-uploader";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  workoutPlanDefaultValues,
  workoutPlanFormSchema,
} from "@/helpers/formSchemas/gymFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const AddNewWorkout = () => {
  const router = useRouter();
  const addWorkoutForm = useForm<z.infer<typeof workoutPlanFormSchema>>({
    resolver: zodResolver(workoutPlanFormSchema),
    defaultValues: workoutPlanDefaultValues,
  });

  function onSubmit(values: z.infer<typeof workoutPlanFormSchema>) {
    console.log(values);
  }

  return (
    <div>
      <ContentTitle title="Create Diet Plan" />

      <Form {...addWorkoutForm}>
        <form
          onSubmit={addWorkoutForm.handleSubmit(onSubmit)}
          className="space-y-5"
        >
          <div className="space-x-4 grid grid-cols-2">
            <FormField
              control={addWorkoutForm.control}
              name="scheduleName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Schedule Name*</FormLabel>
                  <FormControl>
                    <Input
                      autoComplete="off"
                      placeholder="Schedule Name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={addWorkoutForm.control}
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

            <ImageUploader title="Upload Workout Image" />
          </div>
          <div className="space-x-3 flex justify-end">
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

export default AddNewWorkout;
