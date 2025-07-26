"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, MapPin, Calendar, Clock, Users, Eye, Star } from "lucide-react"
import { useState } from "react"
import type { Job } from "@/types/job"

interface JobDetailsProps {
  job: Job
}

export default function JobDetails({ job }: JobDetailsProps) {
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

  // Parse responsibilities if it's a string
  const getResponsibilities = () => {
    if (typeof job.responsibilities === "string") {
      try {
        return JSON.parse(job.responsibilities)
      } catch {
        return job.responsibilities.split("\n").filter((item) => item.trim())
      }
    }
    return job.responsibilities || []
  }

  // Parse requirements if it's a string
  const getRequirements = () => {
    if (typeof job.requirements === "string") {
      try {
        return JSON.parse(job.requirements)
      } catch {
        return job.requirements.split("\n").filter((item) => item.trim())
      }
    }
    return job.requirements || []
  }

  // Parse ideal candidate if it's a string
  const getIdealCandidate = () => {
    if (typeof job.idealCandidate === "string") {
      try {
        return JSON.parse(job.idealCandidate)
      } catch {
        return job.idealCandidate.split("\n").filter((item) => item.trim())
      }
    }
    return job.idealCandidate || []
  }

  const responsibilities = getResponsibilities()
  const requirements = getRequirements()
  const idealCandidate = getIdealCandidate()

  const handleImageError = () => {
    console.log(`Failed to load logo for ${job.orgName}:`, job.logoUrl)
    setImageError(true)
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Back Button */}
      <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Opportunities
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Job Header */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-start gap-4 mb-6">
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
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{job.title}</h1>
                <div className="flex items-center text-gray-600 mb-2">
                  <span className="font-medium text-lg">{job.orgName}</span>
                  <span className="mx-2">•</span>
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{job.location?.join(", ") || "Remote"}</span>
                </div>
                {/* Company Rating */}
                {job.average_rating > 0 && (
                  <div className="flex items-center gap-2">
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm font-medium">{job.average_rating.toFixed(1)}</span>
                    </div>
                    <span className="text-sm text-gray-500">({job.total_reviews} reviews)</span>
                  </div>
                )}
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-6 mb-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                <span>{job.applicantsCount} applicants</span>
              </div>
              <div className="flex items-center">
                <Eye className="w-4 h-4 mr-1" />
                <span>{job.viewsCount} views</span>
              </div>
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
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {job.categories?.map((category, index) => (
                <span key={index} className="px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700">
                  {category}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Description</h2>
            <div className="text-gray-700 leading-relaxed whitespace-pre-line">{job.description}</div>
          </div>

          {/* Responsibilities */}
          {responsibilities.length > 0 && (
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Responsibilities</h2>
              <ul className="space-y-3">
                {responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Requirements */}
          {requirements.length > 0 && (
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Requirements</h2>
              <ul className="space-y-3">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Ideal Candidate */}
          {idealCandidate.length > 0 && (
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ideal Candidate We Want</h2>
              <ul className="space-y-2">
                {idealCandidate.map((requirement, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-gray-800 mr-2">•</span>
                    <span className="text-gray-700">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* When & Where */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">When & Where</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Location</h3>
                <p className="text-gray-700">{job.location?.join(", ") || "Remote"}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Work Type</h3>
                <p className="text-gray-700">
                  {job.opType === "inPerson" ? "In Person" : job.opType === "remote" ? "Remote" : job.opType}
                </p>
              </div>
              {job.whenAndWhere && (
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Additional Details</h3>
                  <p className="text-gray-700">{job.whenAndWhere}</p>
                </div>
              )}
            </div>
          </div>

          {/* Perks and Benefits */}
          {job.perksAndBenefits && (
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Perks & Benefits</h2>
              <div className="text-gray-700 leading-relaxed whitespace-pre-line">{job.perksAndBenefits}</div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* About */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">About</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Calendar className="w-5 h-5 text-blue-500 mt-0.5 mr-3" />
                <div>
                  <p className="font-medium text-gray-900">Posted On:</p>
                  <p className="text-gray-600">{formatDate(job.datePosted)}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-blue-500 mt-0.5 mr-3" />
                <div>
                  <p className="font-medium text-gray-900">Deadline:</p>
                  <p className="text-gray-600">{formatDate(job.deadline)}</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-500 mt-0.5 mr-3" />
                <div>
                  <p className="font-medium text-gray-900">Location:</p>
                  <p className="text-gray-600">{job.location?.join(", ") || "Remote"}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Calendar className="w-5 h-5 text-blue-500 mt-0.5 mr-3" />
                <div>
                  <p className="font-medium text-gray-900">Start Date:</p>
                  <p className="text-gray-600">{formatDate(job.startDate)}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Calendar className="w-5 h-5 text-blue-500 mt-0.5 mr-3" />
                <div>
                  <p className="font-medium text-gray-900">End Date:</p>
                  <p className="text-gray-600">{formatDate(job.endDate)}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Categories */}
          {job.categories && job.categories.length > 0 && (
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {job.categories.map((category, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Required Skills */}
          {job.requiredSkills && job.requiredSkills.length > 0 && (
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Required Skills</h3>
              <div className="flex flex-wrap gap-2">
                {job.requiredSkills.map((skill, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Company Contact */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Company Contact</h3>
            <div className="space-y-2 text-sm">
              {job.orgEmail && (
                <p className="text-gray-600">
                  <span className="font-medium">Email:</span> {job.orgEmail}
                </p>
              )}
              {job.orgPrimaryPhone && (
                <p className="text-gray-600">
                  <span className="font-medium">Phone:</span> {job.orgPrimaryPhone}
                </p>
              )}
            </div>
          </div>

          {/* Apply Button */}
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  )
}
