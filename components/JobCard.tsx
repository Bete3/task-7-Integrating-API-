"use client"

import Link from "next/link"
import Image from "next/image"
import { MapPin, Calendar, Clock, Users, Eye } from "lucide-react"
import { useState } from "react"
import type { Job } from "@/types/job"

interface JobCardProps {
  job: Job
}

export default function JobCard({ job }: JobCardProps) {
  const [imageError, setImageError] = useState(false)

  // Format date for display
  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    } catch {
      return dateString
    }
  }

  const handleImageError = () => {
    console.log(`Failed to load logo for ${job.orgName}:`, job.logoUrl)
    setImageError(true)
  }

  return (
    <Link href={`/job/${job.id}`}>
      <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-200 cursor-pointer">
        <div className="flex items-start gap-4">
          {/* Company Logo */}
          <div className="flex-shrink-0">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl flex items-center justify-center overflow-hidden relative">
              {job.logoUrl && !imageError ? (
                <Image
                  src={job.logoUrl || "/placeholder.svg"}
                  alt={`${job.orgName} logo`}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover rounded-xl"
                  onError={handleImageError}
                  unoptimized
                />
              ) : (
                <span className="text-white font-bold text-xl">{job.orgName?.charAt(0) || "C"}</span>
              )}
            </div>
          </div>

          {/* Job Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{job.title}</h3>
                <div className="flex items-center text-gray-600 text-sm">
                  <span className="font-medium">{job.orgName}</span>
                  <span className="mx-2">•</span>
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{job.location?.join(", ") || "Remote"}</span>
                </div>
              </div>
              <div className="text-right text-sm text-gray-500">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>Posted: {formatDate(job.datePosted)}</span>
                </div>
                <div className="flex items-center mt-1">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>Deadline: {formatDate(job.deadline)}</span>
                </div>
              </div>
            </div>

            {/* Job Description */}
            <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3">{job.description}</p>

            {/* Stats */}
            <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                <span>{job.applicantsCount} applicants</span>
              </div>
              <div className="flex items-center">
                <Eye className="w-4 h-4 mr-1" />
                <span>{job.viewsCount} views</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  job.opType === "inPerson"
                    ? "bg-green-100 text-green-700"
                    : job.opType === "remote"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-purple-100 text-purple-700"
                }`}
              >
                {job.opType === "inPerson" ? "In Person" : job.opType === "remote" ? "Remote" : job.opType}
              </span>
              {job.categories?.slice(0, 2).map((category, index) => (
                <span key={index} className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                  {category}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
