"use client";
import ContentTitle from "@/components/setup/ContentTitle";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

type Item = string;

const EditServices = () => {
  const [selectedCategories, setSelectedCategories] = useState<Item[]>([]);
  const [selectedActivities, setSelectedActivities] = useState<Item[]>([]);
  const [selectedServices, setSelectedServices] = useState<Item[]>([]);

  const toggleSelection = (
    item: Item,
    selectedItems: Item[],
    setSelectedItems: React.Dispatch<React.SetStateAction<Item[]>>
  ) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item)); // Remove item if already selected
    } else {
      setSelectedItems([...selectedItems, item]); // Add item if not selected
    }
  };

  return (
    <div className="space-y-9">
      <ContentTitle title="Edit Branch Services" />

      {/* Categories */}
      <div className="text-regular">
        <span className="w-fit text-[1.3rem]  ml-2">Categories</span>
        <div className="font-semibold text-[1rem] grid grid-cols-7  ml-0">
          {categories.map((category, index) => (
            <span
              key={index}
              onClick={() =>
                toggleSelection(
                  category,
                  selectedCategories,
                  setSelectedCategories
                )
              }
              className={`mx-2 rounded-md capitalize min-w-[10em] py-1 px-2 my-2 line-clamp-1 cursor-pointer ${
                selectedCategories.includes(category)
                  ? "bg-blue-700 text-white"
                  : "bg-gray-200"
              }`}
            >
              {category}
            </span>
          ))}
        </div>
      </div>

      {/* Activities */}
      <div className="text-regular">
        <span className="w-fit text-[1.3rem]  ml-2">Activities</span>
        <div className="font-semibold text-[1rem] grid grid-cols-7  ml-0">
          {activities.map((activity, index) => (
            <span
              key={index}
              onClick={() =>
                toggleSelection(
                  activity,
                  selectedActivities,
                  setSelectedActivities
                )
              }
              className={`mx-2 rounded-md capitalize min-w-[10em] py-1 px-2 my-2 line-clamp-1 cursor-pointer ${
                selectedActivities.includes(activity)
                  ? "bg-blue-700 text-white"
                  : "bg-gray-200"
              }`}
            >
              {activity}
            </span>
          ))}
        </div>
      </div>

      {/* Services */}
      <div className="text-regular">
        <span className="w-fit text-[1.3rem]  ml-2">Services</span>
        <div className="font-semibold text-[1rem] grid grid-cols-7 ml-0">
          {services.map((service, index) => (
            <span
              key={index}
              onClick={() =>
                toggleSelection(service, selectedServices, setSelectedServices)
              }
              className={`mx-2 rounded-md capitalize min-w-[10em] py-1 px-2 my-2 line-clamp-1 cursor-pointer ${
                selectedServices.includes(service)
                  ? "bg-blue-700 text-white"
                  : "bg-gray-200"
              }`}
            >
              {service}
            </span>
          ))}
        </div>
      </div>

      <div className="space-x-3 flex justify-end">
        <Button variant="outline">Cancel</Button>
        <Button
          onClick={() => {
            console.log({
              selectedCategories,
              selectedActivities,
              selectedServices,
            });
          }}
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default EditServices;

const categories = ["gym", "yoga", "dance", "sports", "spa", "martial arts"];

const activities = [
  "gym",
  "fitness",
  "workouts",
  "massage",
  "flexibility",
  "weight training",
  "cardio",
  "crossfit",
  "functional",
  "yoga",
  "power yoga",
  "breathing",
  "detox",
  "meditation",
  "praanayam",
  "stress management",
  "mantra chanting",
  "dance",
  "zumba",
  "aerobics",
  "bollywood style",
  "western",
  "classical",
  "sports",
  "football",
  "badminton",
  "cricket",
  "tennis",
  "swimming",
  "boxing",
  "kick boxing",
  "karate",
  "taekwondo",
  "jujutsu",
  "skating",
  "gymnastics",
  "soccer",
  "basketball",
  "baseball",
  "golf",
  "running",
  "volleyball",
  "table tennis",
  "skiing",
  "ice skating",
  "roller skating",
  "rugby",
  "pool",
  "darts",
  "bowling",
  "ice hockey",
  "surfing",
  "horse racing",
  "snowboarding",
  "skateboarding",
  "cycling",
  "archery",
  "fishing",
  "figure skating",
  "rock climbing",
  "sumo wrestling",
  "fencing",
  "water skiing",
  "jet skiing",
  "weight lifting",
  "scuba diving",
  "judo",
  "wind surfing",
  "kickboxing",
  "sky diving",
  "hang gliding",
  "bungee jumping",
  "mixed martial arts",
  "stick-fighting",
  "wrestling",
  "relaxation",
  "kung fu",
];

const services = [
  "group classes",
  "personal training",
  "weight management",
  "kinesis station",
  "physical therapy",
  "nutrition counseling",
  "yogic counselling",
  "pilates",
  "spinning classes",
  "cross-functional",
];
