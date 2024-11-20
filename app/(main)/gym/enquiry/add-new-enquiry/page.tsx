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
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
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
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AddNewEnquiry = () => {
  const router = useRouter();
  const [date, setDate] = React.useState<Date>();

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
                  control={addEnquiryForm.control}
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
                control={addEnquiryForm.control}
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
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[280px] justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormField
                control={addEnquiryForm.control}
                name="mobileNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date Of Birth</FormLabel>
                    <FormControl>
                      <Input
                        autoComplete="off"
                        placeholder="Date Of Birth"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* <FormField
                control={addEnquiryForm.control}
                name="dateOfBirth"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date Of Birth</FormLabel>
                    <FormControl>
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={(date) => field.onChange(date)}
                        className="rounded-md border"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              /> */}
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
                    <FormLabel>Staff Name </FormLabel>
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
                    <FormLabel>Select Plan </FormLabel>
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
                    <FormLabel>Package </FormLabel>
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
                control={addEnquiryForm.control}
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
          </div>

          {/* Address Details */}
          <div>
            <span className="text-blue-400">Address Details</span>
            <div className="grid grid-cols-4 gap-[0.8em]">
              <div className="col-span-2">
                <FormField
                  control={addEnquiryForm.control}
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
                  control={addEnquiryForm.control}
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
                control={addEnquiryForm.control}
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
                control={addEnquiryForm.control}
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
                control={addEnquiryForm.control}
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
                control={addEnquiryForm.control}
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

export default AddNewEnquiry;
