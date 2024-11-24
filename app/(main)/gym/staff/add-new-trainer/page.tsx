"use client";
import ContentTitle from "@/components/setup/ContentTitle";
import {
  trainerDefaultValues,
  trainerFormSchema,
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter } from "next/navigation";
import { DatePicker } from "@/components/ui/date-picker";
// import ImageUploader from "@/components/ui/image-uploader";

const AddNewTrainer = () => {
  const router = useRouter();
  const addTrainerForm = useForm<z.infer<typeof trainerFormSchema>>({
    resolver: zodResolver(trainerFormSchema),
    defaultValues: trainerDefaultValues,
  });

  function onSubmit(values: z.infer<typeof trainerFormSchema>) {
    console.log(values);
  }
  return (
    <div>
      <ContentTitle title="Add New Trainer" />

      {/* Add Member Form  */}
      <Form {...addTrainerForm}>
        <form
          onSubmit={addTrainerForm.handleSubmit(onSubmit)}
          className="space-y-8"
        >
          {/* Personal Details  */}
          <div>
            <span className="text-blue-400 flex items-center space-x-2 ">
              <span>Personal Details</span>{" "}
            </span>
            <div className={`grid grid-cols-4 gap-[0.8em] `}>
              {/* <div className="col-span-2 row-span-4">
                <ImageUploader title="" />
              </div> */}
              <div className="col-span-2">
                <FormField
                  control={addTrainerForm.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name *</FormLabel>
                      <FormControl>
                        <Input
                          autoComplete="off"
                          placeholder="Name"
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
                  control={addTrainerForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email *</FormLabel>
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
                control={addTrainerForm.control}
                name="mobileNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mobile Number *</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
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
                control={addTrainerForm.control}
                name="dateOfBirth"
                render={() => (
                  <FormItem className="flex flex-col justify-between">
                    <FormLabel className="mt-[0.4em]">Date Of Birth</FormLabel>
                    <FormControl>
                      <DatePicker ButtonClassName="w-[20em" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={addTrainerForm.control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Gender *</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={addTrainerForm.control}
                name="dateOfJoining"
                render={() => (
                  <FormItem className="flex flex-col justify-between">
                    <FormLabel className="mt-[0.4em]">
                      Date Of Joining
                    </FormLabel>
                    <FormControl>
                      <DatePicker ButtonClassName="w-[20em" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={addTrainerForm.control}
                name="specialization"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Specialization (Saperate By Commas) *</FormLabel>
                    <FormControl>
                      <Input
                        autoComplete="off"
                        placeholder="Specialization"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={addTrainerForm.control}
                name="experience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Experience (In Months) *</FormLabel>
                    <FormControl>
                      <Input
                        autoComplete="off"
                        type="number"
                        placeholder="Experience"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={addTrainerForm.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="gym">Gym</SelectItem>
                          <SelectItem value="yoga">Yoga</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={addTrainerForm.control}
                name="trainerFor"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Trainer For </FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="both">Both</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Salary Details  */}
          <div>
            <span className="text-blue-400 flex items-center space-x-2 ">
              <span>Salary Details</span>{" "}
            </span>
            <div className={`grid grid-cols-4 gap-[0.8em] `}>
              <FormField
                control={addTrainerForm.control}
                name="salary"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Salary ₹</FormLabel>
                    <FormControl>
                      <Input
                        autoComplete="off"
                        type="number"
                        placeholder="Salary ₹"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={addTrainerForm.control}
                name="absentDeduction"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Absenty Deduction in ₹</FormLabel>
                    <FormControl>
                      <Input
                        autoComplete="off"
                        type="number"
                        placeholder="Absenty Deduction in ₹"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={addTrainerForm.control}
                name="lateMarkAllowedPerMonth"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Late Mark Allowed Per Month</FormLabel>
                    <FormControl>
                      <Input
                        autoComplete="off"
                        type="number"
                        placeholder="Late Mark Allowed Per Month"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={addTrainerForm.control}
                name="lateComingDeduction"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Late Coming Deduction</FormLabel>
                    <FormControl>
                      <Input
                        autoComplete="off"
                        type="number"
                        placeholder="Late Coming Deduction"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Plan Details  */}
          {/* <div>
            <span className="text-blue-400">Plan Details</span>
            <div className="grid grid-cols-4 gap-[0.8em]">
              <FormField
                control={addTrainerForm.control}
                name="plan"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Select Plan *</FormLabel>
                    <FormControl>
                      <Select onValueChange={field.onChange}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Plan" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="walk-in">Walk in</SelectItem>
                          <SelectItem value="reference">Reference</SelectItem>
                          <SelectItem value="promotion">Promotion</SelectItem>
                          <SelectItem value="stayfit">Stayfit</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={addTrainerForm.control}
                name="package"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Package *</FormLabel>
                    <FormControl>
                      <Select onValueChange={field.onChange}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Package" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="walk-in">Walk in</SelectItem>
                          <SelectItem value="reference">Reference</SelectItem>
                          <SelectItem value="promotion">Promotion</SelectItem>
                          <SelectItem value="stayfit">Stayfit</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={addTrainerForm.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <Input
                        autoComplete="off"
                        placeholder="Price"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={addTrainerForm.control}
                name="negotiatedAmount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Negotiated Amount</FormLabel>
                    <FormControl>
                      <Input
                        autoComplete="off"
                        placeholder="Negotiated Amount"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div> */}

          {/* Address Details */}
          {/* <div>
            <span className="text-blue-400">Address Details</span>
            <div className="grid grid-cols-4 gap-[0.8em]">
              <div className="col-span-2">
                <FormField
                  control={addTrainerForm.control}
                  name="searchAddress"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Search Address </FormLabel>
                      <FormControl>
                        <Input
                          autoComplete="off"
                          placeholder="Search Address"
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
                  control={addTrainerForm.control}
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
              </div>
              <FormField
                control={addTrainerForm.control}
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
                control={addTrainerForm.control}
                name="state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>State </FormLabel>
                    <FormControl>
                      <Input
                        autoComplete="off"
                        placeholder="State"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={addTrainerForm.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Country </FormLabel>
                    <FormControl>
                      <Input
                        autoComplete="off"
                        placeholder="Country"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={addTrainerForm.control}
                name="pincode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pincode </FormLabel>
                    <FormControl>
                      <Input
                        autoComplete="off"
                        placeholder="Pincode"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div> */}

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

export default AddNewTrainer;
