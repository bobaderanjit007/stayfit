"use client";
import React, { useState } from "react";
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
import { GetPlanColumns, PlanPackages } from "../../add-new-plan/planColumns";
import { randomPlanPackages } from "@/helpers/randomDataGenerator/plan";

const EditPlan = () => {
  const router = useRouter();

  const [palnPackages, setPlanPackages] =
    useState<PlanPackages[]>(randomPlanPackages);

  const editPlanForm = useForm<z.infer<typeof planFormSchema>>({
    resolver: zodResolver(planFormSchema),
    defaultValues: planFormDefaultValues,
  });

  function onSubmit(values: z.infer<typeof planFormSchema>) {
    router.push("/gym/dashboard");
    console.log(values.planDetails, palnPackages);
  }

  const addPackageToPlan = () => {
    const {
      packageDetails: {
        packageType,
        durationInDays,
        sessions,
        priceInRupees,
        discountInRupees,
      },
    } = editPlanForm.getValues();

    setPlanPackages([
      ...palnPackages,
      {
        id: crypto.randomUUID(),
        name: packageType || "",
        duration: durationInDays || 0,
        sessions: sessions || 0,
        packagePrice: priceInRupees || 0,
        discount: discountInRupees || 0,
        netPrice:
          priceInRupees && discountInRupees
            ? priceInRupees - discountInRupees
            : 0,
      },
    ]);
  };

  const handleRemovePackage = (id: string) => {
    setPlanPackages((prevPackages) =>
      prevPackages.filter((packageItem) => packageItem.id !== id)
    );
  };

  const planColumns = GetPlanColumns(handleRemovePackage);

  return (
    <div className=" py-5 space-y-[1.5em]">
      <ContentTitle title="Edit Plan" />
      {/* Add Plan Form  */}
      <Form {...editPlanForm}>
        <form
          onSubmit={editPlanForm.handleSubmit(onSubmit)}
          className="space-y-8"
        >
          {/* Plan Details  */}
          <div>
            <span className="text-blue-400">Plan Details</span>
            <div className="grid grid-cols-4 gap-[0.8em]">
              <div className="col-span-2">
                <FormField
                  control={editPlanForm.control}
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
                control={editPlanForm.control}
                name="planDetails.category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Plan Category </FormLabel>
                    <FormControl>
                      <Select onValueChange={field.onChange}>
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
                control={editPlanForm.control}
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

              <div className="col-span-2">
                <FormField
                  control={editPlanForm.control}
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
                control={editPlanForm.control}
                name="planDetails.showPlanOnline"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Show Plan Online </FormLabel>
                    <FormControl>
                      <Select
                        value={field.value ? "true" : "false"}
                        onValueChange={(value) =>
                          field.onChange(value === "true")
                        }
                        // defaultValue={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Show Plan Online" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="true">Yes</SelectItem>
                          <SelectItem value="false">No</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={editPlanForm.control}
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
                control={editPlanForm.control}
                name="packageDetails.packageType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Package Type </FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={(e) => {
                          field.onChange(e);

                          const durationMap: Record<string, number> = {
                            weekly: 7,
                            monthly: 30,
                            quarterly: 90,
                            "half-yearly": 180,
                            yearly: 365,
                            lifetime: 3650,
                          };

                          editPlanForm.setValue(
                            "packageDetails.durationInDays",
                            durationMap[e] || 0
                          );
                        }}
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
                          <SelectItem value="lifetime">Lifetime</SelectItem>
                          <SelectItem value="custom">Custom Package</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={editPlanForm.control}
                name="packageDetails.durationInDays"
                render={({ field }) => {
                  const packageName = editPlanForm.watch(
                    "packageDetails.packageType"
                  );

                  return (
                    <FormItem>
                      <FormLabel>Duration In Days </FormLabel>
                      <FormControl>
                        <Input
                          autoComplete="off"
                          readOnly={packageName !== "custom"}
                          type="nubmer"
                          placeholder="Duration In Days"
                          value={field.value}
                          onChange={(e) =>
                            field.onChange(Number(e.target.value))
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={editPlanForm.control}
                name="packageDetails.sessions"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Sessions </FormLabel>
                      <FormControl>
                        <Input
                          autoComplete="off"
                          type="nubmer"
                          placeholder="Sessions"
                          value={field.value}
                          onChange={(e) =>
                            field.onChange(Number(e.target.value))
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={editPlanForm.control}
                name="packageDetails.priceInRupees"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Price (In Rupees) </FormLabel>
                      <FormControl>
                        <Input
                          autoComplete="off"
                          type="nubmer"
                          placeholder="Price (In Rupees)"
                          value={field.value}
                          onChange={(e) =>
                            field.onChange(Number(e.target.value))
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={editPlanForm.control}
                name="packageDetails.discountInRupees"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormLabel>Discount (In Rupees) </FormLabel>
                      <FormControl>
                        <Input
                          autoComplete="off"
                          type="nubmer"
                          placeholder="Discount (In Rupees)"
                          value={field.value}
                          onChange={(e) =>
                            field.onChange(Number(e.target.value))
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
            </div>
          </div>
          <div className="flex justify-between">
            <Button type="button" onClick={addPackageToPlan}>
              Add Package
            </Button>
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
          </div>
        </form>
      </Form>
      <hr />
      {/* Packages Table */}
      <ContentTitle title="Packages List" hideBackbtn />
      <DataTable columns={planColumns} data={palnPackages} />
    </div>
  );
};

export default EditPlan;
