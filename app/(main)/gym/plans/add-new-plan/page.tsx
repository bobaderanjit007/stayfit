"use client";
import React from "react";
import ContentTitle from "@/components/setup/ContentTitle";

import { zodResolver } from "@hookform/resolvers/zod";
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
import { useForm } from "react-hook-form";
import {
  planFormDefaultValues,
  planFormSchema,
} from "@/helpers/formSchemas/gymFormSchema";
import { DataTable } from "@/components/gym/enquiry/data-table";
import { planColumns, PlanPackages } from "./planColumns";

const randomPlanPackages: PlanPackages[] = Array.from({ length: 5 }, () => {
  const duration = Math.floor(Math.random() * 365) + 1; // Random duration between 1 and 365 days
  const sessions = Math.floor(Math.random() * 50) + 1; // Random sessions between 1 and 50
  const packagePrice = Math.floor(Math.random() * 50000) + 1000; // Random price between 1000 and 50000
  const discount = Math.floor(Math.random() * 5000); // Random discount between 0 and 5000
  const netPrice = packagePrice - discount; // Calculate net price

  return {
    id: crypto.randomUUID(), // Generate a random UUID for id
    name: `Package ${Math.random().toString(36).substring(7)}`, // Random alphanumeric name
    duration,
    sessions,
    packagePrice,
    discount,
    netPrice: netPrice > 0 ? netPrice : 0, // Ensure net price is not negative
  };
});

const AddNewPlan = () => {
  const router = useRouter();
  const addPlanForm = useForm<z.infer<typeof planFormSchema>>({
    resolver: zodResolver(planFormSchema),
    defaultValues: planFormDefaultValues,
  });

  function onSubmit(values: z.infer<typeof planFormSchema>) {
    router.push("/gym/dashboard");
    console.log(values);
  }

  return (
    <div className=" py-5 space-y-[1.5em]">
      <ContentTitle title="Add New Plan" />
      {/* Add Plan Form  */}
      <Form {...addPlanForm}>
        <form
          onSubmit={addPlanForm.handleSubmit(onSubmit)}
          className="space-y-8"
        >
          {/* Plan Details  */}
          <div>
            <span className="text-blue-400">Plan Details</span>
            <div className="grid grid-cols-4 gap-[0.8em]">
              <div className="col-span-2">
                <FormField
                  control={addPlanForm.control}
                  name="planDetails.planName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Plan Name*</FormLabel>
                      <FormControl>
                        <Input
                          autoComplete="off"
                          placeholder="Plan Name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={addPlanForm.control}
                name="planDetails.category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Plan Category </FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Plan Category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="gym">Gym</SelectItem>
                          <SelectItem value="yoga">Yoga</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={addPlanForm.control}
                name="planDetails.planType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Plan Type </FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Plan Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="basic">Basic</SelectItem>
                          <SelectItem value="special">Special</SelectItem>
                          <SelectItem value="fyt-lead">FYT Lead</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="col-span-3">
                <FormField
                  control={addPlanForm.control}
                  name="planDetails.description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Input
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

              <FormField
                control={addPlanForm.control}
                name="planDetails.planFor"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Plan For </FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Plan For" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="unisex">Unisex</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/*Package Details */}
          <div>
            <span className="text-blue-400">Package Details</span>
            <div className="grid grid-cols-4 gap-[0.8em]">
              <FormField
                control={addPlanForm.control}
                name="packageDetails.packageType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Package Type *</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Package Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="weekly">Weekly</SelectItem>
                          <SelectItem value="monthly">Monthly</SelectItem>
                          <SelectItem value="quarterly">Quarterly</SelectItem>
                          <SelectItem value="half-yearly">
                            Half Yearly
                          </SelectItem>
                          <SelectItem value="yearly">Yearly</SelectItem>
                          <SelectItem value="lifeTime">Lifetime</SelectItem>
                          <SelectItem value="custom">Custom Package</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* <FormField
                control={addPlanForm.control}
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
              /> */}
              {/* <FormField
                control={addPlanForm.control}
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
              /> */}
              <FormField
                control={addPlanForm.control}
                name="packageDetails.durationInDays"
                render={({ field }) => {
                  const packageName = addPlanForm.watch(
                    "packageDetails.packageType"
                  );
                  return (
                    <FormItem>
                      <FormLabel>Duration In Days *</FormLabel>
                      <FormControl>
                        <Input
                          autoComplete="off"
                          readOnly={packageName !== "custom"}
                          type="nubmer"
                          placeholder="Duration In Days"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={addPlanForm.control}
                name="packageDetails.sessions"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Sessions *</FormLabel>
                    <FormControl>
                      <Input
                        autoComplete="off"
                        type="nubmer"
                        placeholder="Sessions"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={addPlanForm.control}
                name="packageDetails.priceInRupees"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price (In Rupees) *</FormLabel>
                    <FormControl>
                      <Input
                        autoComplete="off"
                        type="number"
                        placeholder="Price In Rupees"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={addPlanForm.control}
                name="packageDetails.discountInRupees"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Discount (In Rupees) *</FormLabel>
                    <FormControl>
                      <Input
                        autoComplete="off"
                        type="nubmer"
                        placeholder="Discount In Rupees"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <Button>Add Package</Button>
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
      <hr />
      {/* Packages Table */}
      <ContentTitle title="Packages List" hideBackbtn />
      <DataTable columns={planColumns} data={randomPlanPackages} />
    </div>
  );
};

export default AddNewPlan;
