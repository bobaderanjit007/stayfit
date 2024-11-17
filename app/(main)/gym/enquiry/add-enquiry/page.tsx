"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { IoCaretBackCircleOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
import {
  addEnquiryDefaultValues,
  addEnquiryFormSchema,
} from "@/helpers/formSchemas/memberFromSchema";
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

const AddEnquiry = () => {
  const router = useRouter();
  const addEnquiryForm = useForm<z.infer<typeof addEnquiryFormSchema>>({
    resolver: zodResolver(addEnquiryFormSchema),
    defaultValues: addEnquiryDefaultValues,
  });

  function onSubmit(values: z.infer<typeof addEnquiryFormSchema>) {
    router.push("/gym/dashboard");
    console.log(values);
  }

  return (
    <div>
      {/* Form Title  */}
      <div className="flex items-center text-[#4a4a4a] justify-between py-5">
        <IoCaretBackCircleOutline
          className="text-[1.8rem] cursor-pointer"
          onClick={() => router.back()}
        />
        <span className="text-[1.7em]">Add New Enquiry</span>
        <span></span>
      </div>

      {/* Add Enquiry Form  */}
      <Form {...addEnquiryForm}>
        <form
          onSubmit={addEnquiryForm.handleSubmit(onSubmit)}
          className="space-y-8"
        >
          {/* Personal Details  */}
          <div>
            <span className="text-blue-400">Personal Details</span>
            <div className="grid grid-cols-4 gap-[0.8em]">
              <div className="col-span-2">
                <FormField
                  control={addEnquiryForm.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-2">
                <FormField
                  control={addEnquiryForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email *</FormLabel>
                      <FormControl>
                        <Input placeholder="Email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={addEnquiryForm.control}
                name="mobileNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mobile Number *</FormLabel>
                    <FormControl>
                      <Input placeholder="Mobile Number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={addEnquiryForm.control}
                name="dateOfBirth"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date Of Birth</FormLabel>
                    <FormControl>
                      <Input placeholder="Mobile Number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={addEnquiryForm.control}
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
                control={addEnquiryForm.control}
                name="reference"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Reference *</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue />
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
            </div>
          </div>

          {/* Assign To Staff  */}
          <div>
            <span className="text-blue-400">Assign To Staff</span>
            <div className="grid grid-cols-4 gap-[0.8em]">
              <FormField
                control={addEnquiryForm.control}
                name="staffName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Staff Name *</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select Staff Name" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="walk-in">Satish</SelectItem>
                          <SelectItem value="reference">Vaibhav</SelectItem>
                          <SelectItem value="promotion">Avinash</SelectItem>
                          <SelectItem value="stayfit">Jayant</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Plan Details  */}
          <div>
            <span className="text-blue-400">Plan Details</span>
            <div className="grid grid-cols-4 gap-[0.8em]">
              <FormField
                control={addEnquiryForm.control}
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
                control={addEnquiryForm.control}
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
                control={addEnquiryForm.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <Input placeholder="Price" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={addEnquiryForm.control}
                name="negotiatedAmount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Negotiated Amount</FormLabel>
                    <FormControl>
                      <Input placeholder="Negotiated Amount" {...field} />
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
              <FormField
                control={addEnquiryForm.control}
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
                control={addEnquiryForm.control}
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
                control={addEnquiryForm.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <Input placeholder="Price" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={addEnquiryForm.control}
                name="negotiatedAmount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Negotiated Amount</FormLabel>
                    <FormControl>
                      <Input placeholder="Negotiated Amount" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default AddEnquiry;
