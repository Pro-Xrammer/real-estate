import type { Property } from "@/types"

export const properties: Property[] = [
  {
    id: 1,
    title: "Mountain View Plot",
    location: "Jutial, Gilgit",
    price: "₨ 2,500,000",
    size: "10 Kanal",
    type: "Residential",
    featured: true,
    image: "/assets/mountain.jpeg",
    description: "Premium residential plot with stunning views of Rakaposhi mountain.",
    views: 234,
    likes: 45,
  },
  {
    id: 2,
    title: "Riverside Agricultural Land",
    location: "Danyore, Gilgit",
    price: "₨ 3,200,000",
    size: "15 Kanal",
    type: "Agricultural",
    featured: false,
    image: "/assets/danyore.jpeg",
    description: "Fertile agricultural land with water access from the Gilgit River.",
    views: 189,
    likes: 32,
  },
  {
    id: 3,
    title: "Commercial Plot",
    location: "Main Bazar, Gilgit",
    price: "₨ 5,800,000",
    size: "5 Kanal",
    type: "Commercial",
    featured: true,
    image: "/assets/comm.jpeg",
    description: "Prime commercial plot in the heart of Gilgit's business district.",
    views: 456,
    likes: 78,
  },
  {
    id: 4,
    title: "Valley View Land",
    location: "Naltar Valley",
    price: "₨ 1,800,000",
    size: "8 Kanal",
    type: "Residential",
    featured: false,
    image: "/assets/nalter.jpeg",
    description: "Scenic plot with panoramic views of the lush Naltar Valley.",
    views: 167,
    likes: 29,
  },
]
