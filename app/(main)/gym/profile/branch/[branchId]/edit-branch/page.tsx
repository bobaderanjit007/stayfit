"use client";
import ContentTitle from "@/components/setup/ContentTitle";
import {
  branchFormDefaultValues,
  branchFormSchema,
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const EditBranch = () => {
  const router = useRouter();
  const editBranchForm = useForm<z.infer<typeof branchFormSchema>>({
    resolver: zodResolver(branchFormSchema),
    defaultValues: branchFormDefaultValues,
  });

  async function onSubmit(values: z.infer<typeof branchFormSchema>) {
    console.log(values);
  }

  return (
    <div>
      <ContentTitle title="Edit Brand Details" />

      {/* Edit Brand Form  */}
      <Form {...editBranchForm}>
        <form
          onSubmit={editBranchForm.handleSubmit(onSubmit)}
          className="space-y-8"
        >
          {/* Branch Details  */}
          <div>
            <span className="text-blue-400">Branch Details</span>
            <div className="grid grid-cols-4 gap-[0.8em]">
              <FormField
                control={editBranchForm.control}
                name="branch_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Branch Name *</FormLabel>
                    <FormControl>
                      <Input
                        autoComplete="off"
                        placeholder="Branch Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={editBranchForm.control}
                name="branch_type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Branch Type *</FormLabel>
                    <FormControl>
                      <Input
                        autoComplete="off"
                        placeholder="Branch Type"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={editBranchForm.control}
                name="branch_for"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Branch For *</FormLabel>
                    <FormControl>
                      <Input
                        autoComplete="off"
                        placeholder="Branch For"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={editBranchForm.control}
                name="established_date"
                render={() => (
                  <FormItem>
                    <FormLabel>Established Date </FormLabel>
                    <FormControl>
                      <DatePicker />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={editBranchForm.control}
                name="carpet_area"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Carpet Area </FormLabel>
                    <FormControl>
                      <Input
                        autoComplete="off"
                        placeholder="Carpet Area"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={editBranchForm.control}
                name="amenities"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Amenities </FormLabel>
                    <FormControl>
                      <Input
                        autoComplete="off"
                        placeholder="Amenities"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* GST Details  */}
          <div>
            <span className="text-blue-400">GST Details</span>
            <div className="grid grid-cols-4 gap-[0.8em]">
              <FormField
                control={editBranchForm.control}
                name="gst_charged_on"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>GST Charged On</FormLabel>
                    <FormControl>
                      <Input
                        autoComplete="off"
                        placeholder="GST Charged On"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={editBranchForm.control}
                name="gst_number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>GST number </FormLabel>
                    <FormControl>
                      <Input
                        autoComplete="off"
                        placeholder="GST number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={editBranchForm.control}
                name="gst_applicable"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>GST Applicable </FormLabel>
                    <FormControl>
                      <Select onValueChange={field.onChange}>
                        <SelectTrigger>
                          <SelectValue placeholder="GST Applicable" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value={"true"}>Yes</SelectItem>
                          <SelectItem value={"false"}>No</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={editBranchForm.control}
                name="cgst"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>CGST </FormLabel>
                    <FormControl>
                      <Input autoComplete="off" placeholder="CGST" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={editBranchForm.control}
                name="sgst"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>SGST </FormLabel>
                    <FormControl>
                      <Input autoComplete="off" placeholder="SGST" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={editBranchForm.control}
                name="igst"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>IGST </FormLabel>
                    <FormControl>
                      <Input autoComplete="off" placeholder="IGST" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Address Details */}
          <div>
            <span className="text-blue-400">Address Details</span>
            <div className="grid grid-cols-4 gap-[0.8em]">
              <div className="col-span-2">
                <FormField
                  control={editBranchForm.control}
                  name="address.address"
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
                control={editBranchForm.control}
                name="address.locality"
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
                control={editBranchForm.control}
                name="address.city"
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
                control={editBranchForm.control}
                name="address.state"
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
                control={editBranchForm.control}
                name="address.country"
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
                control={editBranchForm.control}
                name="address.pincode"
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

export default EditBranch;
