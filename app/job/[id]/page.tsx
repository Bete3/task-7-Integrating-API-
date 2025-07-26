import { Suspense } from "react"
import JobDetails from "@/components/JobDetails"
import { fetchJobById } from "@/lib/api"
import { Loader2, AlertCircle } from "lucide-react"
import Link from "next/link"

interface JobPageProps {
  params: Promise<{ id: string }>
}

async function JobContent({ id }: { id: string }) {
  try {
    const job = await fetchJobById(id)
    return <JobDetails job={job} />
  } catch (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <AlertCircle className="w-12 h-12 mx-auto mb-4 text-red-500" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Job Not Found</h1>
          <p className="text-gray-600 mb-4">
            {error instanceof Error ? error.message : "The job you are looking for could not be found."}
          </p>
          <Link
            href="/"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Jobs
          </Link>
        </div>
      </div>
    )
  }
}

function LoadingJobDetails() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-blue-600" />
        <p className="text-gray-600">Loading job details...</p>
      </div>
    </div>
  )
}

export default async function JobPage({ params }: JobPageProps) {
  const { id } = await params

  return (
    <main className="min-h-screen bg-gray-50">
      <Suspense fallback={<LoadingJobDetails />}>
        <JobContent id={id} />
      </Suspense>
    </main>
  )
}
