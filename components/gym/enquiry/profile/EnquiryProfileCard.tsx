"use client";
import React, { useState } from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { CiEdit } from "react-icons/ci";
import { MdOutlineMessage } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowBigRightDash, CrossIcon } from "lucide-react";
import { BiUpArrowCircle } from "react-icons/bi";
import { useParams } from "next/navigation";
import EnquiryFollowUp from "../../dialogs/enquiry/EnquiryFollowUp";
import CloseEnquiry from "../../dialogs/enquiry/CloseEnquiry";
import {
  CloseEnquiryState,
  EnquiryFollowUpState,
} from "@/app/(main)/gym/enquiry/page";

const EnquiryProfileCard = () => {
  const { userEnquiryId } = useParams();
  const [closeEnquiry, setCloseEnquiry] = useState<CloseEnquiryState>({
    show: false,
    enquiryId: "",
    name: "",
    remark: "",
  });

  const [enquiryFollowUp, setEnquiryFollowUp] = useState<EnquiryFollowUpState>({
    show: false,
    enquiryData: null,
  });

  return (
    <div>
      {/* Follow Up enquiry Dialog  */}
      <EnquiryFollowUp
        enquiryFollowUp={enquiryFollowUp}
        setEnquiryFollowUp={setEnquiryFollowUp}
      />
      {/* Close Enquiry Dialog */}
      <CloseEnquiry
        closeEnquiry={closeEnquiry}
        setCloseEnquiry={setCloseEnquiry}
      />
      <Card className="relative">
        <div className="absolute right-[0.8em] top-[0.4em] ">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                {" "}
                <Link href={`/gym/enquiry/${userEnquiryId}/edit-enquiry`}>
                  <CiEdit className="w-[1.3em] h-[1.3em]" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>Edit Profile</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <CardHeader className="space-y-3">
          <CardTitle className="flex space-x-[3em] font-medium text-[0.95rem] h-[10em]">
            {" "}
            <span
              className="block rounded-md flex-grow bg-slate-500 overflow-hidden bg-cover bg-no-repeat bg-center"
              style={{
                backgroundImage: `url(https://i.pinimg.com/originals/a5/a8/b9/a5a8b9ce5bda5871f138603fb10ce01d.jpg)`,
              }}
            ></span>
            <span className="flex flex-col w-[60%]">
              <span className="text-gray-600 uppercase text-[0.9rem] tracking-wide ">
                Enquiry
              </span>
              <span className="text-blue-400 capitalize">Jayant Sawarkar</span>
              <span className="text-[#707070]">jayantsawarkar@gmail.com</span>
              <span className="capitalize">Male</span>
              <span>8459299123</span>
              <span>Status - Hot</span>
            </span>
          </CardTitle>
          <CardDescription className="flex justify-between items-center ">
            <div className="space-x-[1.4em]">
              <Link
                href={`/gym/members/${userEnquiryId}/add-new-member`}
                className="w-full p-2"
              >
                <Button
                  variant="outline"
                  className="uppercase text-[0.7rem] p-2 py-0 text-blue-500 border-blue-500"
                >
                  <ArrowBigRightDash className="w-[1.5em] h-[1.5em]" /> Convert
                  To Member
                </Button>
              </Link>
              <Button
                variant="outline"
                className="uppercase text-[0.7rem] p-2 py-0 text-cyan-500 border-cyan-500"
                onClick={() =>
                  setEnquiryFollowUp({
                    show: true,
                    enquiryData: {
                      id: "E1",
                      name: "Alice Johnson",
                      phone: 9876543210,
                      gender: "female",
                      followUpDate: new Date("2024-12-10"),
                      enqStatus: "follow-up",
                      leadType: "warm",
                      expectedJoining: new Date("2025-01-01"),
                      enqDate: new Date("2024-12-01"),
                      lastUpdated: new Date("2024-12-05"),
                      remark: "Interested in morning batch.",
                      lastCallStatus: "call-connected",
                      referenceType: "promotion",
                      reference: "Instagram Ad",
                      assignedTo: "John Doe",
                      updatedBy: "Jane Smith",
                    },
                  })
                }
              >
                <BiUpArrowCircle className="w-[1.5em] h-[1.5em]" /> FollowUp
              </Button>
              <Button
                variant="outline"
                className="uppercase text-[0.7rem] p-2 py-0 text-red-500 border-red-500"
                onClick={() =>
                  setCloseEnquiry({
                    show: true,
                    enquiryId: "E1",
                    name: "Alice Johnson",
                  })
                }
              >
                <CrossIcon className="w-[1.5em] h-[1.5em] rotate-45" /> Close
                Enquiry
              </Button>
            </div>
            <div className="flex justify-end items-center space-x-3">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <a
                      href={`sms:${8459299123}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MdOutlineMessage className="w-[1.5em] h-[1.5em] text-blue-500" />
                    </a>{" "}
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>SMS</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>{" "}
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <a
                      href={`https://wa.me/${8459299123}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaWhatsapp className="w-[1.5em] h-[1.5em] -translate-y-[0.1em] text-green-600" />
                    </a>{" "}
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Whatsapp</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
};

export default EnquiryProfileCard;
