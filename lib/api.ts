import type { ApiResponse, JobDetailResponse, Job } from "@/types/job"

const BASE_URL = "https://akil-backend.onrender.com"

export async function fetchJobs(): Promise<Job[]> {
  try {
    const response = await fetch(`${BASE_URL}/opportunities/search`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store", // Ensure fresh data on each request
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const result: ApiResponse = await response.json()

    if (!result.success) {
      throw new Error(result.message || "Failed to fetch jobs")
    }

    return result.data || []
  } catch (error) {
    console.error("Error fetching jobs:", error)
    throw error
  }
}

export async function fetchJobById(id: string): Promise<Job> {
  try {
    const response = await fetch(`${BASE_URL}/opportunities/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store",
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const result: JobDetailResponse = await response.json()

    if (!result.success) {
      throw new Error(result.message || "Failed to fetch job details")
    }

    return result.data
  } catch (error) {
    console.error("Error fetching job details:", error)
    throw error
  }
}
