"use client"

import { useState, useEffect } from "react"
import JobCard from "./JobCard"
import { fetchJobs } from "@/lib/api"
import { ChevronDown, Loader2, AlertCircle } from "lucide-react"
import type { Job } from "@/types/job"

export default function JobListingDashboard() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState("Most Relevant")

  useEffect(() => {
    const loadJobs = async () => {
      try {
        setLoading(true)
        setError(null)
        const fetchedJobs = await fetchJobs()
        setJobs(fetchedJobs)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch jobs")
        console.error("Error loading jobs:", err)
      } finally {
        setLoading(false)
      }
    }

    loadJobs()
  }, [])

  // Sort jobs based on selected option
  const sortedJobs = [...jobs].sort((a, b) => {
    switch (sortBy) {
      case "Newest First":
        return new Date(b.datePosted).getTime() - new Date(a.datePosted).getTime()
      case "Oldest First":
        return new Date(a.datePosted).getTime() - new Date(b.datePosted).getTime()
      case "Most Applicants":
        return b.applicantsCount - a.applicantsCount
      case "Most Views":
        return b.viewsCount - a.viewsCount
      default:
        return 0 // Most Relevant - keep original order
    }
  })

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-blue-600" />
            <p className="text-gray-600">Loading job opportunities...</p>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <AlertCircle className="w-8 h-8 mx-auto mb-4 text-red-500" />
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Error Loading Jobs</h2>
            <p className="text-gray-600 mb-4">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Opportunities</h1>
          <p className="text-gray-600">Showing {jobs.length} results</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-700 font-medium">Sorted by:</span>
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option>Most Relevant</option>
              <option>Newest First</option>
              <option>Oldest First</option>
              <option>Most Applicants</option>
              <option>Most Views</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Job Cards */}
      {sortedJobs.length > 0 ? (
        <div className="space-y-4">
          {sortedJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No job opportunities found.</p>
        </div>
      )}
    </div>
  )
}
