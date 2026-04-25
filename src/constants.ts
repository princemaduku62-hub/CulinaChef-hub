/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Recipe, Chef, Plan } from "./types";

export const RECIPES: Recipe[] = [
  {
    id: "1",
    title: "Slow-Roasted Herb Lamb",
    description: "Succulent lamb shoulder braised for 6 hours with rosemary, garlic, and red wine.",
    image: "https://images.unsplash.com/photo-1551028461-68be84a39c10?q=80&w=800&auto=format&fit=crop",
    chefId: "c1",
    chefName: "Julian Vane",
    category: "Main Course",
    difficulty: "Medium",
    prepTime: "6h 30m",
    rating: 4.9,
    ingredients: ["2kg Lamb shoulder", "5 cloves Garlic", "Fresh Rosemary", "250ml Red Wine", "Root vegetables"],
    instructions: ["Score the lamb.", "Rub with garlic and rosemary.", "Sear in a hot pan.", "Place in roasting tray with wine and veg.", "Cover and roast at 140°C for 6 hours."],
    tips: ["Rest the meat for at least 30 minutes after roasting."]
  },
  {
    id: "2",
    title: "Miso Glazed Salmon",
    description: "A delicate balance of sweet and savory glaze on pan-seared Atlantic salmon.",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=800&auto=format&fit=crop",
    chefId: "c2",
    chefName: "Elena Rodrigues",
    category: "Seafood",
    difficulty: "Easy",
    prepTime: "25m",
    rating: 4.7,
    ingredients: ["Salmon fillets", "White Miso paste", "Mirin", "Sake", "Brown Sugar"],
    instructions: ["Mix glaze ingredients.", "Marinate salmon for 15 mins.", "Sear in a pan for 3-4 mins per side.", "Brush with extra glaze."],
  },
  {
    id: "3",
    title: "Wild Mushroom Risotto",
    description: "Creamy Arborio rice with a medley of forest mushrooms and aged Parmesan.",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=800&auto=format&fit=crop",
    chefId: "c3",
    chefName: "Marco Rossi",
    category: "Italian",
    difficulty: "Medium",
    prepTime: "45m",
    rating: 4.8,
    ingredients: ["Arborio Rice", "Porcini mushrooms", "Vegetable stock", "Shallots", "Parmesan"],
    instructions: ["Sauté shallots and mushrooms.", "Toast rice.", "Add stock one ladle at a time, stirring constantly.", "Finish with butter and cheese."],
  }
];

export const CHEFS: Chef[] = [
  {
    id: "c1",
    name: "Julian Vane",
    specialty: "Rustic European",
    bio: "Passionate about slow-cooking and traditional techniques found across the European countryside.",
    image: "https://images.unsplash.com/photo-1583394238182-6f3ad43267b1?q=80&w=400&auto=format&fit=crop",
    rating: 4.9,
    recipesCount: 42,
    followers: 1200
  },
  {
    id: "c2",
    name: "Elena Rodrigues",
    specialty: "Asian Fusion",
    bio: "Exploring the intersections of Mediterranean freshness and bold Asian umami flavors.",
    image: "https://images.unsplash.com/photo-1595273670152-fe738a0adfb7?q=80&w=400&auto=format&fit=crop",
    rating: 4.8,
    recipesCount: 35,
    followers: 850
  },
  {
    id: "c3",
    name: "Marco Rossi",
    specialty: "Classical Italian",
    bio: "A third-generation chef dedicated to the art of handmade pasta and seasonal simplicity.",
    image: "https://images.unsplash.com/photo-1577219481152-bca447ac5a0a?q=80&w=400&auto=format&fit=crop",
    rating: 4.9,
    recipesCount: 120,
    followers: 3400
  }
];

export const SUBSCRIPTION_PLANS: Plan[] = [
  {
    id: "free",
    name: "Free",
    price: "$0",
    features: ["Browse public recipes", "Basic search", "Join 1 chat room"]
  },
  {
    id: "basic",
    name: "Basic",
    price: "$5/mo",
    features: ["Access to Chef Tips", "Unlimited chat rooms", "Save up to 50 recipes", "Ad-free experience"],
    recommended: true
  },
  {
    id: "premium",
    name: "Premium",
    price: "$12/mo",
    features: ["Exclusive Masterclasses", "Private messaging with Chefs", "Downloadable recipe PDFs", "Early access to new content"]
  }
];
