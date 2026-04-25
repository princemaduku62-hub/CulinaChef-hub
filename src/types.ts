/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  chefId: string;
  chefName: string;
  category: string;
  difficulty: "Easy" | "Medium" | "Hard";
  prepTime: string;
  rating: number;
  ingredients: string[];
  instructions: string[];
  tips?: string[];
}

export interface Chef {
  id: string;
  name: string;
  specialty: string;
  bio: string;
  image: string;
  rating: number;
  recipesCount: number;
  followers: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: "User" | "Chef";
  avatar?: string;
  subscriptionTier: "Free" | "Basic" | "Premium";
}

export interface Plan {
  id: string;
  name: "Free" | "Basic" | "Premium";
  price: string;
  features: string[];
  recommended?: boolean;
}
