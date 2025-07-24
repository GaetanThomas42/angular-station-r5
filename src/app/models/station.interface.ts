import { Review } from "./review.interface"

export interface Station {
  id: number
  name: string
  latitude: number
  longitude: number
  power: string
  address: string
  coverImage: string
  description: string
  instruction: string
  reviews: Array<Review>
}
