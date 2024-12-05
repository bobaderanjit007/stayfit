"use client";
import ContentTitle from "@/components/setup/ContentTitle";
import {
  adminProfileFormDefaultValues,
  adminProfileFormSchema,
} from "@/helpers/formSchemas/adminFormSchema";
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
import { useRouter } from "next/navigation";
import { DatePicker } from "@/components/ui/date-picker";

const EditProfile = () => {
  const router = useRouter();
  const editProfileForm = useForm<z.infer<typeof adminProfileFormSchema>>({
    resolver: zodResolver(adminProfileFormSchema),
    defaultValues: adminProfileFormDefaultValues,
  });

  async function onSubmit(values: z.infer<typeof adminProfileFormSchema>) {
    console.log(values);
  }

  return (
    <div>
      <ContentTitle title="Edit Profile" />

      {/* Edit Profile Form  */}
      <Form {...editProfileForm}>
        <form
          onSubmit={editProfileForm.handleSubmit(onSubmit)}
          className="space-y-8"
        >
          {/* Admin Profile Details  */}
          <div>
            <span className="text-blue-400">Personal Details</span>
            <div className="grid grid-cols-4 gap-[0.8em]">
              <FormField
                control={editProfileForm.control}
                name="first_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name *</FormLabel>
                    <FormControl>
                      <Input
                        autoComplete="off"
                        placeholder="First Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={editProfileForm.control}
                name="last_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name *</FormLabel>
                    <FormControl>
                      <Input
                        autoComplete="off"
                        placeholder="Last Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="col-span-2">
                <FormField
                  control={editProfileForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          autoComplete="off"
                          placeholder="Email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={editProfileForm.control}
                name="mobileNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mobile Number *</FormLabel>
                    <FormControl>
                      <Input
                        autoComplete="off"
                        placeholder="Mobile Number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={editProfileForm.control}
                name="date_of_birth"
                render={() => (
                  <FormItem className="flex flex-col justify-between">
                    <FormLabel className="mt-[0.4em]">Date Of Birth</FormLabel>
                    <FormControl>
                      <DatePicker />
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

export default EditProfile;
