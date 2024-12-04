"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
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
import { DatePicker } from "@/components/ui/date-picker";
import {
  equipmentDefaultValues,
  equipmentFormSchema,
} from "@/helpers/formSchemas/gymFormSchema";
import ContentTitle from "@/components/setup/ContentTitle";
import ImageUploader from "@/components/ui/image-uploader";
import { Textarea } from "@/components/ui/textarea";

const AddNewEquipment = () => {
  const router = useRouter();
  const addEquipmentForm = useForm<z.infer<typeof equipmentFormSchema>>({
    resolver: zodResolver(equipmentFormSchema),
    defaultValues: equipmentDefaultValues,
  });

  function onSubmit(values: z.infer<typeof equipmentFormSchema>) {
    console.log(values);
  }
  return (
    <div>
      <ContentTitle title="Add New Equipment" />

      <Form {...addEquipmentForm}>
        <form
          onSubmit={addEquipmentForm.handleSubmit(onSubmit)}
          className="space-y-8"
        >
          {/* Add New Expense Details  */}
          <div className="grid grid-cols-4 gap-[0.8em]">
            <FormField
              control={addEquipmentForm.control}
              name="equipmentName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Equipment Name *</FormLabel>
                  <FormControl>
                    <Input
                      autoComplete="off"
                      placeholder="Equipment Name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={addEquipmentForm.control}
              name="equipmentType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Equipment Type</FormLabel>
                  <FormControl>
                    <Input
                      autoComplete="off"
                      placeholder="Equipment Type"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={addEquipmentForm.control}
              name="equipmentNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Equipment Number</FormLabel>
                  <FormControl>
                    <Input
                      autoComplete="off"
                      placeholder="Equipment Number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={addEquipmentForm.control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quantity </FormLabel>
                  <FormControl>
                    <Input
                      autoComplete="off"
                      type="number"
                      placeholder="Quantity"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={addEquipmentForm.control}
              name="color"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Color</FormLabel>
                  <FormControl>
                    <Input autoComplete="off" placeholder="Color" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={addEquipmentForm.control}
              name="purpose"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Purpose</FormLabel>
                  <FormControl>
                    <Input
                      autoComplete="off"
                      placeholder="Purpose"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={addEquipmentForm.control}
              name="vendorName"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Vendor Name</FormLabel>
                    <FormControl>
                      <Input
                        autoComplete="off"
                        placeholder="Vendor Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={addEquipmentForm.control}
              name="cost"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Cost</FormLabel>
                    <FormControl>
                      <Input
                        autoComplete="off"
                        type="number"
                        placeholder="Cost"
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
              control={addEquipmentForm.control}
              name="purchaseDate"
              render={() => (
                <FormItem className="flex flex-col justify-between">
                  <FormLabel className="mt-[0.4em]">Purchase Date</FormLabel>
                  <FormControl>
                    <DatePicker />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={addEquipmentForm.control}
              name="nextServiceDate"
              render={() => (
                <FormItem className="flex flex-col justify-between">
                  <FormLabel className="mt-[0.4em]">
                    Next Service Date
                  </FormLabel>
                  <FormControl>
                    <DatePicker />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={addEquipmentForm.control}
              name="manufacturerName"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Manufacturer Name</FormLabel>
                    <FormControl>
                      <Input
                        autoComplete="off"
                        placeholder="Manufacturer Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={addEquipmentForm.control}
              name="category"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <FormControl>
                      <Input
                        autoComplete="off"
                        placeholder="Category"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <FormField
              control={addEquipmentForm.control}
              name="length"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Length</FormLabel>
                    <FormControl>
                      <Input
                        autoComplete="off"
                        type="number"
                        placeholder="Length"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />{" "}
            <FormField
              control={addEquipmentForm.control}
              name="width"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Width</FormLabel>
                    <FormControl>
                      <Input
                        autoComplete="off"
                        type="number"
                        placeholder="Width"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />{" "}
            <FormField
              control={addEquipmentForm.control}
              name="height"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Height</FormLabel>
                    <FormControl>
                      <Input
                        autoComplete="off"
                        type="number"
                        placeholder="Height"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />{" "}
            <FormField
              control={addEquipmentForm.control}
              name="weight"
              render={({ field }) => {
                return (
                  <FormItem>
                    <FormLabel>Weight</FormLabel>
                    <FormControl>
                      <Input
                        autoComplete="off"
                        type="number"
                        placeholder="Weight"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                );
              }}
            />
            <div className="col-span-2">
              <FormField
                control={addEquipmentForm.control}
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
          <ImageUploader title="Upload Equipment Image" />
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

export default AddNewEquipment;
