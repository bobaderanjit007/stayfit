"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { TrialFollowUpState } from "@/app/(main)/gym/enquiry/page";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  enquirFollowUpDefaultValues,
  enquirFollowUpFormSchema,
} from "@/helpers/formSchemas/memberFromSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";

type TrialFollowUpProps = {
  trialFollowUp: TrialFollowUpState;
  setTrialFollowUp: Dispatch<SetStateAction<TrialFollowUpState>>;
};

const TrialFollowUp = ({
  trialFollowUp,
  setTrialFollowUp,
}: TrialFollowUpProps) => {
  const [showFreeTrialDate, setShowFreeTrialDate] = useState<boolean>(false);

  const enquiryFollowUpForm = useForm<z.infer<typeof enquirFollowUpFormSchema>>(
    {
      resolver: zodResolver(enquirFollowUpFormSchema),
      defaultValues: enquirFollowUpDefaultValues,
    }
  );

  function onSubmit(values: z.infer<typeof enquirFollowUpFormSchema>) {
    console.log(values);
  }

  return (
    <Dialog
      open={trialFollowUp.show}
      onOpenChange={() => {
        setShowFreeTrialDate(false);
        setTrialFollowUp({
          show: false,
          trialData: null,
        });
      }}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Follow Up For Trial</DialogTitle>
        </DialogHeader>
        {/* Add Plan Form  */}
        <Form {...enquiryFollowUpForm}>
          <form
            onSubmit={enquiryFollowUpForm.handleSubmit(onSubmit)}
            className="space-y-8"
          >
            {/* Plan Details  */}
            <div>
              <span className="text-blue-400">
                {trialFollowUp?.trialData?.name}
              </span>
              <div className="grid grid-cols-2 gap-[0.8em]">
                <div className="col-span-2">
                  <FormField
                    control={enquiryFollowUpForm.control}
                    name="remark"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Remark *</FormLabel>
                        <FormControl>
                          <Textarea
                            autoComplete="off"
                            placeholder="Remark"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={enquiryFollowUpForm.control}
                  name="nextFollowUpDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Next Follow Up Date </FormLabel>
                      <FormControl>
                        <Input
                          autoComplete="off"
                          placeholder="Next Follow Up Date"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={enquiryFollowUpForm.control}
                  name="time"
                  render={({ field }) => {
                    const actionTaken =
                      enquiryFollowUpForm.watch("actionTaken");
                    const userApproach =
                      enquiryFollowUpForm.watch("userApproach");

                    if (
                      actionTaken === "free-trial" ||
                      userApproach === "free-trial"
                    ) {
                      setShowFreeTrialDate(true);
                    }
                    return (
                      <FormItem>
                        <FormLabel>Time </FormLabel>
                        <FormControl>
                          <Input
                            autoComplete="off"
                            placeholder="Time"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                {showFreeTrialDate && (
                  <React.Fragment>
                    <FormField
                      control={enquiryFollowUpForm.control}
                      name="trialStartDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Trial Start Date </FormLabel>
                          <FormControl>
                            <Input
                              autoComplete="off"
                              placeholder="Trial Start Date"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={enquiryFollowUpForm.control}
                      name="trialEndDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Trial End Date </FormLabel>
                          <FormControl>
                            <Input
                              autoComplete="off"
                              placeholder="Trial End Date"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </React.Fragment>
                )}

                <FormField
                  control={enquiryFollowUpForm.control}
                  name="actionTaken"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Action Taken </FormLabel>
                      <FormControl>
                        <Select onValueChange={field.onChange}>
                          <SelectTrigger>
                            <SelectValue placeholder="Action Taken" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="call">Call</SelectItem>
                            <SelectItem value="sms">SMS</SelectItem>
                            <SelectItem value="mail">Mail</SelectItem>
                            <SelectItem value="visit">Visit</SelectItem>
                            <SelectItem value="closed">Closed</SelectItem>
                            <SelectItem value="free-trial">
                              Free Trial
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={enquiryFollowUpForm.control}
                  name="userApproach"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>User Approach</FormLabel>
                      <FormControl>
                        <Select onValueChange={field.onChange}>
                          <SelectTrigger>
                            <SelectValue placeholder="User Approach" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="hot">Hot</SelectItem>
                            <SelectItem value="warm">Warm</SelectItem>
                            <SelectItem value="cold">Cold</SelectItem>
                            <SelectItem value="free-trial">
                              Free Trial
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <div className="space-x-3 flex justify-end">
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setShowFreeTrialDate(false);
                  setTrialFollowUp({
                    show: false,
                    trialData: null,
                  });
                }}
              >
                Cancel
              </Button>
              <Button type="submit">Follow Up</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default TrialFollowUp;
