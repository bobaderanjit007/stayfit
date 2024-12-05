"use client";
import ContentTitle from "@/components/setup/ContentTitle";
import {
  brandDetailsFormDefaultValues,
  brandDetailsFormSchema,
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

const EditBrand = () => {
  const router = useRouter();
  const editBrandForm = useForm<z.infer<typeof brandDetailsFormSchema>>({
    resolver: zodResolver(brandDetailsFormSchema),
    defaultValues: brandDetailsFormDefaultValues,
  });

  async function onSubmit(values: z.infer<typeof brandDetailsFormSchema>) {
    console.log(values);
  }

  return (
    <div>
      <ContentTitle title="Edit Brand Details" />

      {/* Edit Brand Form  */}
      <Form {...editBrandForm}>
        <form
          onSubmit={editBrandForm.handleSubmit(onSubmit)}
          className="space-y-8"
        >
          {/* Brand Details  */}
          <div>
            <span className="text-blue-400">Brand Details</span>
            <div className="grid grid-cols-4 gap-[0.8em]">
              <FormField
                control={editBrandForm.control}
                name="brand_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Brand Name *</FormLabel>
                    <FormControl>
                      <Input
                        autoComplete="off"
                        placeholder="Brand Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Company Details  */}
          <div>
            <span className="text-blue-400">Company Details</span>
            <div className="grid grid-cols-4 gap-[0.8em]">
              <FormField
                control={editBrandForm.control}
                name="company_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company Name *</FormLabel>
                    <FormControl>
                      <Input
                        autoComplete="off"
                        placeholder="Company Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={editBrandForm.control}
                name="pan_number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Pan Number </FormLabel>
                    <FormControl>
                      <Input
                        autoComplete="off"
                        placeholder="Pan Number"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={editBrandForm.control}
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
                control={editBrandForm.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address </FormLabel>
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
                control={editBrandForm.control}
                name="website"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Website </FormLabel>
                    <FormControl>
                      <Input
                        autoComplete="off"
                        placeholder="Website"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Bank Details  */}
          <div>
            <span className="text-blue-400">Bank Details</span>
            <div className="grid grid-cols-4 gap-[0.8em]">
              <FormField
                control={editBrandForm.control}
                name="bank_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bank Name </FormLabel>
                    <FormControl>
                      <Input
                        autoComplete="off"
                        placeholder="Bank Name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={editBrandForm.control}
                name="bank_branch"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bank Branch </FormLabel>
                    <FormControl>
                      <Input
                        autoComplete="off"
                        placeholder="Bank Branch"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={editBrandForm.control}
                name="account_number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Account No. </FormLabel>
                    <FormControl>
                      <Input
                        autoComplete="off"
                        placeholder="Account No."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={editBrandForm.control}
                name="ifsc"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>IFSC </FormLabel>
                    <FormControl>
                      <Input autoComplete="off" placeholder="IFSC" {...field} />
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
                control={editBrandForm.control}
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
                control={editBrandForm.control}
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
                control={editBrandForm.control}
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
                control={editBrandForm.control}
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
                control={editBrandForm.control}
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
                control={editBrandForm.control}
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

export default EditBrand;
